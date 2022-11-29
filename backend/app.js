const express = require("express");
const app = express();
const usersRoutes = require("./routes/users");
const sequelize = require("./connect");
const associations = require("./associations");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:8080", //???
  })
);

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
