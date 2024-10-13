"use server";
import pool from "../lib/db";
export default async function getRecentPosts() {
  let connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(`
    SELECT *
    FROM posts
    ORDER BY date_created_in DESC
    LIMIT 3
  `);
    return rows;
  } catch (error) {
    console.log(error);
  } finally {
    if (connection) {
      connection.release();
    }
  }
}
