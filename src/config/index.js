require('dotenv').config();

export const APP_NAME = process.env.APP_NAME;
export const PORT = parseInt(process.env.PORT, 10) || 3000;
export const MORGAN_CONFIG = process.env.MORGAN_CONFIG || 'common';
export const LOG_LEVEL = process.env.LOG_LEVEL || 'debug';
