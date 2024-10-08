import { dbConnect } from '../../../lib/db'; 
import Email from '../../../lib/models/emails'; 

export async function POST(request) {
  const { email } = await request.json();

  if (!email) {
    return new Response(
      JSON.stringify({ message: "Email is required" }), 
      {
        status: 400,
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  // Connect to MongoDB
  await dbConnect();

  try {
    // Check if email already exists in the database
    const existingUser = await Email.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "You have already registered" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // Create a new email record
    const newEmail = await Email.create({ email });

    // Return success response
    return new Response(
      JSON.stringify({ message: "Email successfully registered", email: newEmail }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error registering email:", error); // Log the error for debugging
    // Handle any errors during the process
    return new Response(
      JSON.stringify({ message: "Error registering email", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
