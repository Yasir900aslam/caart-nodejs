const remSchema = require("../../schema/remSchema");

class Remediations {
  addRemediationInAUser() {
    return async (req, res) => {
      const { client_email, remediation_name, Status, isapplied } = req.body;
      const data = {
        client_email,
        remediation_name,
        status,
        isapplied,
      };

      const doc = await remSchema.create(data);
      if (doc) {
        console.log(doc);
        res.sendStatus(200);
      } else {
        res.sendStatus(403);
      }
    };
  }

  removeRemediationOfAUser() {
    return async (req, res) => {
      const { client_email, remediation_name, status, isapplied } = req.body;
      const data = {
        client_email,
        remediation_name,
        status,
        isapplied,
      };

      const doc = await remSchema.deleteOne(data);
      if (doc.length !== 0) {
        res.send({
          status: 200,
        });
      } else {
        res.send({
          status: 403,
        });
      }
    };
  }

  getAllRemeditionsOfAUser() {
    return async (req, res) => {
      const { email } = req.body;
      const doc = remSchema.find({ client_email: email });
      if (doc.length !== 0) {
        res.send({
          status: 200,
        });
      } else {
        res.send({
          status: 403,
        });
      }
    };
  }
}

module.exports = new Remediations();
