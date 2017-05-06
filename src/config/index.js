/* @flow */
require('dotenv').config();

export const APP_NAME: string = process.env.APP_NAME || '';
export const PORT: number = parseInt(process.env.PORT, 10) || 3000;
export const MORGAN_CONFIG: string = process.env.MORGAN_CONFIG || 'common';
export const LOG_LEVEL: string = process.env.LOG_LEVEL || 'debug';
