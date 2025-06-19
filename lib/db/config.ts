import { Pool, PoolConfig } from 'pg';

// Database configuration
const dbConfig: PoolConfig = {
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  database: process.env.POSTGRES_DB || 'dreamweaver',
  ssl: process.env.POSTGRES_SSL === 'true' ? {
    rejectUnauthorized: false
  } : undefined
};

// Create a new pool instance
const pool = new Pool(dbConfig);

// Export the pool for use in other modules
export default pool;

// Helper function to get a client from the pool
export const getClient = async () => {
  const client = await pool.connect();
  return client;
}; 