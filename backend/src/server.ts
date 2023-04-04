import express from "express";
import  cors from "cors";
import { sample_products, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());
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

app.post("/api/users/login",(req,res) => {
    const {email,password} = req.body;
    const user = sample_users.find(user =>
        user.email === email && user.password === password);

    if(user){
        res.send(generateTokenResponse(user));
    }else{
        res.status(400).send("User name or password is not valid");
    }
})

const generateTokenResponse = (user:any) => {
    const token = jwt.sign({
        email:user.email,isAdmin:user.isAdmin
    },"SomeRandomText",{
        expiresIn:"30d"
    });

    user.token = token;
    return user;
}

const port = 5000;
app.listen(port,()=>{
    console.log("Website served on http://localhost:" + port);
})