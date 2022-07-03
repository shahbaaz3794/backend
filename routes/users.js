import express, { request } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
let userList = []

router.get('/', (request, response)=> {
  response.send('Hello');
})

router.post('/add-user', (request, response)=> {
  const data = request.body;
  userList.push({...data, id: uuidv4()})
  response.send(`${data.name} added successfully`);
});

router.patch('/:id', (request, response) => {
  const { id } = request.params;
  const { name, age } = request.body;

  let user = userList.find((usr)=> usr.id === id);
  if(name) user.name = name;
  if(age) user.name = age;

  response.send(`user update`);
})

router.delete('/:id', (request, response) => {
  const { id } = request.params;
  userList = userList.filter((user)=> user.id !== id);
  response.send(`user deleted`);
})

export default router;