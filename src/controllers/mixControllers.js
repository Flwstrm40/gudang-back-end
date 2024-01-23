const MixModel = require("../models/mixModels");

class MixController {
  getTotalMix(req, res) {
    MixModel.getTotalMix((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json({
        mixs: result,
      });
    });
  }
}

module.exports = new MixController();
