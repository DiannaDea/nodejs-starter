const jwt = require('jsonwebtoken');
const config = require('config');
const UserProvider = require('./providers/user');
const GroupProvider = require('./providers/groups');

const { secret } = config.token;

const authMiddleware = async (ctx, next) => {
  const token = ctx.get('Authorization');

  if (!token) {
    return ctx.send(401, {
      error: 'Unauthorized'
    });
  }

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
  const user = await GroupProvider.getUser({ id: userId });

  if (!user) {
    return ctx.send(404, {
      error: `No user with id: ${userId}`
    })
  }

  ctx.user = user;
  await next();
}

const checkGroupExists = async (ctx, next) => {
  const { groupId } = ctx.params;
  const group = await GroupProvider.getGroup({ id: groupId });

  if (!group) {
    return ctx.send(404, {
      error: `No group with id: ${groupId}`
    })
  }

  await next();
}

module.exports = {
  authMiddleware,
  checkUserExists,
  checkGroupExists
}