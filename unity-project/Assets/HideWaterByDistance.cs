using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HideWaterByDistance : MonoBehaviour {

	private GameObject water;
	private Camera mainCamera;
	private float MAX_DIST = 8;

	// Use this for initialization
	void Start () {
		water = transform.Find("Water").gameObject;
		mainCamera = GameObject.Find("Main Camera").GetComponent<Camera>();
	}
	
	// Update is called once per frame
	void Update () {
		float dist = Vector3.Distance(transform.position,mainCamera.transform.position);
		// Debug.Log(dist);
		if (dist > MAX_DIST) {
			water.SetActive(false);
		}
		else {
			water.SetActive(true);
		}
	}
}
