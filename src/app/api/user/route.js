

  
import dbConnect from "@/lib/dbconnect"; // MongoDB connection utility
import UserModel from "@/model/Usermodel"; // User schema/model

export default async function handler(req, res) {
  // Ensure MongoDB is connected
  await dbConnect();

  // Handle different HTTP methods
  if (req.method === "GET") {
    try {
      const users = await UserModel.find(); // Fetch all users
      return res.status(200).json(users);  // Respond with users data
    } catch (error) {
      console.error("Error fetching users:", error.message);
      return res.status(500).json({ message: "Error fetching users", error: error.message });
    }
  } else if (req.method === "POST") {
    try {
      const { name, email, password } = req.body;

      // Validate request body
      if (!name || !email || !password) {
        return res.status(400).json({ message: "Name, email, and password are required" });
      }

      // Create new user
      const newUser = new UserModel({
        name,
        email,
        password,
      });

      const savedUser = await newUser.save();
      return res.status(201).json(savedUser); // Respond with the saved user
    } catch (error) {
      console.error("Error saving user:", error.message);
      return res.status(500).json({ message: "Error saving user", error: error.message });
    }
  } else {
    // If method is not GET or POST, return 405
    return res.status(405).json({ message: "Method not allowed" });
  }
}
