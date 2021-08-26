import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async ({ view }) => {
  return view.render("homepage");
});

Route.get("/about-us", async ({ view }) => {
  return view.render("about");
});
