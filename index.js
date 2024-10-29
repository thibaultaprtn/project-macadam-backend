//Utilisation des variables d'environnement
require("dotenv").config();

//Utilisation des packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Création du serveur
const app = express();

//Utilisation de cors
app.use(cors());

//Connexion à la database MongoDB
mongoose.connect(process.env.MONGODB_URI);

//import de mes routeurs
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const userRouter = require("./routes/user");

//utilisation des mes routeurs
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/user", userRouter);

//Interception des routes inexistantes
app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

//Démarrage du serveur sur le port indiqué ou sur le port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Server Started Successfully on port " + (process.env.PORT || 3000)
  );
});
