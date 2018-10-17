import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@blueprintjs/core';
import { setVisibleUsersCount } from '../actions';
import filterUsers from '../libs/filterUsers';

const mapStateToProps = (state) => ({
  isShow: filterUsers(state.users.items, state.filter).length > state.users.visibleCount,
  visibleCount: state.users.visibleCount
});

const mapDispatchToProps = (dispatch) => ({
  setVisibleCount: (count) => dispatch(setVisibleUsersCount(count))
});

const ButtonMoreUsers = ({ visibleCount, setVisibleCount, isShow }) =>
  isShow ? <Button
    fill={true}
    minimal={true}
    onClick={() => setVisibleCount(2 * visibleCount)}
    large={true}
    text={`Показать ещё ${visibleCount} пользователей...`}
  /> : null;

export default connect(mapStateToProps, mapDispatchToProps)(ButtonMoreUsers);


