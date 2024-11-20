import express from 'express';

const posts = [
    {id: 1, descricao: "Uma foto teste", imagem:"https://placekitten.com/300/200"},
    {id: 2, descricao: "Um gato fazendo yoga", imagem:"https://placekitten.com/300/200"},
    {id: 3, descricao: "Um gato fazendo panqueca", imagem:"https://placekitten.com/300/200"},
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor Escutando...");
});

// Rota para todos os posts
app.get("/post", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

// Rota para um post específico
app.get("/post/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    if (index !== -1) {
        res.status(200).json(posts[index]);
    } else {
        res.status(404).json({ error: "Post não encontrado" });
    }
});
