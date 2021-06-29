const clientSchema = require("../../schema/clientschema");

class Client {
  getAllClients() {
    return async (req, res) => {
      const { admin_mail } = req.body;
      const doc = await clientSchema.find({ admin_mail: admin_mail });
      if (doc.length !== 0) {
        res.json({
          status: 200,
          doc,
        });
      } else {
        res.sendStatus(403);
      }
    };
  }

  removeAClient() {
    return async (req, res) => {
      const { admin_mail, client_email, client_password } = req.body;
      const data = {
        admin_mail,
        client_email,
        client_password,
      };

      const doc = await clientSchema.deleteOne(data);

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

  Signup() {
    return async (req, res) => {
      const { admin_mail, client_email, client_password } = req.body;

      const data = {
        admin_mail,
        client_email,
        client_password,
      };

      const doc = await clientSchema.create(data);
      await doc.save();

      if (doc !== undefined) {
        res.send({
          status: 200,
          doc: doc,
        });
      } else {
        res.send({
          status: 403,
        });
      }
    };
  }

  Login() {
    return async (req, res) => {
      const { client_email, client_password } = req.body;
      const doc = caartSchema.find({
        client_email: client_email,
        client_password: client_password,
      });
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
}

module.exports = new Client();
