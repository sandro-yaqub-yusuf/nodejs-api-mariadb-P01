import path from "path";
import dotenv from 'dotenv';
import multer from "multer";

dotenv.config();

const uploadFolder = path.resolve(__dirname, '..', '..', (process.env.UPLOAD_TMP_DIR as string));

export default {
    directory: uploadFolder,
    storage: multer.diskStorage({
        destination: uploadFolder,
        filename(request, file, callback) {
            console.log(request.query);
            const uniqueSuffix = (Date.now() + path.extname(file.originalname));
            const fileName = file.originalname.replace(path.extname(file.originalname), '');
    
            callback(null, (fileName + '-' + uniqueSuffix));    
        }
    })
}
