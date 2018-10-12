import Select from '../components/Select';
import React from 'react';

const mapStateToProps = ({ users }) => ({
  items: users.map(item => item.name).filter(item => item)
});

const mapDispatchToProps = () => ({
  addFilter
});

const SelectUsers = () => (
  <Select
    items={
      MOCK_USERS
        .map(item => item.name)
        .filter(item => item)
    }
    name={`Имя`}
    icon={`person`}
    onItemSelect={(item) => {
      console.log(item);
    }}
  />
);

export default SelectUsers;
