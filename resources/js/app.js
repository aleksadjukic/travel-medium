import "../css/app.css";
import Alpine from "alpinejs";
import persist from "@alpinejs/persist";

Alpine.plugin(persist);

window.Alpine = Alpine;

Alpine.data("globalData", function () {
  return {
    showSignup: this.$persist(false),
    isLoginForm: this.$persist(true),
    showAlert: true,
  };
});

Alpine.start();
