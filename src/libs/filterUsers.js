export default (users = [], filter = {}) =>
  users
    .filter(user => {
      for (const key in filter) {
        if (filter[key] !== '' && filter[key] !== user[key]) {
          return false;
        }
      }

      return true;
    });
