import mongoose  from 'mongoose';
import PostMessage from '../models/postMessage.js';

//////////////Getting Posts From DataBase///////////////

export const getPosts = async (req, res) => {
    try {

        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

////////////////////Creating Post/////////////////////////

export const createPost = async (req, res) => {

    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message });

    }
}
////////////////////Updating Post/////////////////////////

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('no post available with that Id');
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    res.json(updatedPost);

}

////////////////////Deleting Post/////////////////////////

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('no post available with that Id');
    await PostMessage.findByIdAndDelete(id);
    res.json('post deleted successfully');
}

//////////////////// Post Like /////////////////////////

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("no post available with that Id");
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount : post.likeCount + 1 }, { new: true });
    res.json(updatedPost);
}