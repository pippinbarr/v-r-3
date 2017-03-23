using UnityEngine;
using System.Collections;

public class ObjectColor : MonoBehaviour {

	void OnSetColor(Color color)
	{
		Material mt = new Material(GetComponent<Renderer>().sharedMaterial);
		mt.color = color;
		GetComponent<Renderer>().material = mt;
	}

	void OnGetColor(ColorPicker picker)
	{
		picker.NotifyColor(GetComponent<Renderer>().material.color);
	}
}
