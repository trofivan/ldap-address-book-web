import { connect } from 'react-redux';
import { setFilter, setVisibleUsersCount } from '../actions';
import { DisplayNames, TelephoneNumbers, IpPhones, MobilePhones, Companies, Departments, Mails, Titles,  } from '../components/Filters';
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
 * Display Names
 */
const getDisplayNames = (users, filter) =>
  filterUsers(users, filter)
    .map(item => item.displayName)
    .filter(item => item);

const mapStateToPropsUsers = ({ users, filter }) => ({
  items: removeDuplicates(getDisplayNames(users.items, filter))
});

const FilterDisplayNames = connect(
  mapStateToPropsUsers,
  mapDispatchToProps
)(DisplayNames);

/**
 * TelephoneNumbers
 */
const getTelephoneNumbers = (users, filter) =>
  filterUsers(users, filter)
    .map(item => item.telephoneNumber)
    .filter(item => item);

const mapStateToPropsTelephoneNumbers = ({ users, filter }) => ({
  items: removeDuplicates(getTelephoneNumbers(users.items, filter))
});

const FilterPhones = connect(
  mapStateToPropsTelephoneNumbers,
  mapDispatchToProps
)(TelephoneNumbers);

/**
 * IP TelephoneNumbers
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
 * Mobile TelephoneNumbers
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
  FilterDisplayNames,
  FilterPhones,
  FilterIpPhones,
  FilterMobilePhones,
  FilterMails,
  FilterTitles,
  FilterCompanies,
  FilterDepartments
};
