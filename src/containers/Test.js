import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@blueprintjs/core';
import { actionTest } from '../actions';

const Btn = ({ onClick }) => <Button text={'Click Btn!'} onClick={onClick}/>;

const mapStateToProps = (state) => ({
  test: state.test
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    console.log('123');
    return dispatch(actionTest('new data!'));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Btn);
