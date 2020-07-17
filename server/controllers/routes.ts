import testController from "./testController";

import express from 'express';
const router = express.Router();

router.get('/test', testController);

export default router;
