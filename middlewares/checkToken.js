import jwt from 'jsonwebtoken';
const checkToken = roleArray => {
  return (req, res, next) => {
    const bToken = req.headers.authorization;
    if (!bToken) {
      return res.status(403).json({ error: 'You are not authorized' });
    }
    const splitToken = bToken.split(' ');
    const token = splitToken[1];
    console.log(token);

    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);

      if (!roleArray.includes(decoded.role)) {
        return res.status(403).json({ error: 'You are not authorized' });
      }
    } catch (e) {
      return res.status(403).json({ error: 'You are not authorized' });
    }
    next();
  };
};
export default checkToken;
