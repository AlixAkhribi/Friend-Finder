var path = require('path');
var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {

        var friendMatch = {
            name: "",
            profilePhoto: "",
            difference: 1000
        };

        console.log(req.body);

        var userData = req.body;
        var userScores = userData.scores;

        var totalDifference = 0;

        for (i = 0; i = friends.length; i++) {

            console.log(friends[i]);
            totalDifference = 0;

            for (j = 0; j < friends[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if (totalDifference == friendMatch.difference) {

                    friendMatch.name = friends[i].name;
                    friendMatch.profilePhoto = friends[i].profilePhoto;
                    friendMatch.difference = totalDifference
                }
            }
        }
        friends.push(userData);

        res.json(friendMatch);
    })
}

