// by @torahhorse

using UnityEngine;
using System.Collections;

// allows player to zoom in the FOV when holding a button down
[RequireComponent(typeof(Camera))]
public class CameraZoom : MonoBehaviour
{
    public float zoomFOV = 30.0f;
    public float zoomSpeed = 9f;
	
    private float targetFOV;
    private float baseFOV;

    void Start()
    {
        SetBaseFOV(GetComponent<Camera>().fieldOfView);
    }

    void Update()
    {
        if (Input.GetMouseButton(0))
        {
            targetFOV = zoomFOV;
        }
        else
        {
            targetFOV = baseFOV;
        }
		
        UpdateZoom();
    }

    private void UpdateZoom()
    {
        GetComponent<Camera>().fieldOfView = Mathf.Lerp(GetComponent<Camera>().fieldOfView, targetFOV, zoomSpeed * Time.deltaTime);
    }

    public void SetBaseFOV(float fov)
    {
        baseFOV = fov;
    }
}
