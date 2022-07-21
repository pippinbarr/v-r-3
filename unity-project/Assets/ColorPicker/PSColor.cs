using UnityEngine;
using System.Collections;

public class PSColor : MonoBehaviour {

	void OnSetColor(Color color)
	{
		GetComponent<ParticleSystem>().GetComponent<Renderer>().material.SetColor("_TintColor", color);
	}
	
	void OnGetColor(ColorPicker picker)
	{
		picker.NotifyColor(GetComponent<ParticleSystem>().GetComponent<Renderer>().material.GetColor("_TintColor"));
	}
}
