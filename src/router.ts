import { Router } from 'express'
import { body, param } from 'express-validator'
import { createProduct, deleteProduct, getProductById, getProducts, updateAvailability, updateProduct } from './handlers/product'
import { handleInputErrors } from './middleware'

const router = Router()
/** 
 * @swagger
 * components:
 *      schemas:
 *          Product:
 *              type: object
 *              properties: 
 *                  id:
 *                      type: integer
 *                      description: The Product ID
 *                      example: 1
 *                  name:
 *                      type: string
 *                      description: The Product Name
 *                      exmple: Ultrawide Monitor 34 inch
 *                  price:
 *                      type: integer
 *                      description: The Product Price
 *                      example: 300
 *                  availability:
 *                      type: boolean
 *                      description: The Product Availability
 *                      example: true
*/


// Routing - Crea el servidor
router.get('/', getProducts)

router.get('/:id', 
    param('id').isInt().withMessage('Not Valid ID'),
    handleInputErrors,
    getProductById
)

router.post('/', 
    //Validación
    body('name')
        .notEmpty().withMessage('Name is mandatory'),
    body('price')
        .isNumeric().withMessage("The value is not a number")
        .notEmpty().withMessage('Price is mandatory')
        .custom(value => value > 0).withMessage('Not valid value'),
    handleInputErrors,
    createProduct)

router.put('/:id', 
    param('id').isInt().withMessage('Not Valid ID'),
    body('name')
        .notEmpty().withMessage('Name is mandatory'),
    body('price')
        .isNumeric().withMessage("The value is not a number")
        .notEmpty().withMessage('Price is mandatory')
        .custom(value => value > 0).withMessage('Not valid value'),
    body('availability')
        .isBoolean().withMessage('Not valid value'),
    handleInputErrors,
    updateProduct
)

router.patch('/:id', 
    param('id').isInt().withMessage('Not Valid ID'),
    handleInputErrors,
    updateAvailability
)

router.delete('/:id', 
    param('id').isInt().withMessage('Not Valid ID'),
    handleInputErrors,
    deleteProduct
)

export default router