using UnityEngine;
using System.Collections;

public class CameraBgColor : MonoBehaviour {
	
	void OnSetColor(Color color)
	{
		GetComponent<Camera>().backgroundColor = color;
	}

	void OnGetColor(ColorPicker picker)
	{
		picker.NotifyColor(GetComponent<Camera>().backgroundColor);
	}
}
