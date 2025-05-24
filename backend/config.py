from dotenv import load_dotenv
import os

load_dotenv()


LINKEDIN_CSRF_TOKEN_ID = os.getenv('LINKEDIN_CSRF_TOKEN_ID')
LINKEDIN_COOKIE = os.getenv('LINKEDIN_COOKIE')
GOOGLE_GEMINI_API_KEY = os.getenv('GOOGLE_GEMINI_API_KEY')
GOOGLE_GEMINI_LLM_MODEL = os.getenv('GOOGLE_GEMINI_LLM_MODEL')