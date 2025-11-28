import requests
from src.config.config import data, headers, url


def inference(image) -> dict:

    files = {
    "image": ("filename.jpg", image, "image/jpeg")
    }
    response =  requests.post(url, headers=headers, data=data, files=files)
    return response.json()


