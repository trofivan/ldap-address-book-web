import React from 'react';
import { Button, Menu, MenuItem } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';
import styles from './Select.module.scss';

const renderItem = textKey => (item, { handleClick }) => (
  <MenuItem
    key={item.id}
    onClick={(e) => {
      console.log(e);
    }}
    text={item[textKey]}
  />
);

const renderList = ({ items, itemsParentRef, query, renderItem }) => {
  const renderedItems = items.map(renderItem);

  return (
    <Menu className={styles.menu} ulRef={itemsParentRef}>
      {renderedItems}
    </Menu>
  );
};

export default ({ items = [], item, title = '', textKey }) => (
  <Select
    className={styles.select}
    items={items}
    // itemPredicate={}
    itemListRenderer={renderList}
    itemRenderer={renderItem(textKey)}
    noResults={<MenuItem disabled={true} text='Нет результатов'/>}
  >
    <Button
      icon="user"
      rightIcon="caret-down"
      text={item ? item : title}
    />
  </Select>
);
