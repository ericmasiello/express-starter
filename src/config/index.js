require('dotenv').config();

// eslint-disable-next-line import/prefer-default-export
export const PORT = parseInt(process.env.PORT, 10) || 3000;
