import jwt from 'jsonwebtoken';
const checkToken = (req, res, next) => {
  const bToken = req.headers.authorization;
  if (!bToken) {
    return res.status(403).json({ error: 'You are not authorized' });
  }
  const splitToken = bToken.split(' ');
  const token = splitToken[1];
  console.log(token);

  try {
    const decoded = jwt.verify(
      token,
      'jfi83jh90w4bd2u3r01jnidh0j3q0ej29edjcj390j2309j9jr3j0j4r9j39dj03j9j'
    );
  } catch (e) {
    return res.status(403).json({ error: 'You are not authorized' });
  }
  next();
};

export default checkToken;
