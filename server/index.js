import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';

const app=express()
app.use(cors());
app.use('/',router);

const PORT=8000

app.listen(PORT,()=>console.log(`Server running on PORT ${PORT}`));