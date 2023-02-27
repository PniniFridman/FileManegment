const categoryDal = require("../dal/categoryDal");

class categoryController {
    addNewCategory = async(req, res) => {
        const categoryData = req.query
        // Confirm data
        if (!categoryData) {
        return res.status(400).json({ message: 'All fields are required'})
        }
       res.send(await categoryDal.addNewCategory(categoryData));
    }

    getCategoryByUserID = async(req, res) => {
       const id = req.params.id;
       res.json(await categoryDal.getCategoryByUserID(id));
    }

    updateCategory = async(req, res) => {
        const id  = req.params.id;
        const { newid, color, emg, text  } = req.query   
        // Confirm data
        if (!id) {
        return res.status(400).json({ message: 'Id fields are required' })
        }
        res.send(await categoryDal.updateCategory(id ,newid, color, emg, text ));  
    }

    deleteCategory = async(req, res) => {
        const id  = req.params.id;
        // Confirm data
        if (!id) {
        return res.status(400).json({ message: 'user ID required' })
        }
        // var id = req.params.id;
        res.send(await categoryDal.deleteCategory(id)); 
    }
}

const categorycontroller = new categoryController();
module.exports = categorycontroller;
