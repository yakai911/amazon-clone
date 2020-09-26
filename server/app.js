const express = require("express");
const cors = require("cors");
const path = require("path");
const { functions } = require("firebase");
const { static } = require("express");
const stripe = require("stripe")(
  "sk_test_51HV7CvHOkPbYveuVIYgmkbVrUOyo7CfdPsvtknxF3nWnmKEspsO8UXYSzHbQq0AjruV3zGlfLrNwxjq0VhTeSjW800y4k4NBXJ"
);

//API
console.log(`${process.env.KEY}`);
//-App config
const app = express();

//-middleware
app.use(cors({ origin: true }));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.static(path.join(__dirname, "build")));

//-API routes
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "build", "index.html"))
);

app.post("/api/payments/create", async (req, res) => {
  const total = Math.round(req.query.total);

  console.log("Payment Request Recived for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//-listen
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`服务器在端口${port}运行`));
