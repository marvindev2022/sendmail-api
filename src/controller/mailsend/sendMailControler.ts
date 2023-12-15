import { Request, Response } from "express";
import { sendMail } from "../../mail/nodemiler";
import { mailSchema } from "../../schema/mail.schema";
import Joi from "joi";

export default async function sendMailController(
  req: Request,
  res: Response
): Promise<Response> {
  const { email, title, message } = req.body;
  try {
    mailSchema.validateAsync({ email, title, message });

    const mainSend = await sendMail(email, title, message);
    if (mainSend) {
      return res.send("Email enviado com sucesso!");
    }
    return res.send("Erro ao enviar email!");
  } catch (err: any) {
    if (err instanceof Joi.ValidationError) {
      return res
        .status(400)
        .json({ error: "Erro de validação: " + err.message });
    }

    return res.status(404).json({ error: err.message });
  }
}
