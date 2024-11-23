// Importa o framework Express, que facilita a criação de aplicações web
import express from 'express';
import routes from './src/config/route/postRoutes.js';

// Cria uma nova aplicação Express
const app = express();
routes(app)

// Array de posts estáticos como exemplo
const posts = [
    {id: 1, descricao: "Uma foto teste", imagem:"https://placekitten.com/300/200"},
    {id: 2, descricao: "Um gato fazendo yoga", imagem:"https://placekitten.com/300/200"},
    {id: 3, descricao: "Um gato fazendo panqueca", imagem:"https://placekitten.com/300/200"},
];

// Inicia o servidor na porta 3000 e exibe uma mensagem no console informando que está escutando
app.listen(3000, () => {
    console.log("Servidor Escutando...");
});