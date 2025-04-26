import './style.css';
import { fetchItems } from './src/api/dataService.js';
import { createTable } from './src/components/table.js';
import { debounce } from './src/utils/debounce.js';
import { setLoading, setError } from './src/utils/dom.js';

class App {
  constructor() {
    this.tableContainer = document.getElementById('tableContainer');
    this.searchInput = document.getElementById('searchInput');
    this.initialize();
  }

  initialize() {
    this.setupEventListeners();
    this.updateTable();
  }

  setupEventListeners() {
    this.searchInput.addEventListener('input', 
      debounce(e => this.updateTable(e.target.value), 300)
    );
  }

  async updateTable(searchTerm = '') {
    try {
      setLoading(this.tableContainer);
      const data = await fetchItems(searchTerm);
      this.tableContainer.innerHTML = '';
      this.tableContainer.appendChild(createTable(data));
    } catch (error) {
      setError(
        this.tableContainer,
        'Erro ao carregar os dados. Por favor, verifique se o servidor está rodando.'
      );
    }
  }
}

// Initialize the application
new App();