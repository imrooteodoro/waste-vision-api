from fastapi import APIRouter, File, UploadFile, HTTPException
from src.core.mistralai import classify_image

router = APIRouter()

@router.post("/multimodal/inference")
async def multimodal_inference(file: UploadFile = File(...)):

    if file.content_type not in ("image/png", "image/jpeg", "image/jpg"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="O arquivo não é uma imagem válida"
        )

    file_bytes = await file.read()

    response = classify_image(image=file_bytes)

    return {"prediction": response}