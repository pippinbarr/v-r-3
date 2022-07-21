using UnityEngine;
using System.Collections;

public class DemoGUI_ColorPickerDemo : MonoBehaviour {
	
	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void OnGUI () {
		GUIStyle style = new GUIStyle(GUI.skin.label);
		style.fontSize = 12;
		//style.font = GUI.skin.button.font;
		//style.font.material.color = Color.white;
		GUI.Label(new Rect(Screen.width - 180, 10, 180, 80), "Copyright (C) Sergey Taraban", style);
		GUI.Label(new Rect(Screen.width - 180, 30, 180, 80), "Website http://staraban.com", style);	
	}
}
