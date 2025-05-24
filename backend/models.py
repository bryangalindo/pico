from dataclasses import dataclass


@dataclass
class Job:
    title: str
    url: str


@dataclass
class Company:
    name: str
    url: str
    jobs: list[Job]


@dataclass
class Education:
    name: str
    url: str


@dataclass
class User:
    first_name: str
    last_name: str
    profile_url: str
    companies: list[Company]
    education: list[Education]