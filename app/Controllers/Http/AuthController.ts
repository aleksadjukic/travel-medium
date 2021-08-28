import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import LoginValidator from "App/Validators/LoginValidator";
import RegisterValidator from "App/Validators/RegisterValidator";

export default class AuthController {
  // Pages
  public async registerPage({ view }: HttpContextContract) {
    return view.render("register");
  }
  public async loginPage({ view }: HttpContextContract) {
    return view.render("login");
  }

  // Handlers
  public async register({ request, response, session }: HttpContextContract) {
    const data = await request.validate(RegisterValidator);

    const newUser = await User.create(data);
    session.flash(
      "success",
      `Thank you for registering, ${newUser.username}! You can now login.`
    );
    return response.redirect("/");
  }

  public async login({
    auth,
    request,
    response,
    session,
  }: HttpContextContract) {
    const data = await request.validate(LoginValidator);
    try {
      await auth.use("web").attempt(data.email, data.password);
      response.redirect("/dashboard");
    } catch (error) {
      session.flash("fail", `Invalid credentials.`);
      response.redirect("/login");
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.use("web").logout();
    response.redirect("/");
  }
}
