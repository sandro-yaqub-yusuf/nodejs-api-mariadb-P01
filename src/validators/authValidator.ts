import { checkSchema } from 'express-validator';

export const login = checkSchema({
    email: {
        isEmail: true,
        errorMessage: 'O E-mail é inválido !'
    },
    password: {
        isLength: {
            options: { min: 6, max: 30 }
        },
        errorMessage: 'A Senha precisa ter pelo menos 6 caracteres e no máximo 30 caracteres !'
    }
});

export const register = checkSchema({
    name: {
        trim: true,
        isLength: {
            options: { min: 2, max: 100 }
        },
        errorMessage: 'O Nome precisa ter pelo menos 2 caracteres e no máximo 100 caracteres !'
    },
    email: {
        isEmail: true,
        errorMessage: 'O E-mail é inválido !'
    },
    roleTypeId: {
        in: 'body',
        isIn: { options: [[1, 2, 3]] },
        isInt: true,
        toInt: true,
        errorMessage: 'O Tipo de Usuário precisa ser 1, 2 ou 3 !'
    },
    password: {
        isLength: {
            options: { min: 6, max: 30 }
        },
        errorMessage: 'A Senha precisa ter pelo menos 6 caracteres e no máximo 30 caracteres !'
    },
    passwordConfirm: {
        custom: {
            options: (value: string, { req }) => (value === req.body.password)
        },
        errorMessage: 'A Senha de confirmação precisa igual a Senha digitada !'
    },
    terms: {
        in: 'body',
        isIn: { options: [[0, 1]] },
        isInt: true,
        toInt: true,
        errorMessage: 'O Termo precisar ser 0 ou 1 !'
    }
});
