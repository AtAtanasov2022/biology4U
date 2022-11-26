const express = require("express");
const app = express();
const usersRoutes = require("./routes/users");
const sequelize = require("./connect");

app.use("/api/v1/users", usersRoutes);

sequelize
  .authenticate()
  .then(async () => {
    await sequelize.sync();

    console.log("Connection has been established successfully.");

    (async () => {
      console.log("INSIDE");
      try {
        const res = await sequelize.query(
          'INSERT INTO User(username, user_password, email, firstname, lastname, user_type) VALUES("john", "1234", "john@elsys-bg.org", "John", "Doup", "student" )'
        );

        console.log(res);
      } catch (err) {
        console.log("ERROR SEQ: ", err.message);
      }
      console.log(await sequelize.query("SELECT * FROM User"));
    })();

    const port = 5000;

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
