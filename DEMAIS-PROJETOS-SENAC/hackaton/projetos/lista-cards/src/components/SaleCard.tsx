import { Card } from '../types/Card';
import { ExternalLink } from 'lucide-react';

interface SaleCardProps {
  card: Card;
}

export function SaleCard({ card }: SaleCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{card.name}</h3>
        <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
          ID: {card.id}
        </span>
      </div>
      
      <div className="space-y-3 mb-6">
        <div>
          <p className="text-sm text-gray-500">Start Date</p>
          <p className="font-medium text-gray-700">{formatDate(card.startDate)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">End Date</p>
          <p className="font-medium text-gray-700">{formatDate(card.endDate)}</p>
        </div>
      </div>

      <a
        href={card.salesUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Visit Sales Page
        <ExternalLink size={16} />
      </a>
    </div>
  );
}