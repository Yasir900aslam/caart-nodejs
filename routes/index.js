const User = require("../controller/UserController/UserController");
const Client = require("../controller/ClientController/ClientController");
const Remediations = require("../controller/RemediationsController/RemediationsController");
const Audits = require("../controller/AuditsController/AuditsController");

module.exports = (app) => {
  // Users Controller
  app.post("/v1/user/login", User.Login()); // login
  app.post("/v1/user/signup", User.Signup()); // Signup

  // Client
  app.post("/v1/client/login", Client.Login());
  app.post("/v1/client/signup", Client.Signup());
  app.post("/v1/client/remove", Client.removeAClient());
  app.post("/v1/client/getall", Client.getAllClients());

  // Remediations
  app.post("/v1/rem/add", Remediations.addRemediationInAUser());
  app.post("/v1/rem/remove", Remediations.removeRemediationOfAUser());
  app.post("/v1/remed/all", Remediations.getAllRemeditionsOfAUser());

  // Audits
  app.post("/v1/audit/add", Audits.addAuditInAUser());
  app.post("/v1/audit/remove", Audits.removeAuditOfAUser());
  app.post("v1/audit/allaudits", Audits.getAuditUsers());
};
