import Message from '../modal/Message.js'
import Conversation from '../modal/Conversation.js';


export const newMessage = async (req,res) => {
    try{
        const newMessage = new Message(req.body);

        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId, {message: req.body.text});

        return res.status(200).json('new message has been saved');

    }
    catch(error){
        return res.status(500).json('error while adding new message');
    }
}

export const getMessage = async (request, response) => {
    try {
        const messages = await Message.find({ conversationId: request.params.id });
        response.status(200).json(messages);
    } catch (error) {
        response.status(500).json('error while getting message');
    }

}
