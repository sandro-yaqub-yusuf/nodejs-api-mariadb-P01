import path from 'path';
import multer from 'multer';

const uploadFolder = path.resolve(__dirname, '..', '..', 'public/uploads/images');
const uploadFolderTemp = path.resolve(__dirname, '..', '..', 'public/uploads/tmp');

export default {
    directory: uploadFolder,
    storage: multer.diskStorage({
        destination: uploadFolderTemp,
        filename(request, file, callback) {
            const uniqueSuffix = (Date.now() + path.extname(file.originalname));
            const fileName = file.originalname.replace(path.extname(file.originalname), '');
    
            callback(null, (fileName + '-' + uniqueSuffix));    
        },
    }),
    fileFilter(request: any, file: { mimetype: string; }, callback: (arg0: null, arg1: boolean) => void) {
        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png'];
        const fileSize = request.headers['content-length'];

        if (fileSize) {
            if (parseInt(fileSize) > 200000) {
                callback(null, false);
            } else {
                callback(null, allowed.includes(file.mimetype));
            }
        } else {
            callback(null, false);
        }
    }
}
