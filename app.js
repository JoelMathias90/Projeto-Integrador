import express from 'express';
import itensRoutes from './src/routes/itens.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.static('public'))
app.use('/api', itensRoutes)

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})