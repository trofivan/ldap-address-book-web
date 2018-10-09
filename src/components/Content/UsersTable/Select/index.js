import React from 'react';
import { Button, Menu, MenuItem } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';
import styles from './Select.module.scss';

export default ({ items = [], current = null, icon, name = '', itemsTextAttr = 'name' }) => {
  const renderItem = (item, { handleClick, modifiers, query }) => (
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
    // console.log(item);
  };

  const filterItems = (query, item) => {
    return false;
    // console.log(query, item)
  };

  return (
    <Select
      items={items}
      itemPredicate={filterItems}
      itemRenderer={renderItem}
      itemListRenderer={renderList}
      onItemSelect={handleItemSelect}
      popoverProps={{
        // className: 'myClassName',

        popoverClassName: styles.popover,
        portalClassName: 'myPortalClassName'
        // targetClassName: styles['popover-target']
      }}
    >
      <Button text={name} icon={icon} fill={true} rightIcon="caret-down"/>
    </Select>
  );

}
