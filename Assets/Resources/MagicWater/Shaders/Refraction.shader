// Upgrade NOTE: replaced '_Object2World' with 'unity_ObjectToWorld'

Shader "Custom/Refraction"
{
	Properties
	{
		_MainTex ("Texture", 2D) = "white" {}
	}
	SubShader
	{
		Tags { "RenderType"="Transparent" }
		LOD 100

		Pass
		{
			CGPROGRAM
			#pragma vertex vert
			#pragma fragment frag
			
			#include "UnityCG.cginc"

			struct appdata
			{
				float4 vertex : POSITION;
				float3 normal : NORMAL;
				float2 uv : TEXCOORD0;
			};

			struct v2f
			{
				float4 uvw : TEXCOORD0;
				float4 vertex : SV_POSITION;
			};

			sampler2D _MainTex;
			float4 _MainTex_ST;

			v2f vert (appdata v)
			{
				v2f o;
				o.vertex = mul(UNITY_MATRIX_MVP, v.vertex);
				o.uvw.z =  mul(unity_ObjectToWorld, v.vertex).y;
				o.uvw.xy = TRANSFORM_TEX(v.uv, _MainTex);
				float3 worldNormal = UnityObjectToWorldNormal(v.normal);
				o.uvw.w = max(0, dot(worldNormal, _WorldSpaceLightPos0.xyz));
				return o;
			}
			
			fixed4 frag (v2f i) : SV_Target
			{
				clip(-i.uvw.z + 0.5);
				clip(i.uvw.z + 2);
				float factor = lerp(0.0f, 1.0f, (i.uvw.z+2)/2.0f);
				return tex2D(_MainTex, i.uvw.xy)  * factor * i.uvw.w;
			}
			ENDCG
		}
	}
}
