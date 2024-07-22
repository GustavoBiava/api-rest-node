import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({ attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'] });
    res.status(200).json(alunos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID Inválido'] });

      const aluno = await Aluno.findByPk(id);
      if (!aluno) return res.status(400).json({ errors: ['Aluno não existe'] });
      const { nome, sobrenome, email, idade, peso, altura } = aluno;

      return res.status(200).json({ id, nome, sobrenome, email, idade, peso, altura });
    }
    catch (err) {
      return res.status(400).json({ errors: err.errors.map((error) => error.message) });
    }
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      const { id, nome, sobrenome, email, idade, peso, altura } = aluno;
      return res.status(200).json({ id, nome, sobrenome, email, idade, peso, altura });
    }
    catch (err) {
      return res.status(400).json({ errors: err.errors.map((error) => error.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID Inválido'] });

      const aluno = await Aluno.findByPk(id);
      if (!aluno) return res.status(400).json({ errors: ['Aluno não existe'] });

      const updatedAluno = await aluno.update(req.body);

      const { nome, sobrenome, email, idade, peso, altura } = updatedAluno;

      return res.status(200).json({ id, nome, sobrenome, email, idade, peso, altura });
    }
    catch (err) {
      return res.status(400).json({ errors: err.errors.map((error) => error.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID Inválido'] });

      const aluno = await Aluno.findByPk(id);
      if (!aluno) return res.status(400).json({ errors: ['Aluno não existe'] });

      await aluno.destroy();
      return res.status(200).json({ apagado: true });
    }
    catch (err) {
      return res.status(400).json({ errors: err.errors.map((error) => error.message) });
    }
  }
}

export default new AlunoController();
