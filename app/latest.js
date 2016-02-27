'use strict';

module.exports = function (app, History) {
    
    var latestLength = 10;
    
    app.get('/latest', function(req, res) {
        
        History.find({}, null, {
            'limit': latestLength,
            'sort': { 'when': -1 }
        }, function(err, result) {
            if (err) throw err;
            res.send(result.map(function(arg) {
                return {
                    term: arg.term,
                    when: arg.when
                };
            }));
        });
    
    });

};