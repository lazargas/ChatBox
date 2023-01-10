import User from "../modal/User.js";

export const addUser = async (request, response) => {
    try {
        let exist = await User.findOne({ sub: request.body.sub });

        if(exist) {
            response.status(200).json('user already exists');
            return;
        }

        const newUser = new User(request.body);
        await newUser.save();
        return response.status(200).json(newUser);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getUser = async (req,res) => {
    try{
        const users = await User.find({});
        return res.status(200).json(users);
    }
    catch(error){
        return res.status(500).json(error.message);
    }
}