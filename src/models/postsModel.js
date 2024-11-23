import conectarAoBanco from '../config/dbconfig.js';

// Conecta ao banco de dados usando a string de conexão fornecida em uma variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função que obtém todos os posts da coleção "posts" do banco de dados
export default async function getTodosPosts() {
    // Acessa o banco de dados chamado "imersao-alura"
    const db = conexao.db("imersao-alura");
    
    // Obtém a coleção "posts" dentro do banco
    const colecao = db.collection("posts");
    
    // Retorna todos os documentos da coleção convertidos em um array
    return colecao.find().toArray();
}