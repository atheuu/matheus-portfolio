import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req) {
  try {
    const body = await req.json()

    await sendEmail(body);
    
    return NextResponse.json({ success: true, message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    console.error("Erro no envio:", error);
    return NextResponse.json({ success: false, error: "Erro ao enviar mensagem. Tente novamente." }, { status: 500 });
  }
}
