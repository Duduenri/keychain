import { Router } from 'express';
import { retirarChave, devolverChave, listarChaves } from '../controllers/chaveController'; // Importando as funções do controller

const router = Router();

router.post('/retirar', retirarChave); // Rota para retirar chave
router.post('/devolver', devolverChave); // Rota para devolver chave
router.get('/', listarChaves); // Rota para listar chaves

export default router;
