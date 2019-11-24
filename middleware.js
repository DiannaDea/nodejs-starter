const jwt = require('jsonwebtoken');
const config = require('config');
const UserProvider = require('./providers/user');

const { secret } = config.token;

const authMiddleware = async (ctx, next) => {
  const token = ctx.get('Authorization');
  
  try {
    const decodedToken = jwt.verify(token, secret);

    const { id } = decodedToken;
    
    const user = await UserProvider.getUser({ id });
    
    if (!user) {
      return ctx.send(401, {
        error: 'Unauthorized'
      });
    }
    
    await next();
  } catch(err) {
    return ctx.send(400, err.message);
  }
}

const checkUserExists = async (ctx, next) => {
  const { userId } = ctx.params;
  const user = await UserProvider.getUser({ id: userId });

  if (!user) {
    return ctx.send(404, {
      error: `No user with id: ${userId}`
    })
  }

  ctx.user = user;
  await next();
}

module.exports = {
  authMiddleware,
  checkUserExists
}