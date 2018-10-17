import { connect } from 'react-redux';
import React from 'react';
import { Button } from '@blueprintjs/core';
import { fetchUsers } from '../actions';

// TODO: remove it component and add automatically data fetching
export default connect(
  (state) => ({}),
  (dispatch) => ({
    fetchUsers: (url) => dispatch(fetchUsers(url))
  })
)(({ fetchUsers }) => <Button text={`FetchUsers`} onClick={() => fetchUsers('http://localhost:4000/users')}/>);
