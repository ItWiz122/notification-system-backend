export const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    console.log(error);
    return next(error);
  }
  next();
};
