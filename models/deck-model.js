'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const deckModel = new schema({
    titulo: { trim: true, index: true, required: true, type: String },
    descricao: { type: String },
    formato: { type: String },
    dono: { type: String, index: true, required: true },
    cards: { type: Array },
    dataCriacao: { type: Date, default: Date.now }
}, { versionKey: false });

deckModel.pre('save', next => {
    const agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('Deck', deckModel);