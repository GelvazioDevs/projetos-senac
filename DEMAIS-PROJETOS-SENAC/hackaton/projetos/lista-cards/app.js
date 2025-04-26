function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function createCard(card) {
    return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${card.name}</h2>
                <span class="card-id">ID: ${card.id}</span>
            </div>
            
            <div class="card-dates">
                <div class="date-group">
                    <p class="date-label">Start Date</p>
                    <p class="date-value">${formatDate(card.startDate)}</p>
                </div>
                <div class="date-group">
                    <p class="date-label">End Date</p>
                    <p class="date-value">${formatDate(card.endDate)}</p>
                </div>
            </div>

            <a href="${card.salesUrl}" class="card-link" target="_blank" rel="noopener noreferrer">
                Visit Sales Page
                <svg class="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </a>
        </div>
    `;
}

function renderCards() {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = cards.map(card => createCard(card)).join('');
}

// Initialize the cards when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderCards);