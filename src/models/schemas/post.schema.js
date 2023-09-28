import { body } from "express-validator";

export const createPostSchema = [
    body('title')
        .isString().withMessage('Debe ser una cadena de caracteres.')
        .notEmpty().withMessage('No debe estar vacio.'),
    body('content')
        .isString().withMessage('Debe ser una cadena de caracteres.')
        .notEmpty().withMessage('No debe estar vacio.'),
    body('linkUrl')
        .isURL().withMessage('Ingrese una url valida')
        .notEmpty().withMessage('No debe estar vacio.'),
]

export const editPostSchema = [
    body('title')
        .optional()
        .isString().withMessage('Debe ser una cadena de caracteres.')
        .notEmpty().withMessage('No debe estar vacio.'),
    body('content')
        .optional()
        .isString().withMessage('Debe ser una cadena de caracteres.')
        .notEmpty().withMessage('No debe estar vacio.'),
    body('linkUrl')
        .optional()
        .isURL().withMessage('Ingrese una URL valida.')
        .notEmpty().withMessage('No debe estar vacio.'),
]