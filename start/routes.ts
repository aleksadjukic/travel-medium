import Route from "@ioc:Adonis/Core/Route";

// Import routes
import "./routes/auth";

Route.get("/", async ({ view }) => {
  return view.render("home");
});

Route.get("/about-us", async ({ view }) => {
  return view.render("about");
});

Route.get("/dashboard", async ({ view, auth }) => {
  return view.render("dashboard");
}).middleware("auth");
