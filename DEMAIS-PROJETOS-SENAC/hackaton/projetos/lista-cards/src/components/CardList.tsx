import { cards } from '../data/cards';
import { SaleCard } from './SaleCard';

export function CardList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <SaleCard key={card.id} card={card} />
      ))}
    </div>
  );
}