import Route from "@ioc:Adonis/Core/Route";

Route.get("/register", "AuthController.registerPage");
Route.post("/register", "AuthController.register");
Route.get("/login", "AuthController.loginPage");
Route.post("/login", "AuthController.login");
Route.post("/logout", "AuthController.logout");
