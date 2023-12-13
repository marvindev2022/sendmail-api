import { sendMail } from "../mail/nodemiler";
import { mailSchema } from "../schema/mail.schema";

export default async function sendMailController(req: any, res: any) {
  const { email, title, message } = req.body;
  try {
    mailSchema.validateAsync(
      { email, title, message },
      { abortEarly: false }
    );

    const mainSend = await sendMail(email, title, message);
    if (mainSend) {
      res.send("Email enviado com sucesso");
      
    } else {
      res.send("Erro ao enviar email");
    }
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
}
