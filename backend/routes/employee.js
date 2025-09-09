import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { showemployee,addemployee,updateemployee,deleteemployee ,getEmployee} from '../controllers/employeeController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

const storage = multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,path.join(__dirname,'../uploads/'))
    },
    }
)
const upload = multer({storage:storage})

router.get('/showemployee', showemployee);
router.post('/addemployee',upload.single("profile_url"), addemployee);
router.put('/updateemployee/:employee_id', upload.single('profile_url'),updateemployee); 
router.delete('/deleteemployee/:employee_id', deleteemployee);
router.get('/employee/:employee_id', getEmployee);



export default router