import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const aluno = await Aluno.create({
      nome: 'Carlos',
      sobrenome: 'Sainz',
      email: 'Chilli@email.com',
      idade: 29,
      peso: 66,
      altura: 1.78,
    });
    res.status(200).json({ aluno });
  }
}

export default new HomeController();
