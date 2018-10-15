import { connect } from 'react-redux';

import Users from '../components/UsersTable/Users';
import filterUsers from '../libs/filterUsers';


// TODO: hardcode count users per page
const getVisibleUsers = (...args) => filterUsers(...args).slice(0, 50);

const mapStateToProps = (state) => ({
  visibleUsers: getVisibleUsers(state.users.items, state.filter)
});

export default connect(mapStateToProps)(Users);
