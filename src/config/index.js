require('dotenv').config();

export const PORT = parseInt(process.env.PORT, 10) || 3000;
export const MORGAN_CONFIG = process.env.MORGAN_CONFIG || 'common';
