import { sendMail } from "../mail/nodemiler";
import validateSchema from "../schema/mail.schema";

export default async function sendMailController(req: any, res: any) {
  const { email, title, message } = req.body;
  const { isValid, messages } = validateSchema(email, title, message);
  try {
    if (!isValid)
      return res
        .status(400)
        .json({messages});
    const mainSend = await sendMail(email, title, message);
    if (mainSend) return res.status(200).json("Email enviado com sucesso");

    return res.status(400).json("Erro ao enviar email");
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
}
