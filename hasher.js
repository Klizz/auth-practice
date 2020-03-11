import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'

const SALT_ROUNDS = 12;
const TOKEN_EXPIRATION = 60;
const { TOKEN_SECRET } = process.env;

export const matchHash = (plain, hashed) => bcrypt
.compareSync(plain, hased);

export const createToken = payload => jwt.sign
(payload, TOKEN_SECRET, {
    expiresIn: TOKEN_EXPIRATION
});