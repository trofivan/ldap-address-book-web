// TODO: mock data
import USERS from './MOCK_USERS_2500';

export default new Promise((resolve, reject) => {
  setTimeout(() => resolve(USERS), 1000);
});
