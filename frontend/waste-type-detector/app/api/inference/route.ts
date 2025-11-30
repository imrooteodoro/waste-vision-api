import { NextResponse } from "next/server";
import { BACKEND_URL } from "../variables_config";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const response = await fetch(`${BACKEND_URL}/api/multimodal/inference`, {
      method: "POST",
 
      body: formData, 
    });

    if (!response.ok) {
      console.error("Backend error:", response.statusText);
      return NextResponse.json({ error: "Error from AI Service" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error("Proxy Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}