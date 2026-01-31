import { getItenService, postItenService, updateItenService, deleteItenService } from "../services/itens.service.js"

const getIten = async (req, res) => {
    try {
        const resposta = await getItenService()
        return res.status(200).json(resposta)

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor' })
    }
}

const postIten = async (req, res) => {
    try {
        const response = await postItenService(req.body)
        return res.json(response)

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor' })
    }
}

const updateIten = async (req, res) => {
    try {
        const { id } = req.params
        const dados = req.body

        const response = await updateItenService(id, dados)
        return res.json(response)

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor' })
    }
}

const deleteIten = async (req, res) => {
    try {
        const { id } = req.params
        const response = await deleteItenService(id)
        return res.json(response)

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor' })
    }
}

export { getIten, postIten, updateIten, deleteIten }