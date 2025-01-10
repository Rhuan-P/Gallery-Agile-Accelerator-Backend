import express from 'express';
import cors from 'cors';
import photoRoutes from './src/routes/Routes.js';

const app = express();

app.use(cors({
  origin: '*'
}));
app.use(express.json());

app.use('/api', photoRoutes);

console.log(process.env.API_URL);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
