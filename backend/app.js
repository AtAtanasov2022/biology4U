const express = require("express");
const app = express();

const usersRoutes = require("./routes/users");
const topicsRoutes = require("./routes/topics");
const testResultsRoutes = require("./routes/testResults");
const subTopicsRoutes = require("./routes/subTopics");
const questionsRoutes = require("./routes/questions");
const questionAnswersRoutes = require("./routes/questionAnswers");
const commentsRoutes = require("./routes/comments");
const additionalFilesRoutes = require("./routes/additionalFiles");
const refreshTokenRoutes = require("./routes/refreshToken")

const sequelize = require("./connect");
const associations = require("./associations");
const errorHandler = require("./middleware/errorHandler");

const cors = require("cors");
const bodyParser = require("body-parser");
const createError = require("http-errors");

require("dotenv").config();

// app.use(associations);
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:8080", //???
    // origin: "http://192.168.87.2:8080/",
  })
);

app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/topics", topicsRoutes);
app.use("/api/v1/testResults", testResultsRoutes);
app.use("/api/v1/subTopics", subTopicsRoutes);
app.use("/api/v1/questions", questionsRoutes);
app.use("/api/v1/questionAnswers", questionAnswersRoutes);
app.use("/api/v1/comments", commentsRoutes);
app.use("/api/v1/additionalFiles", additionalFilesRoutes);
app.use("/api/v1/refreshTokens", refreshTokenRoutes);

app.use(errorHandler);

sequelize
  .authenticate()
  .then(async () => {
    await sequelize.sync();

    console.log("Connection has been established successfully.");

    const port = process.env.PORT;;

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
