"use server";
import pool from "../lib/db";

async function fetchAllPosts() {
  let connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(
      "SELECT * FROM posts ORDER BY date_created_in DESC"
    );
    return rows;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  } finally {
    connection.release();
  }
}
export default fetchAllPosts;
