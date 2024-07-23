import multer from 'multer';
import { resolve, extname } from 'path';

const rand = (min = 10000, max = 20000) => Math.floor(Math.random() * min + max);

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${rand()}${extname(file.originalname)}`);
    },
  }),
};
