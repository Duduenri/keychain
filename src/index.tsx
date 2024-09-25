import express from 'express';
import chaveRoutes from './routes/chaveRoutes'; // Importando as rotas

const app = express();
app.use(express.json()); // Permite trabalhar com JSON

// Usando o roteamento no caminho "/chaves"
app.use('/chaves', chaveRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
