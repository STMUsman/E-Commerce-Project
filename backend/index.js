const port = 4000;
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require('os');
const bodyParser = require('body-parser');



app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection with MongoDB
mongoose.connect("mongodb+srv://EcomWeb:Ecom1234@cluster0.1d5hrhl.mongodb.net/e-commerce");

//API creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

//Image storagr engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})


const upload = multer({storage:storage})

//Creating Upload Endpoint for images

app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})




// Schema for Creating Products

const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct',async (req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0)
        {
          let last_product_array = products.slice(-1);
          let last_product = last_product_array[0];
          id = last_product.id+1;
        }
        else{
            id=1;
        }

    const product = new Product({
        id:id,
        name:req.body.name,
        brand:req.body.brand,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

// Creating API for getting all products

app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})


// Creating API for deleting Products

app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name 
    })
})




// Schema Creating for user model

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    address:{
        type:String,
    },
    phonenumber:{
        type:Number,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

// Creating Endpoint for registering the user
app.post('/signup',async (req,res)=>{

    let check = await Users.findOne({email:req.body.email});
    if (check) {
        return res.status(400).json({success:false,errors:"existing user found with same email address"})
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        address:req.body.address,
        phonenumber:req.body.phonenumber,
        cartData:cart,
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})



// Creating endpoint for user login

app.post('/login',async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email Id"})
    }
})

// Creating endpoint for newcollection data
app.get('/newcollections',async (req,res)=>{
   let products = await Product.find({});
   let newcollection = products.slice(1).slice(-8);
   console.log("Newcollection Fetched");
   res.send(newcollection);
})

//creating endpoint for latest devices
app.get('/Latestdevices',async (req,res)=>{
    let products = await Product.find({category:"Mobile Phones"});
    let latest_devices = products.slice(0,4);
    console.log("Latest device in Mobile Phones fetched");
    res.send(latest_devices);
})

// creating middleware to fetch user
   const fetchUser = async (req,res,next)=>{
      const token = req.header('auth-token');
      if (!token) {
        res.status(401).send({errors:"Please authenticate using valid token"})
      }
      else{
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
             res.status(401).send({errors:"please authenticate using a valid token"})
        }
      }
   }

// creating endpoint for adding products in cartdata

app.post('/addtocart',fetchUser,async (req,res)=>{
    console.log("Added",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added")
})



// creating endpoint to remove product from cartdata
app.post('/removefromcart',fetchUser,async (req,res)=>{
    console.log("removed",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed")
})

// creating endpoint to get cartdata

app.post('/getcart',fetchUser,async (req,res)=>{
    console.log("GetCart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})




// order details for user

const Order = mongoose.model('Order',{
    id:{
        type:Number,
        required:true,
    },
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    street:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    zipcode:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
})
app.post('/productorder', async (req, res) => {
    try {
      let orders = await Order.find({});
      let id;
      if (orders.length > 0) {
        let last_order = orders[orders.length - 1];
        id = last_order.id + 1;
      } else {
        id = 1;
      }
      
      const order = new Order({
        id: id,
        ...req.body
      });
      
      await order.save();
      console.log("Order successfully");
      res.json({ success: true });
    } catch (error) {
      console.error("Error saving order:", error);
      res.json({ success: false });
    }
  });
  
  // Route to get all orders
  app.get('/allorders', async (req, res) => {
    try {
      let orders = await Order.find({});
      console.log("All Orders Fetched");
      res.send(orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).send("Error fetching orders");
    }
  });
  
  
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });