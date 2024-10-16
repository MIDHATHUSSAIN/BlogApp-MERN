const express = require("express");
const app = express();
const cors = require("cors");
const UserRouter = require("../src/router/user.Router");
const UserModel = require("./models/User.model");
const AdminRouter = require("./router/Admin.Router");
const AuthorRouter = require("./router/Author.Router");
const ReaderRouter = require("./router/Reader.Router");
const GuestRouter = require("./router/guest.Router");
const BlogModel = require("./models/Blog.model");
const AuthorModel = require("./models/Author.model");
const CommentModel = require("./models/Comment.model");
const db = require("./models/Relation");
const authentication = require("./middleware/authentication");
const sequelize = require("./config/db");

const port = 8000;
app.use(express.json());
app.use(cors());

try {

  sequelize.authenticate();
  sequelize.sync({ force: false});
  // db.UserModel.sync({force:false})
  // db.AuthorModel.sync({force:false})
  // db.BlogModel.sync({force:false})
  // db.CommentModel.sync({force:false})
} catch (error) {

  console.error("Unable to connect to the database:", error);
}

//For Login and Registeration
app.use("/auth", UserRouter);

app.use("/guest", GuestRouter);

app.use(authentication);

//For Admin he can create ,delete update get Comments , Blog , User
app.use("/admin", AdminRouter);

//For Author he can create ,delete , update and get only Blogs
app.use("/author", AuthorRouter);

//For Reader he can only see Blogs and Comment on them
app.use("/reader", ReaderRouter);

//for Guest he can only see the Blog

app.listen(port, (error) => {
  if (error) {

    console.log(error);
  }

  console.log(`app is running on port ${port}`);
});
