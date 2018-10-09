import React from 'react';
import { Button, Menu, MenuItem } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';
import styles from './Select.module.scss';

const renderItem = (itemsTextAttr) => (item, { handleClick, modifiers, query }) => (
  <MenuItem
    key={item.id}
    onClick={handleClick}
    text={item[itemsTextAttr]}
  />
);

const renderList = ({ items, query, renderItem }) => {
  const renderedItems = items
    .filter((el, indx) => indx < 10)
    .map(renderItem);

  return (
    <Menu>
      <MenuItem
        text={renderedItems.length === items.length ? renderItem.length : `${renderedItems.length}/${items.length}`}
        disabled={true}/>
      {renderedItems}
    </Menu>
  );
};

const handleItemSelect = (item) => {
  console.log(item);
};

export default ({ items = [], current = null, icon, name = '', itemsTextAttr = 'name' }) => (
  <Select
    items={items}
    itemRenderer={renderItem(itemsTextAttr)}
    itemListRenderer={renderList}
    onItemSelect={handleItemSelect}
    popoverProps={{
      popoverClassName: styles.popover,
      targetClassName: styles['popover-target']
    }}
  >
    <Button text={name} icon={icon} fill={true} rightIcon="caret-down"/>
  </Select>
);
