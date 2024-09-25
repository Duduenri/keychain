import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// Função para retirar uma chave
export const retirarChave = async (req: Request, res: Response) => {
  const { chaveId, usuarioId } = req.body;

  try {
    const chave = await prisma.chave.update({
      where: { id: chaveId },
      data: { status: false }, // Indica que a chave foi retirada
    });

    // Você pode adicionar mais lógica aqui, como criar um registro no histórico, etc.
    res.json({ chave });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao retirar a chave.' });
  }
};

// Função para devolver uma chave
export const devolverChave = async (req: Request, res: Response) => {
  const { chaveId } = req.body;

  try {
    const chave = await prisma.chave.update({
      where: { id: chaveId },
      data: { status: true }, // Indica que a chave foi devolvida
    });

    res.json({ chave });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao devolver a chave.' });
  }
};

// Função para listar todas as chaves
export const listarChaves = async (req: Request, res: Response) => {
  try {
    const chaves = await prisma.chave.findMany();
    res.json(chaves);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar as chaves.' });
  }
};
