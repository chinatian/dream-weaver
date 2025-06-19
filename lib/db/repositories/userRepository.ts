import { dbClient } from '../client';

export interface User {
  id: number;
  email: string;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export class UserRepository {
  /**
   * Find a user by ID
   */
  async findById(id: number): Promise<User | null> {
    return await dbClient.queryOne<User>(
      'SELECT * FROM users WHERE id = $1',
      [id]
    );
  }

  /**
   * Find a user by email
   */
  async findByEmail(email: string): Promise<User | null> {
    return await dbClient.queryOne<User>(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
  }

  /**
   * Create a new user
   */
  async create(user: Omit<User, 'id' | 'created_at' | 'updated_at'>): Promise<User> {
    const result = await dbClient.queryOne<User>(
      `INSERT INTO users (email, name, created_at, updated_at)
       VALUES ($1, $2, NOW(), NOW())
       RETURNING *`,
      [user.email, user.name]
    );
    
    if (!result) {
      throw new Error('Failed to create user');
    }
    
    return result;
  }

  /**
   * Update a user
   */
  async update(id: number, data: Partial<Omit<User, 'id' | 'created_at' | 'updated_at'>>): Promise<User | null> {
    const setClause = Object.keys(data)
      .map((key, index) => `${key} = $${index + 2}`)
      .join(', ');

    const values = Object.values(data);

    return await dbClient.queryOne<User>(
      `UPDATE users 
       SET ${setClause}, updated_at = NOW()
       WHERE id = $1
       RETURNING *`,
      [id, ...values]
    );
  }

  /**
   * Delete a user
   */
  async delete(id: number): Promise<boolean> {
    const result = await dbClient.query<User>(
      'DELETE FROM users WHERE id = $1',
      [id]
    );
    return result?.rowCount ? result.rowCount > 0 : false;
  }

  /**
   * List all users with pagination
   */
  async list(page: number = 1, limit: number = 10): Promise<{ users: User[]; total: number }> {
    const offset = (page - 1) * limit;

    const [users, countResult] = await Promise.all([
      dbClient.queryMany<User>(
        'SELECT * FROM users ORDER BY created_at DESC LIMIT $1 OFFSET $2',
        [limit, offset]
      ),
      dbClient.queryOne<{ count: string }>(
        'SELECT COUNT(*) as count FROM users'
      )
    ]);

    return {
      users,
      total: parseInt(countResult?.count || '0')
    };
  }
} 