const productModel = require("../models/productModels");
const transferModel = require("../models/transferModels");
const productController = require("./productControllers");

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
    // console.log(id)
    // console.log(transferModel.getTransferById(id));
    transferModel.getTransferById(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      } 
      res.status(200).json(result);
    });
  }

  async addTransfer(req, res) {
    const transfer = req.body;
  
    try {
      const currentStock = await productModel.getProductStock(transfer.id_produk);
  
      if (transfer.kuantitas > currentStock) {
        return res.status(400).json({ error: "Stok tidak cukup untuk ditransfer" });
      }
  
      // Proceed with adding the transfer if stock is sufficient
      const result = await transferModel.addTransfer(transfer); // Assuming you have a Promise-based version of addTransfer
  
      // If addition is successful, update the product stock by decreasing the transferred quantity
      await productController.transferStock({ params: { id_produk: transfer.id_produk }, body: { stok: transfer.kuantitas } }, res);
  
      // Send the response after the stock has been updated
      res.json(result);
    } catch (error) {
      // Handle errors during transfer addition or stock update
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
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

  async deleteTransfer(req, res) {
    const id = req.params.id;
  
    try {
      // Retrieve the transfer to be deleted
      const transfer = await transferModel.getTransferById(id); 
      
      // If the transfer is not found, return an error
      if (!transfer) {
        return res.status(404).json({ error: "Transfer tidak ditemukan" });
      }

      // console.log("Transfer:", transfer[0]);

      // Save necessary information before deletion
      const productId = transfer[0].id_produk;
      const transferQuantity = transfer[0].kuantitas;

      // Proceed with the deletion if the transfer is found
      const result = await transferModel.deleteTransfer(id);

      // If deletion is successful, update the product stock by increasing the transferred quantity
      await productController.addStock({ params: { id: productId }, body: { stok: transferQuantity } }, res);
    

      // Send the response after the stock has been updated
      return res.json(result);
    } catch (error) {
      // Handle errors during transfer deletion or stock update
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  getTotalTransfer(req, res) {
    transferModel.getTotalTransfer((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json(result);
    });
  }
}

module.exports = new TransferController();
