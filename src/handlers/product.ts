import { Request, Response } from 'express'
import Product from '../models/Product.models'

export const CreateProduct = async (req : Request, res : Response) => {

    const product = new Product(req.body)
    
    const SavedProduct = await product.save()

    res.json({data: SavedProduct})
}