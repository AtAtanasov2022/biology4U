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

    

    const port = 5001;

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
