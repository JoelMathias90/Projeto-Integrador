import express from "express";
import { deleteIten, getIten, postIten, updateIten } from "../controllers/itens.controller.js";

const itensRoutes = express.Router()

itensRoutes.get('/itens', getIten)

itensRoutes.post('/itens', postIten)

itensRoutes.put('/itens/:id', updateIten)

itensRoutes.delete('/itens/:id', deleteIten)

export default itensRoutes