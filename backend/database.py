import sqlite3
import uuid
from datetime import datetime
import os

DB_FILE = os.path.join(os.path.dirname(__file__), "portfolio.db")

def init_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS contact_submissions (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            subject TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at TEXT NOT NULL
        )
    """)
    conn.commit()
    conn.close()

def save_contact(name: str, email: str, subject: str, message: str) -> str:
    submission_id = str(uuid.uuid4())[:8]
    created_at = datetime.now().isoformat()
    
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO contact_submissions (id, name, email, subject, message, created_at)
        VALUES (?, ?, ?, ?, ?, ?)
    """, (submission_id, name, email, subject, message, created_at))
    conn.commit()
    conn.close()
    
    return submission_id

def get_all_contacts():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, email, subject, message, created_at FROM contact_submissions ORDER BY created_at DESC")
    rows = cursor.fetchall()
    conn.close()
    
    return [
        {
            "id": row[0],
            "name": row[1],
            "email": row[2],
            "subject": row[3],
            "message": row[4],
            "created_at": row[5]
        }
        for row in rows
    ]
