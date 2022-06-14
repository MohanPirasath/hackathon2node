import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

// const PORT=4000;

dotenv.config()
const PORT=process.env.PORT;


app.use(express.json());

const MONGO_URL = process.env.MONGO;
// console.log(process.env)

async function Createconnection() {
  const Client = new MongoClient(MONGO_URL);
  await Client.connect();
  console.log("Mongo connected");
  return Client;
}

export const Client = await Createconnection();
app.use(cors());


app.get("/", function (req, res) {
  res.send("backend server created");
});


app.get("/cam", async function(req,res){

    const data = await Client.db("B33WD").collection("Product").find({}).toArray()
    res.send(data)
})


app.post("/cam", async function(req,res){
    const data=req.body
    const set = await Client.db("B33WD").collection("Cart").insertOne(data)
    res.send(set)
})
app.get("/cam/:id", async function(req,res){
   const {id}=req.params

    const data = await Client.db("B33WD").collection("Product").findOne({ id:id })
    res.send(data)
})


app.get("/cars", async function(req,res){

    const data = await Client.db("B33WD").collection("Product").find({}).toArray()
    res.send(data)
})
app.post("/cars", async function(req,res){
    const data=req.body
    const set = await Client.db("B33WD").collection("Cart").insertOne(data)
    res.send(set)
})
app.get("/Cart", async function(req,res){

    const data = await Client.db("B33WD").collection("Cart").find({}).toArray()
    res.send(data)
})
app.get("/Cart/:id", async function(req,res){

    const data = await Client.db("B33WD").collection("Cart").findOne({id:id})
    res.send(data)
})
app.delete("/Cart/:id", async function(req,res){
const {id}=req.params
    const data = await Client.db("B33WD").collection("Cart").deleteOne({id:id})
    res.send(data)
})

app.get("/cars/:id", async function(req,res){
   const {id}=req.params


    const data = await Client.db("B33WD").collection("Product").findOne({id:id})
    res.send(data)
})
app.get("/Ele", async function(req,res){

    const data = await Client.db("B33WD").collection("Product").find({}).toArray()
    res.send(data)
})
app.post("/Ele", async function(req,res){
    const data=req.body
    const set = await Client.db("B33WD").collection("Cart").insertOne(data)
    res.send(set)
})
app.get("/Ele/:id", async function(req,res){
   const {id}=req.params


    const data = await Client.db("B33WD").collection("Product").findOne({id:id})
    res.send(data)
})
app.get("/House_product", async function(req,res){

    const data = await Client.db("B33WD").collection("Product").find({}).toArray()
    res.send(data)
})
app.post("/House_product", async function(req,res){
    const data=req.body
    const set = await Client.db("B33WD").collection("Cart").insertOne(data)
    res.send(set)
})
app.get("/House_product/:id", async function(req,res){
   const {id}=req.params


    const data = await Client.db("B33WD").collection("Product").findOne({id:id})
    res.send(data)
})
app.get("/AllProduct", async function(req,res){

    const data = await Client.db("B33WD").collection("Product").find({}).toArray()
    res.send(data)
})

app.post("/AllProduct", async function(req,res){
    const data=req.body
    const set = await Client.db("B33WD").collection("Cart").insertOne(data)
    res.send(set)
})

app.get("/AllProduct/:id", async function(req,res){
   const {id}=req.params


    const data = await Client.db("B33WD").collection("Product").findOne({id:id})
    res.send(data)
})
app.get("/Admin/EditProduct", async function(req,res){

    const data = await Client.db("B33WD").collection("Product").find({}).toArray()
    res.send(data)
})
app.delete("/Admin/EditProduct/:id", async function(req,res){
    const {id}=req.params

    const data = await Client.db("B33WD").collection("Product").deleteOne({id:id})
    res.send(data)
})
app.get("/Admin/EditProduct/:id", async function(req,res){
    const {id}=req.params

    const data = await Client.db("B33WD").collection("Product").findOne({id:id})
    res.send(data)
})


app.post("/Admin/AddProduct",async function(req,res){
    const data = req.body
    const set = await Client.db("B33WD").collection("Product").insertMany(data)
    res.send(set)
})

app.listen(PORT, () => console.log(`App started in ${PORT}`));
