import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Obtém os posts chamando a função que acessa o banco
    const posts = await getTodosPosts();
    // Responde com status 200 e os posts em formato JSON
    res.status(200).json(posts);   
} 
