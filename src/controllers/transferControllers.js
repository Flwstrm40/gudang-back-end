const transferModel = require("../models/transferModels");

class TransferController {
  getAllTransfer(req, res) {
    transferModel.getAllTransfer((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json({
        transfers: result,
      });
    });
  }

  getTransferById(req, res) {
    const id = req.params.id;
    transferModel.getTransferById(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json(result);
    });
  }

  addTransfer(req, res) {
    const transfer = req.body;
    transferModel.addTransfer(transfer, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  updateTransfer(req, res) {
    const id = req.params.id;
    const transfer = req.body;

    transferModel.updateTransfer(id, transfer, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  deleteTransfer(req, res) {
    const id = req.params.id;
    transferModel.deleteTransfer(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }
}

module.exports = new TransferController();
