exports.post = async (repository, validationContract, req, res) => {
    try {
        const data = req.body;
        if (!validationContract.isValid()) {
            res.status(400).send({
                message: 'Existem dados inválidos na sua requisição',
                validation: validationContract.errors()
            }).end();
            return;
        }
        const resultado = await repository.create(data);
        res.status(201).send(resultado);
    } catch (err) {
        console.error('Post com error, motivo: ', err);
        res.status(500).send({ message: 'Erro no processamento', error: err });
    }
};

exports.put = async (repository, validationContract, req, res) => {
    try {

        const data = req.body;

        if (!validationContract.isValid()) {
            res.status(400).send({
                message: 'Existem dados inválidos na sua requisição',
                validation: validationContract.errors()
            }).end();
            return;
        }

        const resultado = await repository.update(req.params.id, data);
        res.status(202).send(resultado);

    } catch (err) {
        console.error('Put com error, motivo: ', err);
        res.status(500).send({ message: 'Erro no processamento', error: err });
    }
};

exports.get = async (repository, req, res) => {
    try {
        const data = await repository.getAll();
        res.status(200).send(data);
    } catch (error) {
        console.error('get com error, motivo: ', err);
        res.status(500).send({ message: 'Erro no processamento', error: err });
    }
};

exports.getById = async (repository, req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const data = await repository.getById(id);
            res.status(200).send(data);
        } else {
            res.status(400).send({ message: 'O parametro Id precisa ser informado.' });
        }
    } catch (err) {
        console.error('getById com error, motivo: ', err);
        res.status(500).send({ message: 'Erro no processamento', error: err });
    }
};

exports.delete = async (repository, req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            await repository.delete(id);
            res.status(200).send({ message: 'Registro excluído com sucesso!' });
        } else {
            res.status(400).send({ message: 'O parametro Id precisa ser informado.' });
        }
    } catch (err) {
        console.error('get com error, motivo: ', err);
        res.status(500).send({ message: 'Erro no processamento', error: err });
    }
};