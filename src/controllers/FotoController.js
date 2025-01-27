import multer from 'multer';
import multerConfig from '../config/multer';
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('archive');

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) return res.status(400).json({ errors: [err.code] });
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ original_name: originalname, filename, aluno_id });
        return res.status(200).json(foto);
      }
      catch (e) {
        return res.status(400).json({ errors: ['O aluno não existe!'] });
      }
    });
  }
}

export default new FotoController();
