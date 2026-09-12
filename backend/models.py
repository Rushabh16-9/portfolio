from pydantic import BaseModel, EmailStr, Field
from typing import List, Optional
from datetime import datetime

class ContactSubmission(BaseModel):
    name: str = Field(..., min_length=2, example="John Doe")
    email: str = Field(..., example="john@example.com")
    subject: str = Field(..., min_length=3, example="Project Inquiry")
    message: str = Field(..., min_length=5, example="Hi Rushabh, I would like to discuss a project.")

class ContactResponse(BaseModel):
    status: str
    message: str
    submission_id: str
    timestamp: str

class ProjectItem(BaseModel):
    id: str
    title: str
    description: str
    category: str  # "AI & ML", "Full Stack Web", "Mobile Apps", "Systems & MCP"
    tech_stack: List[str]
    github_url: str
    live_url: Optional[str] = None
    featured: bool = False
    highlights: List[str]

class SkillCategory(BaseModel):
    category: str
    icon: str
    skills: List[dict]  # [{"name": "React", "level": 90, "highlight": "Next.js 14, Redux"}]

class ChatQuery(BaseModel):
    message: str
    session_id: Optional[str] = "default"

class ChatResponse(BaseModel):
    reply: str
    suggested_actions: Optional[List[str]] = []
