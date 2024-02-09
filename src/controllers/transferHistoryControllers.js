const transferHistoryModel = require("../models/transferHistoryModels");

class TransferHistoryController {
  getAllTransferHistories(req, res) {
    transferHistoryModel.getAllTransferHistories((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json({
        transfer_Histories: result,
      });
    });
  }

  getTransferHistoryById(req, res) {
    const id = req.params.id;
    // console.log(id)
    // console.log(transferHistoryModel.getTransferHistoryById(id));
    transferHistoryModel.getTransferHistoryById(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      } 
      res.status(200).json(result);
    });
  }

  async addTransferHistory(req, res) {
    const transfer = req.body;
    transferHistoryModel.addTransferHistory(transfer, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

//   updateTransferHistory(req, res) {
//     const id = req.params.id;
//     const product = req.body;

//     transferHistoryModel.updateTransferHistory(id, product, (err, result) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//         return;
//       }
//       res.json(result);
//     });
//   }

//   deleteTransferHistory(req, res) {
//     const id = req.params.id;
//     transferHistoryModel.deleteTransferHistory(id, (err, result) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//         return;
//       }
//       res.json(result);
//     });
//   }

  // get total data
  getTotalData(req, res) {
    transferHistoryModel.getTotalData((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json(result);
    });
  }

  
}

module.exports = new TransferHistoryController();
