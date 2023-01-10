import Conversation from '../modal/Conversation.js';

export const addConversation = async (req,res) => {
    try   
    {const senderId = req.body.senderId;
       const recieverId = req.body.recieverId;

       let exist = await Conversation.findOne({members: {$all: [recieverId,senderId]}});
       if(exist){
        return res.status(200).json('conversation already exists');
       }
       const newConversation = new Conversation({
        members: [senderId,recieverId]
       });
       newConversation.save();
       return res.status(200).json('conversation succesfully created');
    }catch(error){
        return res.status(500).json('Error while adding conversation', error.message);
    }
}

export const getConversation = async (req,res) => {
    try{
        const senderId = req.body.senderId;
        const recieverId = req.body.recieverId;

        let conversation = await Conversation.findOne({members: {$all : [recieverId,senderId]}});
        return res.status(200).json(conversation);
    }
    catch(error){
        return res.status(500).json('error while getting conversation');
    }
}