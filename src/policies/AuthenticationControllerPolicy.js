const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      name: Joi.string(),
      surname: Joi.string(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{5,32}$')
      ),
      email: Joi.string().email()
    }
    const {error, value} = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'name':
          res.status(400).send({
            error: 'You must provide a valid name'
          })
          break
        case 'password':
          res.status(400).send({
            error: `You must provide a valid password
            <br> lower / upper case
            <br> 8 - 32 charracters long`
          })
          break
        default:
          res.status(400).send({
            error: `Invalid registration inf ${value}`
          })
      }
    } else {
      next()
    }
  }
}
