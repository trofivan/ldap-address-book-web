import { connect } from 'react-redux';

import Users from '../components/UsersTable/Users';
import filterUsers from '../libs/filterUsers';
import { setVisibleUsersCount } from '../actions';

const mapStateToProps = (state) => ({
  visibleUsers: filterUsers(state.users.items, state.filter),
  visibleCount: state.users.visibleCount
});

const mapDispatchToProps = (dispatch) => ({
  setVisibleItems: (count) => dispatch(setVisibleUsersCount(count))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
