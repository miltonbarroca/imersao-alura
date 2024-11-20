import express from 'express';

const app = express()
app.listen(3000, () => {
    console.log("Servidor Escutando...");
});
//rota
app.get("/api",(rec, res) =>{
    res.status(200).send("Rota inicial");
});