import PostMessage from "../models/postMessage.js";
export const getPost = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).json({ postMessage });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
export const createPost = (req, res) => {
  res.send("post creation");
};
