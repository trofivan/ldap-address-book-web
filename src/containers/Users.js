import { connect } from 'react-redux';
import Users from '../components/UsersTable/Users';

const getVisibleUsers = (users = [], filter = {}) => {
  const filterEntries = Object.entries(filter).filter(elem => elem[1] !== '');

  if (filterEntries.length === 0) {
    // TODO: hardcode - limit on page
    return users//.slice(0, 50);
  }

  const filteredUsers = users.filter(user => {
    const isVisible = filterEntries.reduce((acc, item) => {
      if (acc)
        return acc;

      const filterKey = item[0];
      const filterVal = item[1];

      if (user[filterKey] === filterVal) {
        return true;
      }

      return false;
    }, false);

    return isVisible;
  });
  // TODO: hardcode - limit on page
  return filteredUsers//.slice(0, 50);
};

const mapStateToProps = (state) => ({
  visibleUsers: getVisibleUsers(state.users.items, state.filter)
});

export default connect(mapStateToProps)(Users);
