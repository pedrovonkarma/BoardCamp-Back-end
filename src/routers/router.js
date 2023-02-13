import express from "express";
import cors from 'cors';
import { createGame, listGames } from "../controllers/gamesControllers.js";
import { validateGame } from "../middlewares/validateGame.js";

const router = express.Router();

router.use(cors())
router.use(express.json());

router.get('/games', listGames);
router.post('/games', validateGame, createGame)

export default router