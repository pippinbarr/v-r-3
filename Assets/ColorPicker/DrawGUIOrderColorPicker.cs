using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

public class DrawGUIOrderColorPicker : MonoBehaviour {

	public bool loadFromScene = true;
	public ColorPicker[] colorPicker;

	private List<ColorPicker> mColorPickerList;

	void Start()
	{
		if(loadFromScene)
		{
			colorPicker = GameObject.FindObjectsOfType<ColorPicker>();
		}
		mColorPickerList = new List<ColorPicker>();
		mColorPickerList.AddRange(colorPicker);

		mColorPickerList = mColorPickerList.OrderBy(item => item.drawOrder).ToList();
		mColorPickerList.Reverse();
		mColorPickerList.CopyTo(colorPicker);

		foreach(var elem in mColorPickerList)
		{
			elem.useExternalDrawer = true;
		}
	}
	
	void OnGUI () 
	{
		foreach(var elem in mColorPickerList)
		{
			elem._DrawGUI();
		}
	}
}
