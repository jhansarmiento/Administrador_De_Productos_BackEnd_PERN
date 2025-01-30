import swaggerJSDoc from 'swagger-jsdoc'
import { SwaggerUiOptions } from 'swagger-ui-express'

const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API operations related to products'
            }
        ],
        info: {
            title: 'REST API Node.js / Express / TypeScript',
            version: '1.0.0',
            description: 'API Docs for products'
        }
    },
    apis: ['./src/router.ts']
}
 
const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions : SwaggerUiOptions = {
    customCss: `
        /* Añadir texto después del logo */
        .topbar-wrapper::after {
            content: "REST API - Node.js / Express / TypeScript";
            margin-left: 20px;
            color: white; 
            font-size: 1.2em;
        }
        .swagger-ui .topbar {
            background-color: #1a1a1a; /* Color de fondo oscuro */
            padding: 10px 0;
        }
    `,
    customSiteTitle: 'Documentación De Administrador De Productos'
}

export default swaggerSpec
export {
    swaggerUiOptions
}