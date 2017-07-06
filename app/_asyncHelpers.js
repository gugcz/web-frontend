exports.asyncErrorChecking = function asyncWrap(fn) {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
