from google import genai
import config as cfg
from models import User, Company, Education

from dataclasses import asdict

client = genai.Client(api_key=cfg.GOOGLE_GEMINI_API_KEY)


def gemini_chat(client, prompt, system_msg=None):
    if system_msg:
        prompt = f"{system_msg}\n\n{prompt}"
    response = client.models.generate_content(
        model=cfg.GOOGLE_GEMINI_LLM_MODEL, contents=prompt
    )
    return response.text.strip()


def relationship_analyst_agent(client,candidate: User, referrer: User):
    candidate = asdict(candidate)
    referrer = asdict(referrer)
    
    prompt = f"""
        Analyze and summarize the relationship between the following two individuals based on their bios and connection context.

        Candidate: {candidate}
        Referrer: {referrer}

        Summarize:
        - How they might know each other
        - Any shared interests or history
        - The tone/strength of their relationship
        - Potential relevance for a referral message
    """
    return gemini_chat(client, prompt, system_msg="You are a professional relationship analyst for career and networking purposes.")


if __name__ == "__main__":
    client = genai.Client(api_key=cfg.GOOGLE_GEMINI_API_KEY)
    results = gemini_chat(client, "Hello, how are you?")
    company = Company(
        name="CompanyFooBar",
        url="https://www.foobar.com",
        jobs=[]
    )
    education = Education(
        name="University of BazQux",
        url="https://www.bazqux.edu"
    )
    candidate = User(
        first_name="John",
        last_name="Doe",
        profile_url="https://www.linkedin.com/in/john-doe-1234567890",
        companies=[company],
        education=[education]
    )
    referrer = User(
        first_name="Jane",
        last_name="Doe",
        profile_url="https://www.linkedin.com/in/jane-doe-1234567890",
        companies=[company],
        education=[education]
    )
    results = relationship_analyst_agent(client, candidate, referrer)
    print(results)

