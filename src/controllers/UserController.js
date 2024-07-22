import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async store(req, res) {
    try {
      const user = await User.create(req.body);
      return res.status(200).json({ user });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    if (!req.params.id) res.status(400).json({ errors: ['ID Inválido!'] });
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) res.status(400).json({ errors: ['Usuário não existe!'] });

      await user.destroy();
      return res.status(200).json(user);
    }
    catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async show(req, res) {
    if (!req.params.id) res.status(400).json({ errors: ['ID Inválido!'] });
    try {
      const user = await User.findByPk(req.params.id);
      return res.status(200).json(user);

    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async update(req, res) {
    if (!req.params.id) res.status(400).json({ errors: ['ID Inválido!'] });

    try {
      const user = await User.findByPk(req.params.id);
      if (!user) res.status(400).json({ errors: ['Usuário não existe!'] });

      const updatedUser = await user.update(req.body);

      return res.status(200).json(updatedUser);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }
}

export default new UserController();
