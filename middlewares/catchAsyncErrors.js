module.exports = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);  // Passes any error to the next middleware (errorMiddleware)
  };
  