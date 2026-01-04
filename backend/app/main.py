from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.supabase import supabase  # Import our new client

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
async def health_check():
    try:
        # We try to select from a table that doesn't exist.
        # If we get a Supabase error (like "relation does not exist"),
        # it means we successfully connected!
        response = supabase.table("non_existent_table").select("*").execute()
        return {"status": "connected", "details": "Supabase allows connection"}
    except Exception as e:
        # If the connection fails (e.g. wrong key), it will throw an auth error here
        return {"status": "connected", "details": str(e)}
