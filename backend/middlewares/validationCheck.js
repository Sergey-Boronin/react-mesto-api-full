const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

module.exports.idValidation = celebrate({
  params: Joi
    .object()
    .keys({
      id: Joi.string().hex().length(24),
    }),
});

module.exports.cardValidation = celebrate({
  body: Joi
    .object()
    .keys({
      name: Joi.string().required().min(2).max(30),
      link: Joi.string().required().min(2).max(256)
        .custom((value, helpers) => {
          if (validator.isURL(value, { require_protocol: true, disallow_auth: true })) {
            return value;
          }
          return helpers.message('Неправильный формат ссылки');
        }),
    }),
});

module.exports.registrValidation = celebrate({
  body: Joi
    .object()
    .keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().custom((value, helpers) => {
        if (validator.isURL(value, { require_protocol: true, disallow_auth: true })) {
          return value;
        }
        return helpers.message('Неправильный формат ссылки');
      }),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
    }),
});

module.exports.loginValidation = celebrate({
  body: Joi
    .object()
    .keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
    }),
});

module.exports.userInfoValidation = celebrate({
  body: Joi
    .object()
    .keys({
      name: Joi.string().min(2).max(30).required(),
      about: Joi.string().min(2).max(30).required(),
    }),
});

module.exports.userAvatarValidation = celebrate({
  body: Joi
    .object()
    .keys({
      avatar: Joi.string().required()
        .custom((value, helpers) => {
          if (validator.isURL(value, { require_protocol: true, disallow_auth: true })) {
            return value;
          }
          return helpers.message('Неправильный формат ссылки');
        }),
    }),
});
