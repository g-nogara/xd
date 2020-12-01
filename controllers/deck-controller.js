'use strict'

const repository = require('../repositories/deck-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function deckController() {

}

deckController.prototype.post = async (req, res) => {

    const _validationContract = new validation();
    _validationContract.isRequired(req.body.titulo, 'o título é obrigatório');

    ctrlBase.post(_repo, _validationContract, req, res);
};

deckController.prototype.put = async (req, res) => {

    const _validationContract = new validation();
    _validationContract.isRequired(req.body.titulo, 'o título é obrigatório');
    _validationContract.isRequired(req.params.id, 'O Id que será atualizado é obrigatório');

    ctrlBase.put(_repo, _validationContract, req, res);
};

deckController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

deckController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

deckController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = deckController;