/**
 * Created by guhan on 4/11/16.
 */
module.exports = function(app, mongoose) {


    var articleModel = {};
    var articleSchema = require("./article.schema.server.js")(mongoose);
    var articles = mongoose.model("article", articleSchema);


    articleModel.findArticleByAuthor = function (authorName, callback) {
        articles.find({'author' : authorName}, function (err, data) {
            callback(data);
        })
    };

    articleModel.findById = function (id, callback) {
        articles.find({'_id' : id}, function (err, data) {
            callback(data);
        })
    };

    articleModel.findAll = function (callback) {
        articles.find(function(err, data) {
            callback(data);
        });
    };

    articleModel.create = function (article, callback) {
        articles.create(article, function(err, results) {
            callback(results);
        });
    };

    articleModel.update = function (articleId, article, callback) {
        articles.update({_id : articleId}, article, function(err, results) {
            articleModel.findById(articleId, function(data) {
                callback(data[0]);
            })
        });
    }

    articleModel.delete = function (id, callback) {
        articles.remove({_id : id}, function(err, result){
            callback(result);
        });
    };

    return articleModel;

};