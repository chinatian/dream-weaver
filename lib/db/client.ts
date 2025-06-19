import { Pool, QueryResult, QueryResultRow } from 'pg';
import pool from './config';

export class DatabaseClient {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  /**
   * Execute a query with parameters
   */
  async query<T extends QueryResultRow>(text: string, params?: any[]): Promise<QueryResult<T>> {
    const start = Date.now();
    try {
      const result = await this.pool.query<T>(text, params);
      const duration = Date.now() - start;
      console.log('Executed query', { text, duration, rows: result.rowCount });
      return result;
    } catch (error) {
      console.error('Database query error:', error);
      throw error;
    }
  }

  /**
   * Execute a single-row query
   */
  async queryOne<T extends QueryResultRow>(text: string, params?: any[]): Promise<T | null> {
    const result = await this.query<T>(text, params);
    return result.rows[0] || null;
  }

  /**
   * Execute a multi-row query
   */
  async queryMany<T extends QueryResultRow>(text: string, params?: any[]): Promise<T[]> {
    const result = await this.query<T>(text, params);
    return result.rows;
  }

  /**
   * Begin a transaction
   */
  async beginTransaction() {
    const client = await this.pool.connect();
    try {
      await client.query('BEGIN');
      return client;
    } catch (error) {
      client.release();
      throw error;
    }
  }

  /**
   * Commit a transaction
   */
  async commitTransaction(client: any) {
    try {
      await client.query('COMMIT');
    } finally {
      client.release();
    }
  }

  /**
   * Rollback a transaction
   */
  async rollbackTransaction(client: any) {
    try {
      await client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }
}

// Export a singleton instance
export const dbClient = new DatabaseClient(); 