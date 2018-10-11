import * as React from 'react';
import { Button, InputGroup, Menu, MenuItem, Popover } from '@blueprintjs/core';
import styles from './Select.module.scss';

const PopoverButton = ({ icon, name, selected: text }) => (
  <Button
    icon={icon}
    fill={true}
    text={text ? text : name}
    rightIcon="chevron-down"
  />
);

const Item = (item, key) => <MenuItem key={key} text={item}/>;

class PopoverContent extends React.Component {
  state = { query: '' };

  handleChangeQuery = (query) => {
    this.setState({ query });
  };

  getFilteredItems = () =>
    this.props.items
      .filter(item => `${item}`.toLowerCase().includes(this.state.query.toLowerCase()));

  getVisibleItems = (items) => items.slice(0, 10);

  render() {
    const filteredItems = this.getFilteredItems();
    const visibleItems = this.getVisibleItems(filteredItems);

    return (
      <div className={styles['popover-content']}>
        <InputGroup
          placeholder="Фильтр..."
          leftIcon="search"
          onChange={(e) => this.handleChangeQuery(e.target.value)}
        />
        <Menu>
          {visibleItems.length === 0 ? <MenuItem disabled={true} text={`Ничего не найдено`}/> : ''}
          {visibleItems.map(Item)}
          {visibleItems < filteredItems ?
            <MenuItem disabled={true} text={`и ещё ${filteredItems.length - visibleItems.length}...`}/> : ''}
        </Menu>
      </div>
    );
  }
}

export default class Select extends React.Component {
  state = { selected: '' };

  render() {
    return (
      <Popover targetClassName={styles['popover-target']}>
        <PopoverButton {...this.props}/>
        <PopoverContent {...this.props}/>
      </Popover>
    );
  }
}
