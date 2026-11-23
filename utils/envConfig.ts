import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
    BASE_URL: process.env.BASE_URL || '',
    USERNAME: process.env.ORANGEHRM_USERNAME || '',
    PASSWORD: process.env.ORANGEHRM_PASSWORD || ''
};

if (!ENV.BASE_URL) {
    throw new Error('BASE_URL is missing in .env file');
}