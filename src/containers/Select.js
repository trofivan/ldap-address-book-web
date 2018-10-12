import React from 'react';
import { connect } from 'react-redux';
import { actionSetFilter } from '../actions';
import Select from '../components/Select';

const removeDuplicates = (items = []) => [...new Set(items)];
const mapDispatchToProps = (dispatch) => ({
  setFilter: (filterKey, filterValue) => dispatch(actionSetFilter({ [filterKey]: filterValue }))
});

/**
 * Names
 */
const getUserNames = users => users.map(item => item.name).filter(item => item);

const mapStateToPropsUsers = ({ users }) => ({
  items: removeDuplicates(getUserNames(users))
});

const Users = ({ items, setFilter }) => (
  <Select
    items={items}
    name={`Имя`}
    icon={`person`}
    onItemSelect={(item) => setFilter('name', item)}
  />
);

export const SelectUser = connect(
  mapStateToPropsUsers,
  mapDispatchToProps
)(Users);

/**
 * E-Mails
 */
const getMails = users => users.map((item) => item.mail).filter(item => item);

const mapStateToPropsMail = ({ users }) => ({
  items: removeDuplicates(getMails(users))
});

const Mails = ({ items, setFilter }) => (
  <Select
    items={items}
    name={`e-mail`}
    icon={`envelope`}
    onItemSelect={(item) => setFilter('mail', item)}
  />
);

export const SelectMail = connect(
  mapStateToPropsMail,
  mapDispatchToProps
)(Mails);

/**
 * Phones
 */
const getPhones = (users) => users
  .reduce((acc, u) => [...acc, u.phone, u.ipPhone, u.mobile], [])
  .filter(item => item);

const mapStateToPropsPhones = ({ users }) => ({
  items: removeDuplicates(getPhones(users))
});

const Phones = ({ items, setFilter }) => (
  <Select
    items={items}
    name="Телефон"
    icon="phone"
    onItemSelect={(item) => setFilter('phone', item)}
  />
);

export const SelectPhones = connect(
  mapStateToPropsPhones,
  mapDispatchToProps
)(Phones);

/**
 * Titles
 */
const getTitles = (users) => users.map(item => item.title).filter(item => item);

const mapStateToPropsTitles = ({ users }) => ({
  items: removeDuplicates(getTitles(users))
});

const Titles = ({ items, setFilter }) => (
  <Select
    items={items}
    name="Должность"
    icon="id-number"
    onItemSelect={(item) => setFilter('title', item)}
  />
);

export const SelectTitle = connect(
  mapStateToPropsTitles,
  mapDispatchToProps
)(Titles);

/**
 * Companies
 */
const getCompanies = (users) => users.map(item => item.company).filter(item => item);

const mapStateToPropsCompanies = ({ users }) => ({
  items: removeDuplicates(getCompanies(users))
});

const Companies = ({ items, setFilter }) => (
  <Select
    items={items}
    name="Компания"
    icon="office"
    onItemSelect={(item) => setFilter('company', item)}
  />
);

export const SelectCompany = connect(
  mapStateToPropsCompanies,
  mapDispatchToProps
)(Companies);


/**
 * Departments
 */
const getDepartments = (users) => users.map(item => item.department).filter(item => item);

const mapStateToPropsDepartments = ({ users }) => ({
  items: removeDuplicates(getDepartments(users))
});

const Departments = ({ items, setFilter }) => (
  <Select
    items={items}
    name="Отдел"
    icon="diagram-tree"
    onItemSelect={(item) => setFilter('department', item)}
  />
);

export const SelectDepartment = connect(
  mapStateToPropsDepartments,
  mapDispatchToProps
)(Departments);
