const checkExist = (Model) => {
    return async (req, res, next) => {
      const hotel=await Model.findById(req.params.id)
      if (hotel) {
        next();
      } else {
        res.status(404).send(`Khong tim thay id nay`);
      }
    };
  };
  module.exports = {
    checkExist,
  };