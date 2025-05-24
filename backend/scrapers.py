

class LinkedInScraper:
    def __init__(self, cookie: str, csrf_token: str, referer: str) -> None:
        """
        Initialize the LinkedInScraper with the cookie, csrf_token, and referer.
        
        :param cookie: The cookie to use for the request. (e.g., 'lang=v=2&lang=en-us;...Z8Z6k2_')
        :param csrf_token: The csrf_token to use for the request. (e.g., 'ajax:29398...97691624'))
        :param referer: The referer to use for the request. (e.g., 'https://www.linkedin.com/in/foobar/)
        """
        self.cookie = cookie
        self.csrf_token = csrf_token
        self.referer = referer

    def get_connection_current_company(self):
        ...
    
    def get_connection_education(self):
        ...

    def get_connection_past_companies(self):
        ...

    def get_company_active_jobs(self):
        ...
