const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postRoutes = require("./routes/post-routes");
const postApiRoutes = require("./routes/api-post-routes")
const contactRoutes = require('./routes/contact-routes');
const createPath = require('./helpers/create-path');

const app = express();

app.set("view engine", "ejs")

const PORT = 3002;

const db = "mongodb+srv://step_65:Stepovoy@cluster0.eewkw.mongodb.net/node-work?retryWrites=true&w=majority";

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to DB!'))
  .catch((error) => console.log(error))



app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`path: ${req.path}`);
  console.log(`method: ${req.method}`);
  next();
});

app.use(express.static("styles"));

app.use(methodOverride("_method"));

app.get('/', (req, res) => {
  const title = 'Home'
  res.render(createPath("index"), { title })
});

app.use(postRoutes)
app.use(contactRoutes)
app.use(postApiRoutes)

app.get('./about-us', (req, res) => {
  res.redirect('/contacts')
});

app.use(((req, res) => {
  const title = "Error Page"
  res
    .status(404)
    .render(createPath("error"), { title })
}))