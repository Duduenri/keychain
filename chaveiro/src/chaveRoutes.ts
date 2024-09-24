import express from 'express';
import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient(); // Removed duplicate declaration

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

// Retirar chave
app.post('/chaves/retirar', async (req, res) => {
  const { chaveId, usuarioId } = req.body;
  const chave = await prisma.chave.update({
    where: { id: chaveId },
    data: { status: false }, // Usar status para indicar que a chave não está disponível
  });

  res.json({ chave });
});

// Devolver chave
app.post('/chaves/devolver', async (req, res) => {
  const { chaveId } = req.body;
  const chave = await prisma.chave.update({
    where: { id: chaveId },
    data: { status: true }, // Atualiza o status para indicar que a chave está disponível
  });

  res.json({ chave });
});

// Listar chaves
app.get('/chaves', async (req, res) => {
  const chaves = await prisma.chave.findMany();
  res.json(chaves);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
