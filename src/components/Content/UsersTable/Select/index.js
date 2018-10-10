import React from 'react';
import { Button, InputGroup, Menu, MenuItem, Popover } from '@blueprintjs/core';
import styles from './Select.module.scss';

const renderItem = (text, key) => <MenuItem key={key} text={text}/>;

const getVisibleItems = (items) => items.filter((item, i) => i < 10);
const getFilteredItems = (items, query = '') => items
  .filter(item => `${item.toLowerCase()}`.includes(query.toLowerCase()));

const PopoverContent = ({ items, query = '', onChangeFilter }) => {

  const filteredItems = getFilteredItems(items, query);
  const visibleItems = getVisibleItems(filteredItems);

  return (
    <div className={styles['popover-content']}>
      <InputGroup leftIcon="search" onChange={(e) => onChangeFilter(e.target.value)}/>
      <Menu>
        {visibleItems.map(renderItem)}
        {visibleItems.length < items.length ?
          <MenuItem disabled={true} text={`и ещё ${items.length - visibleItems.length}...`}/> : ''}
      </Menu>
    </div>
  );
};

export default class Select extends React.Component {
  state = {
    items: this.props.items,
    query: ''
  };

  handleChangeFilter = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <Popover targetClassName={styles['popover-target']}>
        <Button icon={this.props.icon} text={this.props.name} fill={true} rightIcon="chevron-down"/>
        <PopoverContent items={this.state.items} query={this.state.query} onChangeFilter={this.handleChangeFilter}/>
      </Popover>
    );
  }
}
