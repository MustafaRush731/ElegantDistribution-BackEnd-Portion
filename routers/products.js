var express = require('express');
const db = require('../database');
var router = express.Router();


router.get('/item/category/parentCategory/:parentCategory', async (req, res) => {
    const parentCategory = req.params.parentCategory;

    try {
        const [rows] = await db.query(
          `SELECT p.*
           FROM product p
           JOIN productCategory pc ON p.itemNumber = pc.itemNumber
           JOIN productChildCategory pcc ON pc.childCategoryID = pcc.childCategoryID
           JOIN parentProductCategory ppc ON pcc.parentCategoryID = ppc.parentCategoryID
           WHERE ppc.categoryName = ?
           LIMIT 18
           `,
          [parentCategory]
        );
        res.json(rows);
        console.log(rows);
        console.log(parentCategory);
      } catch (error) {
        console.error('Error executing SQL query:', error);
      }
});

module.exports = router;