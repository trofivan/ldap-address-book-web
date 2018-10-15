import React from 'react';
import { connect } from 'react-redux';
import { actionSetFilter } from '../actions';
import { Phones, Companies, Departments, Mails, Titles, Users } from '../components/Selectors';

/**
 * Reusable functions
 */
const removeDuplicates = (items = []) => [...new Set(items)];
const mapDispatchToProps = (dispatch) => ({
  setFilter: (filterKey, filterValue) => dispatch(actionSetFilter({ [filterKey]: filterValue }))
});

/**
 * Names
 */
const getUserNames = users => users.map(item => item.name).filter(item => item);

const mapStateToPropsUsers = ({ users }) => ({
  items: removeDuplicates(getUserNames(users.items))
});

const SelectUser = connect(
  mapStateToPropsUsers,
  mapDispatchToProps
)(Users);

/**
 * E-Mails
 */
const getMails = users => users.map((item) => item.mail).filter(item => item);

const mapStateToPropsMail = ({ users }) => ({
  items: removeDuplicates(getMails(users.items))
});

const SelectMail = connect(
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
  items: removeDuplicates(getPhones(users.items))
});

const SelectPhones = connect(
  mapStateToPropsPhones,
  mapDispatchToProps
)(Phones);

/**
 * Titles
 */
const getTitles = (users) => users.map(item => item.title).filter(item => item);

const mapStateToPropsTitles = ({ users }) => ({
  items: removeDuplicates(getTitles(users.items))
});

const SelectTitle = connect(
  mapStateToPropsTitles,
  mapDispatchToProps
)(Titles);

/**
 * Companies
 */
const getCompanies = (users) => users.map(item => item.company).filter(item => item);

const mapStateToPropsCompanies = ({ users }) => ({
  items: removeDuplicates(getCompanies(users.items))
});

const SelectCompany = connect(
  mapStateToPropsCompanies,
  mapDispatchToProps
)(Companies);

/**
 * Departments
 */
const getDepartments = (users) => users.map(item => item.department).filter(item => item);

const mapStateToPropsDepartments = ({ users }) => ({
  items: removeDuplicates(getDepartments(users.items))
});

const SelectDepartment = connect(
  mapStateToPropsDepartments,
  mapDispatchToProps
)(Departments);

/**
 * Export HOCs
 */
export { SelectUser, SelectPhones, SelectMail, SelectTitle, SelectCompany, SelectDepartment };
