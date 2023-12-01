import express from "express";
import{
    getUsers,
    addUser,
    deletedUser,
    getUserById
} from "../controllers/productController.js";

const router= express.Router();

router.get('/products', getUsers);
router.get('/products/:id', getUserById);
router.delete('/products/:id', deletedUser);
router.post('/products', addUser);



export default router;