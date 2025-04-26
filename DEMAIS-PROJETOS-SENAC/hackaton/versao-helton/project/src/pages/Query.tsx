import React, { useState } from 'react';
import Select from '../components/Select';
import { ESTADOS_BRASILEIROS } from '../constants/states';

const TIPOS_OPERACAO = [
  { value: 'compra', label: 'Compra' },
  { value: 'venda', label: 'Venda' },
  { value: 'importacao', label: 'Importação' }
];

const REGIMES_TRIBUTARIOS = [
  { value: 'simples', label: 'Simples Nacional' },
  { value: 'real', label: 'Lucro Real' },
  { value: 'presumido', label: 'Lucro Presumido' }
];

const Query = () => {
  const [formData, setFormData] = useState({
    ncmCode: '',
    originState: '',
    destinationState: '',
    operationType: '',
    taxRegime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Consulta NCM</h1>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-6">
          <label htmlFor="ncmCode" className="block text-sm font-medium text-gray-700 mb-2">
            Código NCM
          </label>
          <input
            type="text"
            id="ncmCode"
            name="ncmCode"
            value={formData.ncmCode}
            onChange={handleChange}
            placeholder="Ex: 6109.10.00"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Select
            id="originState"
            name="originState"
            value={formData.originState}
            onChange={handleChange}
            options={ESTADOS_BRASILEIROS}
            label="Estado de Origem"
            placeholder="Selecione o estado"
          />

          <Select
            id="destinationState"
            name="destinationState"
            value={formData.destinationState}
            onChange={handleChange}
            options={ESTADOS_BRASILEIROS}
            label="Estado de Destino"
            placeholder="Selecione o estado"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Select
            id="operationType"
            name="operationType"
            value={formData.operationType}
            onChange={handleChange}
            options={TIPOS_OPERACAO}
            label="Tipo de Operação"
            placeholder="Selecione a operação"
          />

          <Select
            id="taxRegime"
            name="taxRegime"
            value={formData.taxRegime}
            onChange={handleChange}
            options={REGIMES_TRIBUTARIOS}
            label="Regime Tributário"
            placeholder="Selecione o regime"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          Calcular Impostos
        </button>
      </form>
    </div>
  );
};

export default Query;