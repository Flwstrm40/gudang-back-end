const productModel = require("../models/productModels");
const customerModel = require("../models/customerModels");
const productController = require("./productControllers");

class TransferController {
  getAllCustomers(req, res) {
    customerModel.getAllCustomers((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json({
        customers: result,
      });
    });
  }

  getCustomerById(req, res) {
    const id = req.params.id;
    // console.log(id)
    // console.log(customerModel.getCustomerById(id));
    customerModel.getCustomerById(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      } 
      res.status(200).json(result);
    });
  }

  async addCustomer(req, res) {
    const customer = req.body;
  
    try {
      const currentStock = await productModel.getProductStock(customer.id_produk);
      
      // console.log("Customer ID:", customer.id_produk);
      // console.log("Current stock:", currentStock);
      // console.log("Customer quantity:", customer.kuantiti);
  
      if (customer.kuantiti > currentStock) {
        return res.status(400).json({ error: "Stok tidak cukup untuk dipesan" });
      }
  
      // Proceed with adding the customer if stock is sufficient
      const result = await customerModel.addCustomer(customer);
  
      // If addition is successful, update the product stock by decreasing the transferred quantity
      await productController.transferStock({ params: { id_produk: customer.id_produk }, body: { stok: customer.kuantiti } }, res);
  
      // Send the response after the stock has been updated
      res.json(result);
    } catch (error) {
      // Handle errors during customer addition or stock update
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  
  
  

  updateCustomer(req, res) {
    const id = req.params.id;
    const customer = req.body;

    customerModel.updateCustomer(id, customer, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(result);
    });
  }

  async deleteCustomer(req, res) {
    const id = req.params.id;
  
    try {
      // Retrieve the customer to be deleted
      const customer = await customerModel.getCustomerById(id); 
      // console.log("Customer:", customer[0]);
      
      // If the customer is not found, return an error
      if (!customer) {
        return res.status(404).json({ error: "Customer tidak ditemukan" });
      }

      // console.log("Transfer:", customer[0]);

      // Save necessary information before deletion
      const productId = customer[0].id_produk;
      const transferQuantity = customer[0].kuantiti;

      // Proceed with the deletion if the customer is found
      const result = await customerModel.deleteCustomer(id);

      // If deletion is successful, update the product stock by increasing the transferred quantity
      await productController.addStock({ params: { id: productId }, body: { stok: transferQuantity } }, res);
    

      // Send the response after the stock has been updated
      return res.json(result);
    } catch (error) {
      // Handle errors during customer deletion or stock update
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // get total data
  getTotalData(req, res) {
    customerModel.getTotalData((err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json(result);
    });
  }

  
}

module.exports = new TransferController();
