'use strict'

const repository = require('../repositories/deck-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const jwt = require('jsonwebtoken');
const _repo = new repository();

const decodeUsername = token => {
    return jwt.decode(token).username
}
function deckController() {

}

deckController.prototype.post = async (req, res) => {

    const _validationContract = new validation();
    _validationContract.isRequired(req.body.titulo, 'o título é obrigatório');

    _validationContract.isRequired(req.body.accessToken, 'o token de acesso é obrigatório');
    req.body.dono = decodeUsername(req.body.accessToken);

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

deckController.prototype.getByOnwer = async (req,res) => {
    try {
        const username = decodeUsername(req.body.accessToken);
        const foundDecks = await _repo.getByOwner(username);
        if (foundDecks.length == 0) res.status(404).send([]);
        else res.status(200).send(foundDecks)
    } catch (error) {
        throw new Error(error);
    }
}

deckController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = deckController;