const userSchema = require("../../schema/userschema");

class Users {
  Login() {
    return async (req, res) => {
      const { email, password } = req.body;

      const requser = {
        email,
        password,
      };

      const doc = await userSchema.find({
        email: email,
        password: password,
      });

      console.log(doc);

      if (doc === undefined || doc.length == 0) {
        res.json({
          status: 403,
        });
      } else {
        res.json({
          status: 200,
        });
      }
    };
  }

  Signup() {
    return async (req, res) => {
      const { fullname, company, roles, email, password } = req.body;

      // Add Uniqueness to Sign up
      const requser = {
        fullname,
        company,
        roles,
        email,
        password,
      };

      const doc = await userSchema.create(requser);
      await doc.save();
      console.log(doc);
      if (doc) {
        res.json({
          status: 200,
          doc,
        });
        console.log(`Added ${requser.fullname} to database`);
      } else {
        res.sendStatus(403);
        console.log(
          `Internal Server error during adding ${requser.fullname} to database`
        );
      }
    };
  }
}

module.exports = new Users();
