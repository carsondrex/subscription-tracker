import jwt from 'jsonwebtoken';

import { JWT_SECRET } from "../config/env.js";
import User from '../models/user.model.js';

// someone makes request to get user details -> authorize middleware -> if valid -> next -> get user details

// finds user based off token of the user trying to make request. tries to find it, decodes it, verifies that is the user that is logged in.
// attaches user to the request
const authorize = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) return res.status(401).json({ message: 'Unauthorized' });

        const decoded = jwt.verify(token, JWT_SECRET);

        const user = await User.findById(decoded.userId);

        if (!user) return res.status(401).json({ message: 'Unauthorized' });

        req.user = user;

        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized', error: error.message });
    }
}

export default authorize;