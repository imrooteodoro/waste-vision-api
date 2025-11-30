import os
from dotenv import load_dotenv
import base64
import requests
import os
from mistralai import Mistral


load_dotenv()

api_key = os.getenv("MISTRAL_API_KEY")
model = os.getenv("MISTRAL_MODEL")

client = Mistral(api_key=api_key)

def encode_image(image):
    return base64.b64encode(image).decode('utf-8')

def classify_image(image):

    base64_image = encode_image(image)

    messages = [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Qual é o tipo de lixo? Plástico, papel, vidro, metal ou orgânico?"
                },
                {
                    "type": "image_url",
                    "image_url": f"data:image/jpeg;base64,{base64_image}"
                }
            ]
        }
    ]

    chat_response = client.chat.complete(
        model=model,
        messages=messages
    )

    return chat_response.choices[0].message.content