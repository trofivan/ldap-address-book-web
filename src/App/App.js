import React from 'react';
import { HTMLTable, Divider, Icon } from '@blueprintjs/core';
import { app } from './App.module.scss';

const App = () => (
  <div className={app}>
    <header style={{ width: '100%', height: '50px', padding: '10px', backgroundColor: '#aaa' }}>
      Header
    </header>
    <section style={{ minWIdth: 800, flexGrow: 1, margin: '2em 0' }}>
      <HTMLTable bordered={true} striped={true}>
        <thead>
        <tr>
          <th>Имя</th>
          <th>Телефон</th>
          <th>e-mail</th>
          <th>Должность</th>
          <th>Компания</th>
          <th>Отдел</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Батарейкин Фёдр Степанович</td>
          <td>
            +7 (351) 213-81-41 (8141)
            <Divider/>
            +79192138141
          </td>
          <td><a href="mailto:">fbatareykin@company.ru</a></td>
          <td>Начальник бюро внешней кооперации</td>
          <td>АО "Компания ЛТД"</td>
          <td>Бюро кооперации с клиентами</td>
        </tr>
        <tr>
          <td>Камазов Илья Фёдорович</td>
          <td>
            +7 (351) 219-85-99 (8599)
            <Divider/>
            +79192186191
          </td>
          <td><a href="mailto:">ikamazov@company.ru</a></td>
          <td>Подсобный рабочий</td>
          <td>АО "Филиал компании ЛТД Сельхоз-Строй"</td>
          <td>Бюро подсобного хозяйства</td>
        </tr>
        <tr>
          <td>Батарейкин Фёдр Степанович</td>
          <td>
            +7 (351) 213-81-41 (8141)
            <Divider/>
            +79192138141
          </td>
          <td><a href="mailto:">fbatareykin@company.ru</a></td>
          <td>Начальник бюро внешней кооперации</td>
          <td>АО "Компания ЛТД"</td>
          <td>Бюро кооперации с клиентами</td>
        </tr>
        <tr>
          <td>Камазов Илья Фёдорович</td>
          <td>
            +7 (351) 219-85-99 (8599)
            <Divider/>
            +79192186191
          </td>
          <td><a href="mailto:">ikamazov@company.ru</a></td>
          <td>Подсобный рабочий</td>
          <td>АО "Филиал компании ЛТД Сельхоз-Строй"</td>
          <td>Бюро подсобного хозяйства</td>
        </tr>
        </tbody>
      </HTMLTable>
    </section>
    <footer style={{ width: '100%', height: 50, padding: 10, backgroundColor: '#ccc' }}>
      Footer
    </footer>
  </div>
);

export default App;
