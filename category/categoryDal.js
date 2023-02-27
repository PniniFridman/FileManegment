

const db = require('../models/index')
const Category = db.category



class CategoryDataAccessor {
    db;
    Category;

    constructor() {
        this.init();
    }

    init = async () => {
         this.db = db;
         this.collection = Category;
    }

    addNewCategory = async (categoryData) => {
        const category = await Category.create(categoryData)
        if (category) { // Created
            return 'New category created'
        // return res.status(201).json({ message: 'New user created' })
        // } else {
        // return res.status(400).json({ message: 'Invalid user datareceived' })
        // }
        }
    }
  

    getCategoryByUserID = async (id) => {
       
        const category = await Category.findOne({where:{id:id}})
        // return json(user)
        console.log(category)

        return category;
    }
    

    updateCategory = async (id, newid, name, parentid,userid) => {
        const category = await Category.update({newid, name, parentid,userid},{where:{id:id}})
        if (!category) {
        return res.status(400).json({ message: 'folder not found' })
        }
        return `category with ID ${id} updated`
    }

    

    deleteCategory = async (id) => {
        await Category.destroy({
        where: {
        id: id
        }
        });
        return `category with ID ${id} deleted`
        }
   
}

const categoryDataAccessor = new CategoryDataAccessor();
module.exports = categoryDataAccessor;