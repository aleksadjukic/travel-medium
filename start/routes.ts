import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async ({ view }) => {
  return view.render("home");
});

Route.get("/about-us", async ({ view }) => {
  return view.render("about");
});

Route.post("/register", async ({ request }) => {
  console.log(request.body());
});
