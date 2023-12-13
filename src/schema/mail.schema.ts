import Joi from "joi";

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

const dadosDoEmail = {
  title: "Tít",
  email: "joao@exa",
  message: "Conteúdo",
};

const { error, value } = mailSchema.validate(dadosDoEmail, {
  abortEarly: false,
});

if (error) {
  // Exibe todas as mensagens de erro
  console.error(
    "Erros de validação:",
    error.details.map((err) => err.message)
  );
} else {
  console.log("Dados do e-mail válidos:", value);
}

export { mailSchema };
