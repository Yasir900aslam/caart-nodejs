const auditSchema = require("../../schema/auditschema");

class Audits {
  addAuditInAUser() {
    return async (req, res) => {
      const { email, policy, status } = req.body;
      const data = {
        email,
        policy,
        status,
      };

      const doc = await auditSchema.create(data);
      await doc.save();
      if (doc) {
        console.log(doc);
        res.sendStatus(200);
      } else {
        res.sendStatus(403);
      }
    };
  }

  removeAuditOfAUser() {
    return async (req, res) => {
      const { email, policy, status } = req.body;
      const data = {
        email,
        policy,
        status,
      };

      const doc = await auditSchema.deleteOne(data);
      if (doc) {
        res.send({
          status: 200,
          doc,
        });
      } else {
        res.send({
          status: 403,
        });
      }
    };
  }

  getAuditUsers() {
    return async (req, res) => {
      const { email } = req.body;
      const doc = auditSchema.find({ email: email });
      if (doc.length !== 0) {
        res.send({
          status: 200,
          doc,
        });
      } else {
        res.send({
          status: 403,
        });
      }
    };
  }
}

module.exports = new Audits();
