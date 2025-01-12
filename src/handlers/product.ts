import { Request, Response } from 'express'
import { check, validationResult } from 'express-validator'
import Product from '../models/Product.models'

export const CreateProduct = async (req : Request, res : Response) => {

    //Validación
    await check('name').notEmpty().withMessage('Name is mandatory').run(req)
    await check('price')
        .isNumeric().withMessage("The value is not a number")
        .notEmpty().withMessage('Price is mandatory')
        .custom(value => value > 0).withMessage('Not valid value')
        .run(req)

    let errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const product = await Product.create(req.body)
    res.json({data: product})
}