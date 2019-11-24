const jwt = require('jsonwebtoken');
const pick = require('lodash.pick');
const config = require('config');
const UserProvider = require('../providers/user');

const { secret } = config.token;

const AuthController = {
  login: async (ctx) => {
    try {
      const user = await UserProvider.getUser(ctx.request.body);

      if (!user) {
        return ctx.send(404, {
          error: 'Incorrect login or password'
        });
      }

      const token = jwt.sign(pick(user, ['id', 'login', 'fullName', 'isAdmin']), secret);

      return ctx.send(200, { token });
    } catch (error) {
      return ctx.send(500, { error: error.message })
    }
  }
}

module.exports = AuthController;
