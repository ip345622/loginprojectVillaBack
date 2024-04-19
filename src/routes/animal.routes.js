import { Router } from "express";
import { postData, getData, getRecentData } from "../controller/animal.controller.js";


const router = Router();

router.post('/animals',postData);
router.get('/animals/:key', getData);
router.get('/animalsLatest/:key', getRecentData);

export default router;
