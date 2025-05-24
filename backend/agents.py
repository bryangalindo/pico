from google import genai
import config as cfg


client = genai.Client(api_key=cfg.GOOGLE_GEMINI_API_KEY)


def gemini_chat(client, prompt, system_msg=None):
    if system_msg:
        prompt = f"{system_msg}\n\n{prompt}"
    response = client.models.generate_content(
        model=cfg.GOOGLE_GEMINI_LLM_MODEL, contents=prompt
    )
    return response.text.strip()


if __name__ == "__main__":
    client = genai.Client(api_key=cfg.GOOGLE_GEMINI_API_KEY)
    results = gemini_chat(client, "Hello, how are you?")
    print(results)
