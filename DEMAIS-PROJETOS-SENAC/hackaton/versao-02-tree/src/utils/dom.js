export function createElement(tag, className, content = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content) element.textContent = content;
  return element;
}

export function setLoading(container) {
  container.innerHTML = '<div class="loading">Carregando...</div>';
}

export function setError(container, message) {
  container.innerHTML = `
    <div class="error">
      ${message}
    </div>
  `;
}