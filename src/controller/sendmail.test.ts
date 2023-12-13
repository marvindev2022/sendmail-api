import { mailSchema } from "../schema/mail.schema";

describe.only("Validação do esquema de e-mail", () => {
  test.only("Deve passar na validação com dados válidos", () => {
    const dadosValidos = {
      title: "Título do E-mail",
      email: "joao@example.com",
      message: "Conteúdo da mensagem...",
    };

    const { error, value } = mailSchema.validate(dadosValidos);
    expect(error).toBeUndefined();
    expect(value).toEqual(dadosValidos);
  });

  test("Deve falhar na validação com dados inválidos", () => {
    const dadosInvalidos = {
      title: "Tít",
      email: "joao@exa",
      message: "Conteúdo",
    };

    const { error, value } = mailSchema.validate(dadosInvalidos);
    expect(error).toBeDefined();
    expect(value).toBeUndefined();
  });
});
