"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const pet_1 = require("../models/pet");
const createMenuObject_1 = require("../helpers/createMenuObject");
const search = (req, res) => {
    //res.render('pages/search')
    let query = req.query.q;
    if (!query) {
        res.redirect('/');
        return;
    }
    let list = pet_1.Pet.getFromName(query);
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)(''),
        list,
        query
    });
};
exports.search = search;
