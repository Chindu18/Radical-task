import express from 'express';
import { showemployee } from '../controllers/employeeController.js';

const router = express.Router();

router.get('/showemployee', showemployee)