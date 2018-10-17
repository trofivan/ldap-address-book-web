import { connect } from 'react-redux';
import { setFilter, setVisibleUsersCount } from '../actions';
import { Phones, IpPhones, MobilePhones, Companies, Departments, Mails, Titles, Users } from '../components/Filters';
import filterUsers from '../libs/filterUsers';

/**
 * Reusable functions
 */
const removeDuplicates = (items = []) => [...new Set(items)];
const mapDispatchToProps = (dispatch) => ({
  setFilter: (filterKey, filterValue) => {
    // TODO: Hardcode default list length value
    dispatch(setVisibleUsersCount(30));
    dispatch(setFilter({ [filterKey]: filterValue }));
  }
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
 * Phones
 */
const getPhones = (users, filter) =>
  filterUsers(users, filter)
    .map(item => item.phone)
    .filter(item => item);

const mapStateToPropsPhones = ({ users, filter }) => ({
  items: removeDuplicates(getPhones(users.items, filter))
});

const FilterPhones = connect(
  mapStateToPropsPhones,
  mapDispatchToProps
)(Phones);

/**
 * IP Phones
 */
const getIpPhones = (users, filter) =>
  filterUsers(users, filter)
    .map(item => item.ipPhone)
    .filter(item => item);

const mapStateToPropsIpPhones = ({ users, filter }) => ({
  items: removeDuplicates(getIpPhones(users.items, filter))
});

const FilterIpPhones = connect(
  mapStateToPropsIpPhones,
  mapDispatchToProps
)(IpPhones);

/**
 * Mobile Phones
 */
const getMobilePhones = (users, filter) =>
  filterUsers(users, filter)
    .map(item => item.mobile)
    .filter(item => item);

const mapStateToPropsMobilePhones = ({ users, filter }) => ({
  items: removeDuplicates(getMobilePhones(users.items, filter))
});

const FilterMobilePhones = connect(
  mapStateToPropsMobilePhones,
  mapDispatchToProps
)(MobilePhones);

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
export {
  FilterUsers,
  FilterPhones,
  FilterIpPhones,
  FilterMobilePhones,
  FilterMails,
  FilterTitles,
  FilterCompanies,
  FilterDepartments
};
