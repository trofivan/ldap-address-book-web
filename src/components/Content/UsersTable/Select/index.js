import * as React from 'react';
import { Button, InputGroup, Menu, MenuItem, Popover } from '@blueprintjs/core';
import styles from './Select.module.scss';

const PopoverButton = ({ icon, name }) =>
  <Button minimal={true} text={name} icon={icon} fill={true} rightIcon="chevron-down"/>;

class PopoverContent extends React.Component {
  state = { query: '' };

  handleChangeQuery = (query) => {
    this.setState({ query });
  };

  getFilteredItems = () =>
    this.props.items
      .filter(item => `${item}`.toLowerCase().includes(this.state.query.toLowerCase()));

  getVisibleItems = (items) => items.slice(0, 12);

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
          {visibleItems.map((item, key) => <MenuItem
            key={key}
            text={item}
            onClick={() => this.props.onItemClick(item)}/>)
          }
          {visibleItems < filteredItems ?
            <MenuItem disabled={true} text={`и ещё ${filteredItems.length - visibleItems.length}...`}/> : ''}
        </Menu>
      </div>
    );
  }
}

export default class Select extends React.Component {
  state = { selected: '' };

  handleItemSelect = (item) => {
    this.setState({
      selected: item
    }, () => {
      this.props.onItemSelect(item);
    });
  };

  render() {
    return (
      <>
        {
          this.state.selected ?
            <Button
              minimal={true}
              intent={'danger'}
              text={this.state.selected}
              icon={this.props.icon}
              fill={true}
              rightIcon={'cross'}
              onClick={() => this.handleItemSelect('')}
            /> :
            <Popover targetClassName={styles['popover-target']}>
              <PopoverButton
                icon={this.props.icon}
                name={this.state.selected ? this.state.selected : this.props.name}
              />
              <PopoverContent
                onItemClick={this.handleItemSelect}
                items={this.props.items}
              />
            </Popover>
        }
      </>
    );
  }
}
