from fastapi import FastAPI
from src.routes.inference import router as inference_route
from src.routes.multimodal_inference import router as multimodal_route
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("CORS_ORIGINS")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def hello():
    return {"response": "hello from api"}


app.include_router(prefix="/api", router=inference_route)
app.include_router(prefix="/api", router=multimodal_route)