const inHistoryModel = require('../models/inHistoryModels')

class InHistoryController {
  getAllInHistories(req, res) {
    inHistoryModel.getAllInHistories((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json({
        inHistories: result,
      });
    });
  }

  getInHistoryById(req, res) {
    const id = req.params.id;
    inHistoryModel.getInHistoryById(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json(result);
    });
  }

  addInHistory(req, res) {
    const inHistory = req.body;
    inHistoryModel.addInHistory(inHistory, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  updateInHistory(req, res) {
    const id = req.params.id;
    const inHistory = req.body;

    inHistoryModel.updateInHistory(id, inHistory, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  deleteInHistory(req, res) {
    const id = req.params.id;
    inHistoryModel.deleteInHistory(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }


}

module.exports = new InHistoryController();
