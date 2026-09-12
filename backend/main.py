from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import os
from models import ContactSubmission, ContactResponse, ChatQuery, ChatResponse
from database import init_db, save_contact, get_all_contacts

app = FastAPI(
    title="Rushabh Shah Portfolio API",
    description="Python FastAPI backend powering Rushabh Shah's Portfolio Website",
    version="1.0.0"
)

# Enable CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup_event():
    init_db()

@app.get("/")
def read_root():
    return {
        "title": "Rushabh Shah Portfolio API",
        "status": "online",
        "docs_url": "/docs",
        "developer": "Rushabh Shah"
    }

@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "backend": "FastAPI (Python 3.10+)",
        "database": "SQLite Connected"
    }

@app.post("/api/contact", response_model=ContactResponse)
def submit_contact_form(data: ContactSubmission):
    try:
        sub_id = save_contact(
            name=data.name,
            email=data.email,
            subject=data.subject,
            message=data.message
        )
        return ContactResponse(
            status="success",
            message="Thank you! Your message has been received. Rushabh will get back to you soon.",
            submission_id=sub_id,
            timestamp=datetime.now().isoformat()
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to submit message: {str(e)}")

@app.get("/api/contact/messages")
def list_contact_messages():
    return {
        "count": len(get_all_contacts()),
        "messages": get_all_contacts()
    }

@app.get("/api/projects")
def get_projects():
    return [
        {
            "id": "smart-ai-wardrobe",
            "title": "Smart AI Wardrobe",
            "description": "An intelligent fashion & outfit recommendation application powered by AI and computer vision models to catalog clothing items and suggest styled outfits.",
            "category": "AI & ML",
            "tech_stack": ["TypeScript", "Dart", "Flutter", "Vision AI", "Tailwind CSS"],
            "github_url": "https://github.com/Rushabh16-9/smart-ai-wardrobe",
            "featured": True,
            "highlights": [
                "AI-driven clothing segmentation & category tagger",
                "Cross-platform Flutter mobile & web interface",
                "Automated outfit matching algorithms"
            ]
        },
        {
            "id": "onfees-ai-extraction",
            "title": "Onfees Admission Form AI Data Extraction",
            "description": "Enterprise-grade automated document parser built during internship at Onfees to extract student admission details from scanned applications using AI OCR.",
            "category": "AI & ML",
            "tech_stack": ["TypeScript", "PHP", "Python OCR", "MySQL", "REST API"],
            "github_url": "https://github.com/Rushabh16-9/onfees-admission-form-AI-based-extraction",
            "featured": True,
            "highlights": [
                "Accelerated manual document processing by over 80%",
                "Built robust fallback validation for high accuracy",
                "Integrated directly into Onfees core student portal"
            ]
        },
        {
            "id": "gmail-mcp-server",
            "title": "Gmail MCP Server",
            "description": "Model Context Protocol (MCP) Server enabling AI assistants (like Claude/Gemini) to interact securely with Gmail APIs for message filtering and auto-replies.",
            "category": "Systems & MCP",
            "tech_stack": ["Python", "TypeScript", "MCP Specification", "Google APIs"],
            "github_url": "https://github.com/Rushabh16-9/gmail-mcp-server",
            "featured": True,
            "highlights": [
                "Full compliance with Model Context Protocol standards",
                "Secure OAuth2 token management & scope isolation",
                "Supports search, read, draft, and message dispatching"
            ]
        },
        {
            "id": "fitness-app",
            "title": "Comprehensive Fitness App",
            "description": "Feature-rich mobile fitness companion app for workout tracking, customized meal planning, exercise posture tips, and real-time activity metrics.",
            "category": "Mobile Apps",
            "tech_stack": ["Dart", "Flutter", "Firebase", "State Management"],
            "github_url": "https://github.com/Rushabh16-9/fitness-app-new-best-change",
            "featured": False,
            "highlights": [
                "Smooth 60fps responsive Flutter animations",
                "Offline workout logging with automatic cloud sync",
                "Interactive progress charts and calorie trackers"
            ]
        },
        {
            "id": "wisdom-app",
            "title": "Wisdom Bite-Sized News App",
            "description": "An Inshorts-style concise knowledge and news delivery mobile application built with Flutter, presenting curated insights in 60-word card decks.",
            "category": "Mobile Apps",
            "tech_stack": ["Dart", "Flutter", "REST API", "JSON Parser"],
            "github_url": "https://github.com/Rushabh16-9/wishdom-app-inshorts-",
            "featured": False,
            "highlights": [
                "Swipeable card interface with minimal latency",
                "Category filters: Tech, Business, Science, World",
                "Bookmark and offline reading capabilities"
            ]
        },
        {
            "id": "travel-planner",
            "title": "AI Travel Planner",
            "description": "Interactive web app that designs custom travel itineraries based on destination preferences, budget constraints, and vacation duration.",
            "category": "Full Stack Web",
            "tech_stack": ["TypeScript", "Next.js", "Tailwind CSS", "API Integration"],
            "github_url": "https://github.com/Rushabh16-9/travel-planner-",
            "featured": False,
            "highlights": [
                "Interactive destination map & activity timeline",
                "Dynamic budget calculator with breakdown charts",
                "One-click PDF itinerary export"
            ]
        },
        {
            "id": "business-software",
            "title": "Business Enterprise Software Suite",
            "description": "Cross-platform mobile and PC business management solution for inventory, invoice generation, and financial record auditing.",
            "category": "Full Stack Web",
            "tech_stack": ["JavaScript", "HTML5/CSS3", "Electron", "Node.js"],
            "github_url": "https://github.com/Rushabh16-9/Business-software-pc",
            "featured": False,
            "highlights": [
                "Unified codebase for PC (Desktop) and Mobile web",
                "Automated PDF bill generator with GST formatting",
                "Local encrypted SQLite storage"
            ]
        },
        {
            "id": "prediction-game",
            "title": "Real-time Prediction Game",
            "description": "Interactive web application featuring real-time odds tracking, user scoreboards, and instant result evaluation.",
            "category": "Full Stack Web",
            "tech_stack": ["TypeScript", "React", "WebSockets", "Node.js"],
            "github_url": "https://github.com/Rushabh16-9/prediction-game",
            "featured": False,
            "highlights": [
                "WebSocket integration for live leaderboard updates",
                "Streak tracking and reward badge system",
                "Glassmorphic high-contrast UI design"
            ]
        }
    ]

@app.get("/api/skills")
def get_skills():
    return [
        {
            "category": "Frontend & Web UI",
            "icon": "Code2",
            "skills": [
                {"name": "React.js / Next.js 14", "level": 92, "highlight": "App Router, SSR, Server Components"},
                {"name": "TypeScript & JavaScript", "level": 90, "highlight": "ES6+, Async, Static Typing"},
                {"name": "Tailwind CSS & Styling", "level": 95, "highlight": "Glassmorphism, Animations, Responsive UI"},
                {"name": "HTML5 / CSS3", "level": 95, "highlight": "Semantic Tags, Flexbox, Grid, Canvas"}
            ]
        },
        {
            "category": "Backend & Cloud APIs",
            "icon": "Server",
            "skills": [
                {"name": "Python (FastAPI / Flask)", "level": 88, "highlight": "Async APIs, Pydantic, Uvicorn"},
                {"name": "PHP & Web Frameworks", "level": 85, "highlight": "Onfees enterprise portal, REST endpoints"},
                {"name": "Node.js & Express", "level": 82, "highlight": "RESTful services, Middleware, Auth"},
                {"name": "SQL & Databases", "level": 85, "highlight": "MySQL, SQLite, Query optimization"}
            ]
        },
        {
            "category": "Mobile App Development",
            "icon": "Smartphone",
            "skills": [
                {"name": "Flutter & Dart", "level": 86, "highlight": "Fitness, Wardrobe, Wisdom app projects"},
                {"name": "Cross-Platform UI", "level": 88, "highlight": "Android & iOS unified codebases"},
                {"name": "State Management", "level": 84, "highlight": "Provider, Riverpod, BLoC fundamentals"}
            ]
        },
        {
            "category": "AI, ML & Tooling",
            "icon": "Cpu",
            "skills": [
                {"name": "AI Document Extraction", "level": 88, "highlight": "OCR, Form parsing at Onfees"},
                {"name": "MCP (Model Context Protocol)", "level": 85, "highlight": "Built Gmail MCP Server for AI assistants"},
                {"name": "Git & GitHub Workflow", "level": 92, "highlight": "17+ Repositories, Version Control"},
                {"name": "Linux & CLI Utilities", "level": 82, "highlight": "Shell scripting, deployment commands"}
            ]
        }
    ]

@app.post("/api/chat", response_model=ChatResponse)
def ai_assistant_chat(query: ChatQuery):
    msg = query.message.lower().strip()
    
    # Advanced Intent Matching with LinkedIn Verified Details for Rushabh Shah
    if any(k in msg for k in ["education", "college", "diploma", "degree", "sbmp", "bhagubhai", "school", "study", "university"]):
        reply = "🎓 **Rushabh's Education (Verified from LinkedIn)**:\n\n- **Institution**: **SVKM's Shri Bhagubhai Mafatlal Polytechnic (SBMP), Mumbai**\n- **Degree**: **Diploma in Computer Engineering**\n- **Program Details**: 3-Year Full-Time Computer Engineering curriculum with specialized in-plant industrial training.\n- **Key Coursework**: Data Structures & Algorithms, Object-Oriented Programming, Database Systems (SQL), Operating Systems, Software Engineering, and Computer Networks."
        actions = ["Tell me about Onfees Internship", "View Skills Matrix", "Explore 17+ Projects", "Contact Rushabh"]
        
    elif any(k in msg for k in ["experience", "work", "onfees", "internship", "job", "role"]):
        reply = "💼 **Rushabh's Professional Experience (Onfees)**:\n\n- **Role**: **Full Stack Developer Intern** at **Onfees** (Since Dec 2025)\n- **Key Responsibilities**:\n  1. Engineering enterprise student portal web applications using PHP, TypeScript, and MySQL.\n  2. Developing an **AI-driven Admission Form Data Extraction** system using OCR to automate student application data parsing, reducing manual entry time by over 80%.\n  3. Maintaining secure RESTful APIs and database schemas."
        actions = ["View Onfees AI Project", "What skills does he use?", "Open Contact Page"]
        
    elif any(k in msg for k in ["skill", "python", "next", "react", "flutter", "php", "sql", "stack", "technology"]):
        reply = "⚡ **Rushabh's Core Technical Stack**:\n\n- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion\n- **Backend**: Python (FastAPI / Flask), PHP, Node.js, RESTful APIs\n- **Databases**: MySQL, SQLite\n- **Mobile**: Flutter & Dart (Cross-platform Android & iOS)\n- **AI & Systems**: AI Document OCR Parsing, Vision AI, Model Context Protocol (MCP) Servers"
        actions = ["Go to Skills Page", "View Projects Showcase", "Contact Rushabh"]
        
    elif any(k in msg for k in ["project", "github", "repo", "portfolio", "wardrobe", "mcp", "fitness", "wisdom"]):
        reply = "🛠️ **Rushabh's Top Projects (17+ Repositories on GitHub)**:\n\n1. **Smart AI Wardrobe** (Flutter & Vision AI outfit cataloger)\n2. **Onfees Admission Form AI Extraction** (PHP & TypeScript document OCR parser)\n3. **Gmail MCP Server** (Python Model Context Protocol server for LLM assistants)\n4. **Fitness App** (Flutter workout & activity tracking companion)\n5. **Wisdom News Reader** (Inshorts-style bite-sized news card app)"
        actions = ["Go to Projects Page", "View GitHub Profile", "Contact Rushabh"]
        
    elif any(k in msg for k in ["contact", "email", "linkedin", "hire", "reach", "message"]):
        reply = "📬 **Connect with Rushabh Shah**:\n\n- **LinkedIn**: [linkedin.com/in/rushabh-shah-867814299](https://www.linkedin.com/in/rushabh-shah-867814299)\n- **GitHub**: [github.com/rushabh16-9](https://github.com/rushabh16-9)\n- **Direct Message**: Use the interactive form on the Contact Page to send a message saved directly to Rushabh's database!"
        actions = ["Open Contact Page", "Visit LinkedIn Profile", "Visit GitHub Account"]
        
    elif any(k in msg for k in ["hi", "hello", "hey", "who are you", "start"]):
        reply = "👋 **Hello! I am Rushabh's AI Portfolio Assistant.**\n\nI can help you explore:\n- Rushabh's **Diploma in Computer Engineering** at SVKM's SBMP\n- His **Full Stack Developer Internship** at Onfees\n- His **17+ GitHub Repositories** & Technical Skills\n- Direct Contact & Hiring links!"
        actions = ["Show Education Details", "Onfees Internship", "View Projects", "Contact Rushabh"]
        
    else:
        reply = f"Rushabh Shah is a **Full Stack & AI Developer** from SVKM's Shri Bhagubhai Mafatlal Polytechnic (SBMP), currently interning at **Onfees**. He builds applications in Next.js, Python FastAPI, PHP, and Flutter. How can I assist you further?"
        actions = ["Education at SBMP", "Onfees Internship", "Featured Projects", "Contact Rushabh"]
        
    return ChatResponse(reply=reply, suggested_actions=actions)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
