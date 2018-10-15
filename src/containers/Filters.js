import { connect } from 'react-redux';
import { actionSetFilter } from '../actions';
import { Phones, Companies, Departments, Mails, Titles, Users } from '../components/Filters';
import filterUsers from '../libs/filterUsers';

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
const getUserNames = (users, filter) =>
  filterUsers(users, filter)
    .map(item => item.name)
    .filter(item => item);

const mapStateToPropsUsers = ({ users, filter }) => ({
  items: removeDuplicates(getUserNames(users.items, filter))
});

const FilterUsers = connect(
  mapStateToPropsUsers,
  mapDispatchToProps
)(Users);

/**
 * E-Mails
 */
const getMails = (users, filter) =>
  filterUsers(users, filter)
    .map((item) => item.mail)
    .filter(item => item);

const mapStateToPropsMail = ({ users, filter }) => ({
  items: removeDuplicates(getMails(users.items, filter))
});

const FilterMails = connect(
  mapStateToPropsMail,
  mapDispatchToProps
)(Mails);

/**
 * Phones
 */
const getPhones = (users, filter) =>
  filterUsers(users, filter)
    .reduce((acc, u) => [...acc, u.phone, u.ipPhone, u.mobile], [])
    .filter(item => item);

const mapStateToPropsPhones = ({ users, filter }) => ({
  items: removeDuplicates(getPhones(users.items, filter))
});

const FilterPhones = connect(
  mapStateToPropsPhones,
  mapDispatchToProps
)(Phones);

/**
 * Titles
 */
const getTitles = (users, filter) =>
  filterUsers(users, filter)
    .map(item => item.title)
    .filter(item => item);

const mapStateToPropsTitles = ({ users, filter }) => ({
  items: removeDuplicates(getTitles(users.items, filter))
});

const FilterTitles = connect(
  mapStateToPropsTitles,
  mapDispatchToProps
)(Titles);

/**
 * Companies
 */
const getCompanies = (users, filter) =>
  filterUsers(users, filter)
    .map(item => item.company)
    .filter(item => item);

const mapStateToPropsCompanies = ({ users, filter }) => ({
  items: removeDuplicates(getCompanies(users.items, filter))
});

const FilterCompanies = connect(
  mapStateToPropsCompanies,
  mapDispatchToProps
)(Companies);

/**
 * Departments
 */
const getDepartments = (users, filter) =>
  filterUsers(users, filter)
    .map(item => item.department)
    .filter(item => item);

const mapStateToPropsDepartments = ({ users, filter }) => ({
  items: removeDuplicates(getDepartments(users.items, filter))
});

const FilterDepartments = connect(
  mapStateToPropsDepartments,
  mapDispatchToProps
)(Departments);

/**
 * Export HOCs
 */
export { FilterUsers, FilterPhones, FilterMails, FilterTitles, FilterCompanies, FilterDepartments };
