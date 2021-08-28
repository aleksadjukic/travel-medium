import { schema, rules } from "@ioc:Adonis/Core/Validator";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    username: schema.string({}, [rules.minLength(3), rules.maxLength(32)]),
    email: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(55),
      rules.email(),
    ]),
    password: schema.string({}, [rules.minLength(6), rules.maxLength(32)]),
  });

  public messages = {
    required: "The {{ field }} is required.",
    minLength:
      "The {{ field }} must be at least {{ options.minLength }} characters long.",
    maxLength:
      "The {{ field }} must be at most {{ options.maxLength }} characters long.",
    email: "Invalid email.",
  };
}
