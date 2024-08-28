const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const { MongoClient, ObjectId } = require("mongodb");
const conurl = "mongodb+srv://aula-back:aula123456@turma-agosto.mam4s.mongodb.net/";
const conexao = new MongoClient(conurl);


app.post("/cadastro-tarefa", function(req, res){
    res.send("ok");
});

app.get("/listar-tarefas", async function(req, res){
    
    const mongo = await conexao.connect();
    const col = mongo.db("edir").collection("tarefas");

    const dados = await col.find({}).toArray();

    res.json(dados);
});

app.get("/ler-tarefa", async function(req, res){
    const mongo = await conexao.connect();
    const col = mongo.db("edir").collection("tarefas");

    const id = new ObjectId('66ce66996ac4ec0673de793b');
    const tarefa = await col.findOne({_id: id})

    res.json(tarefa);

});

app.listen(3003, function(){
    console.log("Servidor iniciado");
});
