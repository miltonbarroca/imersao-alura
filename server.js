// Importa o framework Express, que facilita a criação de aplicações web
import express from 'express';
import conectarAoBanco from './src/config/dbconfig.js';

// Conecta ao banco de dados usando a string de conexão fornecida em uma variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Cria uma nova aplicação Express
const app = express();

// Configura o middleware para que a aplicação consiga interpretar requisições JSON
app.use(express.json());

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

// Função que obtém todos os posts da coleção "posts" do banco de dados
async function getTodosPosts() {
    // Acessa o banco de dados chamado "imersao-alura"
    const db = conexao.db("imersao-alura");
    
    // Obtém a coleção "posts" dentro do banco
    const colecao = db.collection("posts");
    
    // Retorna todos os documentos da coleção convertidos em um array
    return colecao.find().toArray();
}

// Define uma rota GET para "/post" que retorna todos os posts do banco de dados
app.get("/post", async (req, res) => {
    // Obtém os posts chamando a função que acessa o banco
    const posts = await getTodosPosts();
    
    // Responde com status 200 e os posts em formato JSON
    res.status(200).json(posts);
});
