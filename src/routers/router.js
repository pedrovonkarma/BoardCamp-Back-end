import express from "express";
import cors from 'cors';
import { createGame, listGames } from "../controllers/gamesControllers.js";
import { validateGame } from "../middlewares/validateGame.js";
import { createCustomer, listCustomer, listCustomers, updateCustomer } from "../controllers/customersControllers.js";
import { validateCustomer } from "../middlewares/validateCustomer.js";
import { validateUpCustomer } from "../middlewares/validateUpCustomer.js";

const router = express.Router();

router.use(cors())
router.use(express.json());

router.get('/games', listGames);
router.post('/games', validateGame, createGame)

router.get('/customers', listCustomers);
router.get('/customers/:id', listCustomer);
router.post('/customers', validateCustomer, createCustomer);
router.put('/customers/:id', validateUpCustomer, updateCustomer);

export default router