import { Router } from "express";
const user = require('../contollers/user.contoller.js');

const router = Router('', user.getUser);
router.get()
export default router;

