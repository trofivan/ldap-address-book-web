import { connect } from 'react-redux';

import Users from '../components/UsersTable/Users';
import filterUsers from '../libs/filterUsers';

const mapStateToProps = (state) => ({
  visibleUsers: filterUsers(state.users.items, state.filter),
  visibleCount: state.users.visibleCount
});

export default connect(mapStateToProps)(Users);
