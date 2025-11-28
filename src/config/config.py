from dotenv import load_dotenv
import os

load_dotenv()

variables = {
    "api_key": os.getenv("API_KEY"),
    "url": os.getenv("URL"),
    "model": os.getenv("MODEL")
}


for variable in variables:
    if variables[variable] is None:
        raise ValueError(f"Environment variable {variable} is not set")
    
headers = {"x-api-key": variables["api_key"]}
data = {"model": variables["model"], "imgsz": 1200, "conf": 0.25, "iou":0.45}
url = variables["url"]

