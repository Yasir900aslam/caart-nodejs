const jwt = require('jsonwebtoken')

const secret = 'sadasdasd'

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token')
  // Check for token
  if (!token) { return res.status(401).json('Authorizaton denied') }
  try {
    // Verify token
    const decoded = jwt.verify(token, secret)
    // Add user from payload
    req.user = decoded
    next()
  } catch (e) {
    res.status(401).json('Authorizaton denied')
  }
}
