import pool from "@/lib/db";

export async function getUserByUserId(userId: number) {
  const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
    userId,
  ]);

  return user.rows[0];
}

export async function createUser(
  userId: string,
  userName: string,
  email: string,
  password: string
) {
  const registrationResult = await pool.query(
    "INSERT INTO users(user_id, user_name, email, image, password) VALUES ($1, $2, $3, $4, $5) RETURNING id",
    [userId, userName, email, "", password]
  );
  return registrationResult.rows[0].id;
}
