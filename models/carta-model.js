'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const cartaModel = new schema({
    nome: { type: String, required: true, trim: true, index: true },
    descricao: { type: String, required: true },
    ativo: { type: Boolean, required: true, default: true },
    dataCriacao: { type: Date, default: Date.now }
}, { versionKey: false });

cartaModel.pre('save', next => {
    const agora = new Date();
    if (!this.dataCriacao)
        this.dataCriacao = agora;
    next();
});

module.exports = mongoose.model('Carta', cartaModel);