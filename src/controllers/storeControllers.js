const storeModel = require('../models/storeModels');

class StoreController {
  getAllStores(req, res) {
    storeModel.getAllStores((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json({
        stores: result,
      });
    });
  }

  getStoreById(req, res) {
    const id = req.params.id;
    storeModel.getStoreById(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json(result);
    });
  }

  addStore(req, res) {
    const product = req.body;
    storeModel.addStore(product, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  updateStore(req, res) {
    const id = req.params.id;
    const product = req.body;

    storeModel.updateStore(id, product, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  deleteStore(req, res) {
    const id = req.params.id;
    storeModel.deleteStore(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }
}

module.exports = new StoreController();
