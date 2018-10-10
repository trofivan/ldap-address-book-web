import React from 'react';
import { Button, InputGroup, Menu, MenuItem, Popover } from '@blueprintjs/core';
import styles from './Select.module.scss';

const getVisibleItems = (items) => items.filter((item, i) => i < 10);
const getFilteredItems = (items, query = '') => items
  .filter(item => `${item}`.toLowerCase().includes(query.toLowerCase()));
const getUniqItems = (items = []) => [...new Set(items)];
const getNotEmptyItems = (items = []) => items.filter(item => item);

const PopoverContent = ({ items, query = '', onChangeFilter, onItemSelect }) => {
  const notEmptyItems = getNotEmptyItems(items).sort();
  const filteredItems = getFilteredItems(notEmptyItems, query);
  const uniqItems = getUniqItems(filteredItems);
  const visibleItems = getVisibleItems(uniqItems);

  return (
    <div className={styles['popover-content']}>
      <InputGroup placeholder="Фильтр..." leftIcon="search" onChange={(e) => onChangeFilter(e.target.value)}/>
      <Menu>
        {visibleItems.map((text, key) =>
          <MenuItem
            key={key}
            text={text}
            onClick={() => {
              onItemSelect(text);
            }}
          />)}

        {visibleItems.length < uniqItems.length ?
          <MenuItem disabled={true} text={`и ещё ${uniqItems.length - visibleItems.length}...`}/> : ''}

        {visibleItems.length === 0 ? <MenuItem disabled={true} text="Ничего не найдено"/> : ''}
      </Menu>
    </div>
  );
};

export default class Select extends React.Component {
  state = {
    items: this.props.items,
    itemSelect: this.props.itemSelect,
    query: ''
  };

  handleChangeFilter = (query) => {
    this.setState({ query });
  };

  handleSelectItem = (itemSelect) => {
    this.setState({ itemSelect }, () => {
      this.props.onItemSelect(itemSelect);
    });
  };

  render() {
    return (
      <Popover targetClassName={styles['popover-target']}>
        <Button
          icon={this.props.icon}
          text={this.state.itemSelect ? this.state.itemSelect : this.props.name}
          fill={true}
          rightIcon="chevron-down"
        />
        <PopoverContent
          items={this.state.items}
          query={this.state.query}
          onChangeFilter={this.handleChangeFilter}
          onItemSelect={this.handleSelectItem}
        />
      </Popover>
    );
  }
}
