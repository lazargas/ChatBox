import express from 'express'
import { addUser, getUser } from '../controller/user-controller.js';
import { addConversation,getConversation } from '../controller/conversation-controller.js';
import {getMessage, newMessage} from '../controller/message-controller.js'

const Route = express.Router();

Route.post('/add',addUser);
Route.get('/users',getUser);

Route.post('/conversation/add', addConversation);
Route.post('/conversation/get', getConversation);

Route.post('/message/add', newMessage);
Route.get('/message/get/:id', getMessage);

export default Route

