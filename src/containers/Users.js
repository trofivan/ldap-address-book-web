import { connect } from 'react-redux';
import Users from '../components/UsersTable/Users';

const mapStateToProps = (state) => ({
  visibleUsers: state.users.items
});

export default connect(mapStateToProps)(Users);
