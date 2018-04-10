module.exports = {
  authenticationJWT: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
