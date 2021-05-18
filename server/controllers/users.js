import User from "../models/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signin = async (req, res) => {

    const { email, password } = req.body;
    
    try {
        const existingUser = await User.findOne({email})
        if (!existingUser)
            return res.status(404).json({ message: "user does not exist.!" })

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordCorrect)
            return res.status(400).json({ message: "invalid credentials" })

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'tst', { expiresIn:"1h" })
        res.status(200).json({ result: existingUser, token })
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const signup = async (req, res) => {

    const { firstName, lastName, email, password, passwordConfirmation } = req.body;
    
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser)
            return res.status(400).json({ message: "user already exists.!" })
        
        if (password ===! passwordConfirmation)
            return res.status(400).json({ message: "Passwords don't match!" })
        
        const hashedPassword = bcrypt.hash(password, 12)
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` })
        
        const token = jwt.sign({ email: result.email, id: result._id }, 'tst', { expiresIn: "1h" })
        res.status(200).json({ result, token });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}