'use strict'

const repository = require('../repositories/carta-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function cartaController() {

}

cartaController.prototype.post = async (req, res) => {
    const _validationContract = new validation();
    _validationContract.isRequired(req.body.nome, 'O nome da carta é obrigatorio');
    _validationContract.isRequired(req.body.descricao, 'A descrição da carta é obrigatoria');

    ctrlBase.post(_repo, _validationContract, req, res);
};

cartaController.prototype.put = async (req, res) => {
    const _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'O nome da carta é obrigatorio');
    _validationContract.isRequired(req.body.descricao, 'A descrição da carta é obrigatoria');

    ctrlBase.put(_repo, _validationContract, req, res);
};

cartaController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

cartaController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

cartaController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = cartaController;
