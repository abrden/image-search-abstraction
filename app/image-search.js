'use strict';

module.exports = function (app, History) {
    
    app.get('/imgsearch/:search', function(req, res){
        var query = req.params.search;
        var length = req.query.offset || 10;
        
        saveQuery(query);
        search(query, length, res);
        
    });
    
    function saveQuery(query) {
        var history = new History({
            'term': query,
            'when': new Date().toLocaleString()
        });
        
        history.save(function(err, data) {
            if (err) throw err;
            console.log('Saved');
        });
    }
    
    function search(query, length, res) {
        var Search = require('bing.search');
        var search = new Search(process.env.API_KEY);

        search.images(
            query,
            { top: length },
            function(err, results) {
                if (err) throw err;
                res.json(results.map(imageObject));
            }
        );
    }
    
    function imageObject(image) {
        return {
            'url': image.url,
            'snippet': image.title,
            'thumbnail': image.thumbnail.url,
            'context': image.sourceUrl
        };
    }
    
};