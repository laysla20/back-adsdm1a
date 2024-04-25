const { MongoClient, ObjectId } = require("mongodb");
const url = 'mongodb+srv://laysla:1234@cluster0.rxpjj5h.mongodb.net/'
 client = new MongoClient(url);

async function conectar() {
  try {
    await client.connect();
  } catch (error) {
    console.log("Deu ruim!", error);
  }
}

async function inserir(produto) {
  const db = client.db("loja");
  return await db.collection("produtos")
  .insertOne(produto);
}

async function listar() {
  const db = client.db("loja");
  return await db.collection("produtos").find({}).toArray();
}

async function atualizar(id, produto) {
    const db = client.db("loja");
    return await db.collection("produtos").updateOne ({_id: new ObjectId(id)},
    {$set: produto});    
}

async function remover(id) {
    const db =  client.db("loja"); 
    return await db.collection("produtos").deleteOne({_id: new ObjectId(id) })
}

async function main() {
  await conectar();
  let result = await inserir({
     nome: "banana", preco: 12.0
  });
  console.log('Produto inserido', result);
  
  result = await listar()
  console.log("Listar de produtos", result)
  
  result = await atualizar("662a596ff91b5dd182b98c4d",
  {nome: "maca", preco: 22.54});
  console.log("Produto atualizado", result)

  result  = await remover("662a5e87c7eb4eae97e47dfc")
  console.log("Produto removido", result); 

  await client.close();
}

main();
