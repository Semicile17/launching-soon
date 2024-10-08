import { promisify } from "util";
import db from "../../../lib/db";

// Promisify the db.run method
const runQuery = promisify(db.run).bind(db);
const getQuery = promisify(db.get).bind(db); // Promisifying db.get for fetching a single row

export async function POST(request) {
  const { email } = await request.json(); // Accessing the body of the request

  try {
    // Check if the email already exists
    const checkEmail = await getQuery("SELECT email FROM users WHERE email = ?", [email]);

    if (checkEmail) {
      return new Response(
        JSON.stringify({ message: "You have already registered" }),
        { status: 409, headers: { "Content-Type": "application/json" } } // Conflict status
      );
    }

    // Insert the email into the users table
    const id = await runQuery("INSERT INTO users (email) VALUES (?)", [email]);

    return new Response(JSON.stringify({ message: "Email saved", id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return new Response(JSON.stringify({ message: "Error saving email" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
