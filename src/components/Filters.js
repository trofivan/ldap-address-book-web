import Select from './Select';
import React from 'react';

export const Users = ({ items, setFilter }) => (
  <Select
    items={items}
    name={`Имя`}
    icon={`person`}
    onItemSelect={(item) => setFilter('name', item)}
  />
);

export const Mails = ({ items, setFilter }) => (
  <Select
    items={items}
    name={`e-mail`}
    icon={`envelope`}
    onItemSelect={(item) => setFilter('mail', item)}
  />
);

export const Phones = ({ items, setFilter }) => (
  <Select
    items={items}
    name="Телефон"
    icon="phone"
    onItemSelect={(item) => setFilter('phone', item)}
  />
);

export const Titles = ({ items, setFilter }) => (
  <Select
    items={items}
    name="Должность"
    icon="id-number"
    onItemSelect={(item) => setFilter('title', item)}
  />
);

export const Companies = ({ items, setFilter }) => (
  <Select
    items={items}
    name="Компания"
    icon="office"
    onItemSelect={(item) => setFilter('company', item)}
  />
);

export const Departments = ({ items, setFilter }) => (
  <Select
    items={items}
    name="Отдел"
    icon="diagram-tree"
    onItemSelect={(item) => setFilter('department', item)}
  />
);