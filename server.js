const express=require("express");
const app=new express();
const dotenv=require("dotenv")
dotenv.config()
const cors=require("cors")
const rateLimiter=require("express-rate-limit");
const NoteRoutes=require("./routes/NoteRoutes")
const DB=process.env.DB
DBconnection=require("./config/DBconecction")
app.use(cors());

app.use(express.json())
const limiter=rateLimiter({
    windowMs:15*60*10000,
    limit:300000,
    message:'too many request created from this account IP,please try again after an hour'
})

app.use(limiter);
app.get('/', (req, res) => {
  res.send('Server is running!');
});
app.use("/notes",NoteRoutes);

DBconnection.connect(DB).then(()=>{
app.listen(3000,()=>{
    console.log('SERVER IS RUNNING...')
})
}).catch((err)=>{
    console.log(err);
})

