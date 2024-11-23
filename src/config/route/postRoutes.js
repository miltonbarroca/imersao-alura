import express from "express"
import { listarPosts } from "../../controller/postsController.js";

const routes = (app) => {
    // Configura o middleware para que a aplicação consiga interpretar requisições JSON
    app.use(express.json());
    // Define uma rota GET para "/post" que retorna todos os posts do banco de dados
    app.get("/post", listarPosts);
}

export default routes;