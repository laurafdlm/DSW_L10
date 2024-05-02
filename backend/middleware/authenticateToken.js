const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  // Get the token from the request header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN_HERE

  if (token == null) return res.sendStatus(401); // No token, unauthorized

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token

    // Append the user to the request object
    req.user = { _id: user.id };
    next(); // Proceed to the next middleware or route handler
  });
}

module.exports = authenticateToken;
