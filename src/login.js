import {
  loadPigeonAppFromLocalStorage,
  savePigeonAppToLocalStorage,
} from "../utils/serialize.js";

document.addEventListener("submit", function () {
  let username = document.getElementById("usernameInput").value;
  let app = loadPigeonAppFromLocalStorage();

  app.login(username, password);
  savePigeonAppToLocalStorage(app);
  window.location.href = "../page/dashboard.html";
});
