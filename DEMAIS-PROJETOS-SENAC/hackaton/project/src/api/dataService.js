import { API_URL } from '../config/constants.js';

export async function fetchItems(searchTerm = '') {
  try {
    const response = await fetch(`${API_URL}/items`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    if (searchTerm) {
      return filterItems(data, searchTerm);
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

function filterItems(items, searchTerm) {
  const term = searchTerm.toLowerCase();
  return items.filter(item => 
    Object.values(item).some(value => 
      String(value).toLowerCase().includes(term)
    )
  );
}