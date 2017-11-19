var express = require('express');
var router = express.Router();
var db = require('../models');


/*==================================EXPRESS ROUTES====================================*/

router.get('/', function (req, res) {
    // retrieve all data from food_db
    db.item.findAll({
        where: {
            reserved: false
        }
    }).then(function (data) {
        var hbsObject = { hbsObject: data };
        res.render('index', hbsObject)
        console.log("`/` router working for index");
    }).catch(function (err) {
        console.log(err);
    });
});

// Takes id of reserved item and changes status in db.items
router.put("/api/:id", function (req, res) {
    console.log("reserved button got hit, dawg");
    if (req.params.id) {
        db.item.update({
            reserved: true
        }, {
            where : {
                id: req.params.id
            }
        }).then(function (results) {
            res.redirect('back');
        }).catch(function(err){
            console.log(err);
        });
    }
});

// creates a new item in the database
router.post("/api/new", function (req, res) {
    console.log("Item:");
    console.log(req.body);
    Item.create({
        name: req.body.name,
        category: req.body.category,
        quantity: req.body.quantity,
        expiration: req.body.expiration,
    });
});

// not currently using this... COMMENTED 11:27PM MONDAY OCT 21ST
// router.post("/api/delete", function (req, res) {
//     console.log("Item:");
//     console.log(req.body);
//     Item.destroy({
//         where: {
//             id: req.body.id
//         }
//     });
// });

// HAVE NOT TESTED YET
router.post("/api/reserved", function (req, res) {
    console.log("Item:");
    console.log(req.body);
    db.item.update({
        reserved: true,
    }, {
            where: {
                id: req.body.id
            }
        });
});

// DO WE NEED THIS?
router.get("/api/reserved", function (req, res) {
    db.item.findAll({
        where: {
            reserved: true,
        }
    }).then(function (results) {
        res.json(results);
    });
});

// Populates search.hbs it works... BUT DO I NEED THE `itemSearch` var? 
router.get("/search", function (req, res) {
    // itemSearch = req.body.item_search;
    // console.log(itemSearch + "1");
    // db.item.findAll({
    //     where: {
    //         //name: itemSearch,
    //         reserved: false
    //     }
    // }).then(function (data) {
    //     var hbsObject = { hbsObject: data };
    //     res.render('search', hbsObject)
    // }).catch(function (err) {
    //     console.log(err);
    // });
    res.render('search');
    console.log("search route working");
});

// Searches based on what is input into the form action=newSearch in search.hbs
router.post("/newSearch", function (req, res) {
    itemSearch = req.body.userSearch;
    console.log(itemSearch + "2");
    db.item.findAll({
        where: {
            name: itemSearch,
            reserved: false
        }
    }).then(function (data) {
        console.log(data);
        var hbsObject = { item: data };
        res.render('search', hbsObject)
    }).catch(function (err) {
        console.log(err);
    });
});

router.get('/available', function (req, res) {
    // retrieve all data from food_db
    db.item.findAll({
        where: {
            reserved: false
        }
    }).then(function (data) {
        console.log("available items" + data);
        var hbsObject = { item: data };
        res.render('available', hbsObject)
    }).catch(function (err) {
        console.log(err);
    });
});

// MIGHT BE ABLE TO SHORTEN THIS, BECAUES WE DON'T NEED TO get that data or log it....
// ********** LOOK @ /search **********
router.get('/add', function (req, res) {
    // retrieve all data from food_db
    db.item.findAll({
        where: {
            reserved: false
        }
    }).then(function (data) {
        var hbsObject = { hbsObject: data };
        res.render('add', hbsObject)
        console.log("`/add` router working");
    }).catch(function (err) {
        console.log(err);
    });
});

//router post for ./add
router.post("/add/new", function (req, res) {
    console.log("Item:");
    console.log(req.body);
    db.item.create({
        name: req.body.name,
        category: req.body.category,
        quantity: req.body.quantity,
        expiration: req.body.expiration,
    }).then(function (data) {
        res.redirect('/add');
    }).catch(function (err) {
        console.log(err);
    });
});

router.get("/about", function (req, res) {
    res.render('about');
    console.log("search route working");
});

// Export routes for server.js to use.
module.exports = router;