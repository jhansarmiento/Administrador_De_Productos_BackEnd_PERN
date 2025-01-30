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

/**
 * @swagger
 * /api/products:
*       get:
*           summary: Get the list of products
*           tags:
*               - Products
*           description: Returns the list of products
*           responses:
*               200:
*                   description: Successful response
*                   content:
*                       application/json:
*                           schema: 
*                               type: array
*                               items:
*                                   $ref: '#/components/schemas/Product'
 */

// Routing - Crea el servidor
router.get('/', getProducts)

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *      summary: Get a product by ID
 *      tags:
 *          - Products
 *      description: Returns a product based on its unique ID
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema: 
 *              type: integer
 *      responses: 
 *          200:
 *              description: Successful response
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/Product'
 *          400:
 *              description: Bad Request - Not Valid ID
 *          404:
 *              description: Not Found
 */
router.get('/:id', 
    param('id').isInt().withMessage('Not Valid ID'),
    handleInputErrors,
    getProductById
)

/**
 * @swagger
 * /api/products:
 *  post:
 *      summary: Creates a new product
 *      tags:
 *          - Products
 *      description: Returns a new record in the database
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: "Ultrawide Monitor 34 inch"
 *                          price:
 *                              type: integer
 *                              example: 199
 *      responses:
 *          201:
 *              description: Product Created Successfully
 *          400: 
 *              description: Bad request - Invalid Input Data
 */ 

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