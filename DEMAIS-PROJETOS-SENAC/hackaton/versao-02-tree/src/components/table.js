import { createElement } from '../utils/dom.js';
import { TABLE_HEADERS } from '../config/constants.js';

export function createTable(data) {
  const table = createElement('table', 'data-table');
  
  table.appendChild(createTableHeader());
  table.appendChild(createTableBody(data));
  
  return table;
}

function createTableHeader() {
  const thead = createElement('thead');
  const headerRow = createElement('tr');
  
  TABLE_HEADERS.forEach(({ label }) => {
    const th = createElement('th', '', label);
    headerRow.appendChild(th);
  });
  
  thead.appendChild(headerRow);
  return thead;
}

function createTableBody(data) {
  const tbody = createElement('tbody');
  
  data.forEach(item => {
    const row = createElement('tr');
    TABLE_HEADERS.forEach(({ key }) => {
      const td = createElement('td', '', item[key]);
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  
  return tbody;
}