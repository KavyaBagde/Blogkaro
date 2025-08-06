import express from 'express' ;
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000

//DB connection
await connectDB();

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get('/', (req, res) => {
  res.send('API is working')
})

app.use("/api/admin" , adminRouter)
app.use("/api/blog" , blogRouter)

//listenr

app.listen(PORT , ()=>{
    console.log(`listening to port ${PORT}`)
})

export default app ;