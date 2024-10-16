
const AuthorModel = require("./Author.model")
const BlogModel = require("./Blog.model")
const CommentModel = require("./Comment.model")
const UserModel = require("./User.model")

const db = {
    BlogModel,
    CommentModel,
    UserModel,
    AuthorModel
}

db.UserModel.hasOne(db.AuthorModel,{ foreignKey: 'userId',})
db.AuthorModel.belongsTo(db.UserModel,{ foreignKey: 'userId',})

db.AuthorModel.hasMany(db.BlogModel,{ foreignKey: 'authorId',})
db.BlogModel.belongsTo(db.AuthorModel,{ foreignKey: 'authorId',})

db.BlogModel.hasMany(db.CommentModel,{foreignKey:'blogId'})
db.CommentModel.belongsTo(db.BlogModel,{foreignKey:'blogId'})

module.exports = db



