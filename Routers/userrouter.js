import express from 'express';
import { checkrandomstring, forgotpassword, loginUser, registerUser, resetpassword } from '../Controllers/userController.js';




const router = express.Router();

router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/forgot-password',forgotpassword)
router.get('/checkstring/:str',checkrandomstring)
router.put("/reset-password",resetpassword)


export default router