require('../models/deck-model');
const mongoose = require('mongoose');
const base = require('../bin/base/repository-base');

class deckRepository {

    constructor() {
        this._base = new base('Deck');
    }

    async create(data) {
        return await this._base.create(data);
    }

    async update(id, data) {
        return await this._base.update(id, data);
    }

    async getAll() {
        return await this._base.getAll();
    }

    async getById(id) {
        return await this._base.getById(id);
    }

    async getByOwner(owner) {
        return await mongoose.model('Deck').find({ dono: owner }).exec();
    }

    async delete(id) {
        return await this._base.delete(id);
    }

}

module.exports = deckRepository;
