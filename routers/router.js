import express from "express";
import cors from 'cors';

const router = express.Router();

router.use(cors())
router.use(express.json());

//router.post('/signin', validateSign, cadastrar);

export default router