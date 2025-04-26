import './style.css';
import { fetchItems } from './src/api/dataService.js';
import { createTreeView } from './src/components/treeView.js';
import { debounce } from './src/utils/debounce.js';
import { setLoading, setError } from './src/utils/dom.js';

class App {
  constructor() {
    this.container = document.getElementById('treeContainer');
    this.searchInput = document.getElementById('searchInput');
    this.initialize();
  }

  initialize() {
    this.setupEventListeners();
    this.updateTree();
  }

  setupEventListeners() {
    this.searchInput.addEventListener('input', 
      debounce(e => this.updateTree(e.target.value), 300)
    );
  }

  async updateTree(searchTerm = '') {
    try {
      setLoading(this.container);
      const data = await fetchItems(searchTerm);
      this.container.innerHTML = '';
      this.container.appendChild(createTreeView(data));
    } catch (error) {
      setError(
        this.container,
        'Erro ao carregar os dados. Por favor, verifique se o servidor está rodando.'
      );
    }
  }
}

// Initialize the application
new App();