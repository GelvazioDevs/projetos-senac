export function createTreeView(data) {
  const treeContainer = document.createElement('div');
  treeContainer.className = 'tree-container';

  // Group items by their hierarchy level
  const hierarchy = buildHierarchy(data);
  const tree = createTreeNode(hierarchy);
  
  treeContainer.appendChild(tree);
  return treeContainer;
}

function buildHierarchy(data) {
  const root = { children: {} };
  
  data.forEach(item => {
    let current = root;
    const code = item.Codigo;
    const parts = code.split('.');
    
    parts.forEach((part, index) => {
      const currentPath = parts.slice(0, index + 1).join('.');
      if (!current.children[currentPath]) {
        current.children[currentPath] = {
          code: currentPath,
          description: item.Descricao,
          data: item,
          children: {}
        };
      }
      current = current.children[currentPath];
    });
  });
  
  return root;
}

function createTreeNode(node) {
  const ul = document.createElement('ul');
  ul.className = 'tree';
  
  Object.values(node.children).forEach(child => {
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.className = 'tree-item';
    span.innerHTML = `
      <span class="toggle ${Object.keys(child.children).length ? 'has-children' : ''}">
        ${Object.keys(child.children).length ? '▶' : '•'}
      </span>
      <span class="code">${child.code}</span>
      <span class="description">${child.description}</span>
    `;
    
    li.appendChild(span);
    
    if (Object.keys(child.children).length) {
      const childrenContainer = createTreeNode(child);
      childrenContainer.style.display = 'none';
      li.appendChild(childrenContainer);
      
      span.addEventListener('click', () => {
        const toggle = span.querySelector('.toggle');
        const isExpanded = toggle.textContent === '▼';
        toggle.textContent = isExpanded ? '▶' : '▼';
        childrenContainer.style.display = isExpanded ? 'none' : 'block';
      });
    }
    
    ul.appendChild(li);
  });
  
  return ul;
}