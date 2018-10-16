// TODO: mock data
import getUsers from './asyncGetUsers';

const users = getUsers().then(result => result);
console.log(users);
