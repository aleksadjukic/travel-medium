import { schema, rules } from "@ioc:Adonis/Core/Validator";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class LoginValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    email: schema.string({}, [rules.maxLength(1000)]),
    password: schema.string({}, [rules.maxLength(1000)]),
  });

  public messages = {
    required: "The {{ field }} is required.",
    "email.maxLength": "Invalid credentials.",
    "password.maxLength": "Invalid credentials.",
  };
}
