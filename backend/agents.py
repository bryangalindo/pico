from google import genai
import config as cfg
from models import User, Company, Education, Job

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


def writer_agent(client, referrer: User, relationship_summary: str, job: Job):
    referrer_name = referrer.first_name
    prompt = f"""
        Craft a LinkedIn referral request message to {referrer_name}, with the following relationship summary, asking for a referral to the position of "{job.title}".

        Relationship Summary: {relationship_summary}

        Include:
        - The job url: {job.url}
        - Gratitude
        - A soft ask (not pushy)
        - Friendly but professional tone
    """
    return gemini_chat(client, prompt, system_msg="You are a job-hunting assistant helping write referral messages.")


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
    job = Job(title="Software Engineer", url="https://www.linkedin.com/jobs/1234567890")
    
    # results = relationship_analyst_agent(client, candidate, referrer)
    relationship_summary = """
        **How they might know each other:**

        *   **Shared Workplace:** Both John and Jane Doe currently work at the same company, "CompanyFooBar". This is a strong indicator that they know each other professionally.
        *   **Shared Education:** Both attended the same university, "University of BazQux". This suggests they may have met during their studies, potentially overlapping on courses, clubs, or social events.

        **Any shared interests or history:**

        *   **Professional:** They share a current professional interest as colleagues at CompanyFooBar. This implies shared projects, team meetings, or company initiatives.
        *   **Educational:** They both have a shared history at University of BazQux which could indicate shared academic interests, activities, or professors.

        **The tone/strength of their relationship:**

        *   The information provided suggests a moderately strong relationship. The fact that they are *currently* colleagues strengthens the connection beyond just a past shared alma mater. The strength of the relationship will depend on the size of their company and the frequency of their interaction in their roles.
        *   Without more information, it's difficult to gauge the *depth* of their relationship. They could be close friends, casual acquaintances, or simply aware of each other due to their shared employer and educational background.

        **Potential relevance for a referral message:**

        *   **High Relevance:** Jane is a highly relevant referral source for John due to both their shared workplace and university.
        *   **Referral Message Focus:** A referral message could leverage both aspects of their connection:
            *   **CompanyFooBar Context:** "As a fellow colleague at CompanyFooBar..." or "Having worked with you on \[Project Name] at CompanyFooBar, I know your insights are valuable..."
            *   **University of BazQux Connection:** "As a fellow BazQux alum..." or "Knowing you also attended University of BazQux, I thought you might be a good person to connect with..."
        *   **Tailoring is Key:** The specific phrasing should be adjusted based on the role John is seeking a referral for. If it's within CompanyFooBar, emphasizing their work together would be more impactful. If it's outside the company, highlighting their shared education might be a better approach.

        In conclusion, Jane Doe is a potentially valuable referral source for John Doe. A well-crafted referral message that acknowledges their shared work experience and education would be most effective.
    """
    # esults = writer_agent(client, referrer, relationship_summary, job)
    raw_referral_message = """
        Subject: Referral Request - Software Engineer Role at [Company Name - if known from the Job URL, otherwise omit]

        Hi Jane,

        Hope you're having a great week!

        I'm reaching out because I saw a Software Engineer position open at [Company Name - if known from the Job URL, otherwise omit - otherwise say "a company"] that looks like a great fit for my skills and experience. The job description is available here: [https://www.linkedin.com/jobs/1234567890](https://www.linkedin.com/jobs/1234567890)

        As a fellow colleague at CompanyFooBar, I know you have valuable insights into the tech landscape. I was hoping you might be willing to take a quick look at the role and let me know if you think it would be a good fit for me, and if you'd be comfortable referring me.

        Of course, no worries at all if you're too busy or don't feel it's the right fit. I just thought I'd reach out given our shared connection at CompanyFooBar (and also, go BazQux!).

        Thanks so much for your time and consideration, Jane. I really appreciate it.

        Best regards,

        John Doe
    """
    print(results)

