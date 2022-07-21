using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using UnityEngine.SceneManagement;


public class TitleScript : MonoBehaviour
{

    public GameObject title;
    
    public float fadeInDelay = 1f;
    public float fadeTime = 2.5f;
    public float fadeOutDelay = 3f;

    public float sceneChangeDelay = 1f;

    private float fadeDirection = 0f;

    private Color currentColor;

    // Use this for initialization
    void Start()
    {
        title.GetComponent<Text>().enabled = true;
        currentColor = title.GetComponent<Text>().color;
        currentColor.a = 0f;
        title.GetComponent<Text>().color = currentColor;

        Screen.lockCursor = true;
        Cursor.visible = false;

        StartCoroutine(FadeSequence());
    }
	
    void Update () {
        currentColor.a += fadeDirection * (Time.deltaTime / fadeTime);
        title.GetComponent<Text>().color = currentColor;
    }

    // Update is called once per frame
    IEnumerator FadeSequence()
    {
        Debug.Log("Waiting to fade in...");
        yield return new WaitForSeconds(fadeInDelay);

        Debug.Log("Fading in...");
        fadeDirection = 1f;

        yield return new WaitForSeconds(fadeTime);

        fadeDirection = 0f;

        Debug.Log("Waiting to fade out...");
        yield return new WaitForSeconds(fadeOutDelay);

        Debug.Log("Fading out...");
        fadeDirection = -1f;

        yield return new WaitForSeconds(fadeTime);

        fadeDirection = 0f;
        Debug.Log("Waiting to change scene...");
            
        yield return new WaitForSeconds(sceneChangeDelay);

        Application.LoadLevel("v r 3");

            // title.GetComponent<Text>().enabled = false;
    }
}
