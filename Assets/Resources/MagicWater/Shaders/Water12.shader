// Upgrade NOTE: replaced '_Object2World' with 'unity_ObjectToWorld'

Shader "Custom/Water12" 
{
	Properties 
	{
		_NrmMap2D ("NrmMap", 2D) = "white" {}
		_ReflTexture2D ("ReflectionMap", 2D) = "white" {}
		_NormalTime ("NormalTime", Float) = 0.0 
		_SunColor("SunColor", Vector) = (0.89,0.73,0.56)
		//_FogColor("FogColor", Vector) = (1.0,1.0,1.0,1.0)
		_SunLightDir("SunLightDir", Vector) = (0.0,0.0,1.0)
		//_Cube ("Reflection Cubemap", Cube) = "_Skybox" {}
		_WaterColor("WaterColor", Vector) = (0.0,0.0,1.0)
	}
	SubShader
	{
		Pass
		{
			Tags { "LightMode" = "ForwardBase" }
			CGPROGRAM
			
			#pragma vertex VetexShader
			#pragma fragment FragmentShader
			#pragma target 3.0
			#include "UnityCG.cginc"

			#pragma multi_compile_fwdbase
			#include "AutoLight.cginc"
			#include "Lighting.cginc"
		
			struct vertOut
			{
				float4 pos        : SV_POSITION;
				float2 vLocalPos  : TEXCOORD0;
				float3 vViewVec   : TEXCOORD1;
				float4 vScreenPos   : TEXCOORD2;
				LIGHTING_COORDS(3,4)
			};
			
			sampler2D _NrmMap2D;
			sampler2D _ReflTexture2D;
			float     _NormalTime;
			float3	  _SunColor;
			//float4	  _FogColor;
			float3    _SunLightDir;
			//samplerCUBE _Cube;
			float3    _WaterColor;
			
			vertOut VetexShader(appdata_base v)
			{
				vertOut o;
				o.pos =  mul( UNITY_MATRIX_MVP, v.vertex);
				float4 tempLocal =  mul(unity_ObjectToWorld, v.vertex);
				o.vLocalPos = float2(tempLocal.x,tempLocal.z);
				o.vViewVec = tempLocal.xyz - _WorldSpaceCameraPos;
				o.vScreenPos = o.pos;
				TRANSFER_VERTEX_TO_FRAGMENT(o);
				return o;
			}
			
			float4 ComputeNormal(float2 vLocalPos, float3 vViewVec)
			{
				float4 iN = float4(0.0f,1.0f,0.0f,0.0f);
				
				float2 t1 = float2(vLocalPos.x/25, vLocalPos.y/25) + float2(_NormalTime/55,_NormalTime/55);
				float2 t2 = float2(vLocalPos.x/400,vLocalPos.y/400) + float2(_NormalTime/150,_NormalTime/150);
				float2 t3 = float2(vLocalPos.x/200,vLocalPos.y/200) - float2(_NormalTime/70,_NormalTime/65);
				
				float4 N  = tex2D(_NrmMap2D,t1);
				N *= 2.0*tex2D(_NrmMap2D,t3);
				N *= 2.0*tex2D(_NrmMap2D,t2);
				
				N =normalize(2.0*N-1.0);

				float fFacDist = saturate((length(vViewVec)-2000.0)/5000.0f);
				float fFac = saturate(0.07+fFacDist);
				
			    N.xyz = normalize(N.xzy*fFac+iN*(1.0-fFac));
			    return N.xyzw;
			}
			
			float cc(float3 vIncidence, float3 vNormal3)
			{
				const float nSnell     = 1.34;
				float costhetai = abs(dot(vIncidence,vNormal3));
				float thetai    = acos(costhetai); 
				float sinthetat = sin(thetai)/nSnell;
				float thetat    = asin(sinthetat);
				float reflectivity;
				if (abs(thetai) < 0.00001) 
				{
					reflectivity = (nSnell - 1)/(nSnell + 1);
				} 
				else 
				{
					float fs = sin(thetat - thetai) / sin(thetat + thetai);
					float ts = tan(thetat - thetai) / tan(thetat + thetai);
					reflectivity = 0.5 * ( fs*fs + ts*ts );
				}
				return reflectivity;
			}
			
			float4 FragmentShader(vertOut In) : SV_Target
			{
				float3 fog_color = float3(1.0f,1.0f,1.0f);
					float fog_end = 10000.0f;
					float fog_start = 1.0f;

					float fDist = length(In.vViewVec);
					float4 vNormal = ComputeNormal(In.vLocalPos, In.vViewVec);
				
					//float3 vSunVec = float3(-0.94f, -0.23f, -0.22f);
					//float3 vSunVec = float3(0.0f, -1*sin(_SunAngle), -1*cos(_SunAngle));

					float3 vSunVec = _SunLightDir;
					float3 vSunColor = _SunColor;
					//float3 vSunColor = _SunColor.rgb;
					float fSunFactor = saturate(-vSunVec.y);
				
					float3  vWaterColor = _WaterColor;

					float lux_trsl = 0.3f;
					float lux = lux_trsl*lux_trsl;
					lux = lux*lux;

				
					float3 vNormal3 = vNormal.xyz;
					float3 vIncidence = normalize(In.vViewVec);
					float3 vReflect;
					vReflect.xyz = reflect(vIncidence, vNormal3);
				
					float fReflectivity = 0.85f;
				
					float reflectivity = cc(vIncidence, vNormal3)* fReflectivity;
					

					vReflect.y = abs(vReflect.y);

					float3 worldViewDir = normalize(In.vViewVec);
					float3 vSurfNormal = float3(0.0f,1.0f,0.0f);
					float3 worldRefl = reflect(worldViewDir, vNormal3);

					float4 vSkyColor = float4(172.0/255, 204.0/255, 250.0/255, 1.0);

					float3 vSeaColor = vWaterColor*0.8;
				
					float3 sea_clr_top = (vSeaColor.rgb*4.0);

					float3 bottom_clr = vSeaColor.rgb;

					float interp = (vIncidence.y + 1.0f)*(0.2 + 0.8*lux_trsl);
		
					float3 sea_clr = lerp(bottom_clr, sea_clr_top, interp)*fSunFactor;//*sun_color.r;


				
					float fSunStrength = 10 * saturate(0.05f + 1.25f * -vSunVec.y) * saturate(0.05f + 1.25f * -vSunVec.y); 
					float fSunShininess = 256 + 768 * (1.0f - saturate(-vSunVec.y + 0.6f));
				
					float3 vRsun = normalize(2 * dot(vNormal3, vSunVec) * vNormal3 - vSunVec);
					float fSpec = max(0,pow( max(0,dot(vRsun, vIncidence)), fSunShininess)*fSunStrength);
				
					float3 screenPos = float3(In.vScreenPos.xyz/In.vScreenPos.w);
					const float reflrefr_offset = 1.1;
					screenPos.x = (screenPos.x + 1) * 0.5f;
					screenPos.y = (screenPos.y + 1) * 0.5f;
					screenPos.z = reflrefr_offset/screenPos.z;
					float2 refl_tc = screenPos.xy - screenPos.z * vNormal3.xz * 0.5;
					float4 local_refl = tex2D(_ReflTexture2D, refl_tc);

					vSkyColor.rgb = lerp(vSkyColor.rgb + fSpec * vSunColor * 20.0f, local_refl.rgb, local_refl.a);
				
					
				
					float4 ret = float4((reflectivity * vSkyColor.rgb  + (1.0 - reflectivity)*sea_clr), 1);
					
				
				float attenuation = 0.0f;
				attenuation = max(0.5f, LIGHT_ATTENUATION(In));

				return ret * attenuation;

			}
			
			ENDCG
		}
	}

	Fallback "VertexLit"
}
