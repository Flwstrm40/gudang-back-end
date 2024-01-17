const outHistoryModel = require("../models/outHistoryModels");

class OutHistoryController {
  getAllOutHistories(req, res) {
    outHistoryModel.getAllOutHistories((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json({
        outHistories: result,
      });
    });
  }

  getOutHistoryById(req, res) {
    const id = req.params.id;
    outHistoryModel.getOutHistoryById(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json(result);
    });
  }

  addOutHistory(req, res) {
    const inHistory = req.body;
    outHistoryModel.addOutHistory(inHistory, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  updateOutHistory(req, res) {
    const id = req.params.id;
    const inHistory = req.body;

    outHistoryModel.updateOutHistory(id, inHistory, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  deleteOutHistory(req, res) {
    const id = req.params.id;
    outHistoryModel.deleteOutHistory(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }


}

module.exports = new OutHistoryController();
