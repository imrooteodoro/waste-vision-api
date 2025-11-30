from fastapi import status, APIRouter, File, UploadFile, HTTPException

from src.core.inference import inference


router = APIRouter()


@router.post("/inference")
async def image_inference(file: UploadFile= File(...)):
    if file.content_type not in ("image/png", "image/jpeg", "image/jpg"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="O arquivo não é uma imagem válida"
        )
    file_bytes = await file.read()

    response = inference(image=file_bytes)

    return response


