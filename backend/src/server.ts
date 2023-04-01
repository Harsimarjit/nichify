import express from "express";
import  cors from "cors";
import { sample_products, sample_tags } from "./data";

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))

app.get("/api/products",(req,res)=>{
    res.send(sample_products);
})

app.get("/api/products/search/:searchTerm",(req,res)=> {
    const searchTerm = req.params.searchTerm;
    const products = sample_products
    .filter(products => products.name.toLowerCase()
    .includes(searchTerm.toLowerCase()));
    res.send(products);
})

app.get("/api/products/tags", (req,res) => {
    res.send(sample_tags);
})

app.get("/api/products/tag/:tagName",(req,res) => {
    const tagName = req.params.tagName;
    const products = sample_products
    .filter(products => products.tags?.includes(tagName));
    res.send(products);    
})

app.get("/api/products/:productId",(req,res)=>{
    const productId = req.params.productId;
    const product = sample_products
    .find(products => products.id == productId);
    res.send(product);
})

const port = 5000;
app.listen(port,()=>{
    console.log("Website served on http://localhost:" + port);
})