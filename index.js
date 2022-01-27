const loginRouter = require("./route/loginRoute");

const registerRouter = require("./route/registerRoute");

const forgotPasswordRouter = require("./route/forgotPasswordRoute");

const express = require("express");

const cors = require("cors");

let app = express();

const bodyParser = require("body-parser");

const cookieParser = require("cookie-parser");

const port = process.env.PORT || 8000;

require("dotenv/config");

app
	.use(cookieParser())
	.use(cors())
	.use(express.static("public"))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }));

app.use("/", loginRouter);

app.use("/register", registerRouter);

app.use("/forgotPassword", forgotPasswordRouter);

app.get("/", (req, res) => {
	res.send("We use password-reset-api");
});
app.listen(port);