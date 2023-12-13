import Joi from "joi";

interface EmailData {
  title: string;
  email: string;
  message: string;
}

export default function validateSchema(email: string, title: string, message: string) {
  const mailSchema = Joi.object({
    title: Joi.string().min(5).required().messages({
      "string.min": "O campo título deve ter no mínimo {#limit} caracteres",
      "any.required": "O campo título é obrigatório",
    }),
    email: Joi.string().email().required().messages({
      "string.email": "O campo e-mail deve ser um endereço de e-mail válido",
      "any.required": "O campo e-mail é obrigatório",
    }),
    message: Joi.string().min(10).required().messages({
      "string.min": "O campo mensagem deve ter no mínimo {#limit} caracteres",
      "any.required": "O campo mensagem é obrigatório",
    }),
  });

  const dadosDoEmail: EmailData = {
    title,
    email,
    message,
  };

  const { error, value } = mailSchema.validate(dadosDoEmail, {
    abortEarly: false,
  });

  if (error) {
    return {
      isValid: false,
      messages: error.details.map((err) => err.message),
    };
  } else {
    return {
      isValid: true,
      data: value,
    };
  }
}
