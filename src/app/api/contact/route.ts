import { contactSchema } from "@/lib/contactSchema";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body); // Validation
    console.log(body)
    const { name, email, service, message } = data;

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: "sofianbelbacha@gmail.com",
      subject: `💬 Nouveau message de ${name} - Objet : ${service}`,
      replyTo: email,
      html: `
      <div style="background-color: #0f0f0f; color: #ffffff; font-family: 'Inter', sans-serif; padding: 40px; border-radius: 16px; max-width: 650px; margin: 40px auto; box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6); border: 1px solid #1e1e1e;">
        
        <div style="text-align: center; margin-bottom: 40px;">
          <h2 style="font-size: 28px; font-weight: 700; color: #ffffff; margin-bottom: 10px;">💬 Nouveau message reçu</h2>
          <p style="font-size: 16px; color: #bbbbbb;">Un visiteur vous a contacté via votre portfolio</p>
          <div style="height: 2px; background: linear-gradient(to right, #888888, transparent); width: 60px; margin: 16px auto;"></div>
        </div>
    
        <table cellpadding="0" cellspacing="0" width="100%" style="font-size: 16px;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a;"><strong style="color: #888888;">👤 Nom :</strong></td>
            <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a;"><strong style="color: #888888;">📧 Email :</strong></td>
            <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a;"><a href="mailto:${email}" style="color: #ffffff; text-decoration: underline;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a;"><strong style="color: #888888;">📌 Objet :</strong></td>
            <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a;">${service}</td>
          </tr>
        </table>
    
        <div style="margin-top: 32px;">
          <p style="font-size: 15px; margin-bottom: 10px; color: #888888; font-weight: 600;">📝 Message :</p>
          <div style="background-color: #1b1b1b; padding: 20px; border-radius: 10px; border: 1px solid #333;">
            <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #e1e1e1;">${message}</p>
          </div>
        </div>
    
        <div style="margin-top: 40px; text-align: center;">
          <p style="font-size: 12px; color: #777;">Ce message a été généré automatiquement depuis votre site personnel.</p>
        </div>
      </div>
    `
    });
    if (error) {
        console.error("Erreur Resend :", error);
        return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 });
    }  

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 400 }
    );
  }
}
