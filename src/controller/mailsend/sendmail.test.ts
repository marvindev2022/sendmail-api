import { mailSchema } from "../../schema/mail.schema";
interface EmailData {
  title: string;
  email: string;
  message: string;
}
describe("Validação do esquema de e-mail", (): void => {
  test("Deve passar na validação com dados válidos", () => {
    const dadosValidos: EmailData = {
      title: "Título do E-mail",
      email: "joao@example.com",
      message: "Conteúdo da mensagem...",
    };

    const { error, value } = mailSchema.validate(dadosValidos);
    expect(error).toBeUndefined();
    expect(value).toEqual(dadosValidos);
  });

  test("Deve falhar na validação com título inválido", () => {
    const dadosInvalidos: EmailData = {
      title: "Títu",
      email: "joao@example.com",
      message: "Conteúdo da mensagem...",
    };

    const { error, value } = mailSchema.validate(dadosInvalidos);
    expect(error).toBeDefined();
    expect(value).not.toBeUndefined();
  });

  test("Deve falhar na validação com e-mail inválido", () => {
    const dadosInvalidos: EmailData = {
      title: "Título do E-mail",
      email: "joao@example",
      message: "Conteúdo da mensagem...",
    };

    const { error, value } = mailSchema.validate(dadosInvalidos);
    expect(error).toBeDefined();
    expect(value).not.toBeUndefined();
  });

  test("Deve falhar na validação com mensagem inválida", () => {
    const dadosInvalidos: EmailData = {
      title: "Título do E-mail",
      email: "joao@example.com",
      message: "Conteúdo",
    };

    const { error, value } = mailSchema.validate(dadosInvalidos);
    expect(error).toBeDefined();
    expect(value).not.toBeUndefined();
  });
});
