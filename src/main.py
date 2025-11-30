from fastapi import FastAPI
from src.routes.inference import router as inference_route
from src.routes.multimodal_inference import router as multimodal_route

app = FastAPI()



@app.get("/")
async def hello():
    return {"response": "hello from api"}


app.include_router(prefix="/api", router=inference_route)
app.include_router(prefix="/api", router=multimodal_route)