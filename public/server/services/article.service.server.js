/**
 * Created by guhan on 4/11/16.
 */
module.exports = function(app, articleModel) {

    app.get('/api/articles/author/:author', function (req, res) {
        var author = req.params.author;
        articleModel.findArticleByAuthor(author, function(data){
            if (data.length >= 1) {
                res.json(data);
            } else {
                res.json(null);
            }
        });
    });

    app.get('/api/articles/id/:id', function (req, res) {
        var id = req.params.id;
        articleModel.findById(id, function(data) {
            if (data.length == 1) {
                res.json(data[0]);
            } else {
                res.json(null);
            }
        });
    });

    app.post('/api/articles', function (req, res) {
        articleModel.create(req.body, function(results) {
            console.log(results);
            res.json(results);
        });

    });

    app.delete('/api/articles/:id', function (req, res) {
        var id = req.params.id;
        articleModel.delete(id, function(result) {
            console.log(result);
            res.send("delete " + id);
        });

    });

    app.put('/api/articles/:id', function (req, res) {
        var id = req.params.id;
        var user = req.body;
        articleModel.update(id, user, function(results) {
            console.log(results);
            res.json(results);
        });
    });
};