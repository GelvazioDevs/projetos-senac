import React, { useState } from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import { ESTADOS_BRASILEIROS } from '../constants/states';
import { formatCNPJCPF, validateCNPJ, validateCPF } from '../utils/validators';

interface TaxForm {
  ncmCode: string;
  originDocument: string;
  destinationDocument: string;
  value: string;
  originState: string;
  destinationState: string;
  operationType: string;
}

const TIPOS_OPERACAO = [
  { value: 'compra', label: 'Compra' },
  { value: 'venda', label: 'Venda' },
  { value: 'importacao', label: 'Importação' }
];

const TaxCalculation = () => {
  const [formData, setFormData] = useState<TaxForm>({
    ncmCode: '',
    originDocument: '',
    destinationDocument: '',
    value: '',
    originState: '',
    destinationState: '',
    operationType: ''
  });

  const [errors, setErrors] = useState<Partial<TaxForm>>({});
  const [calculationResult, setCalculationResult] = useState<any>(null);

  const validateForm = () => {
    const newErrors: Partial<TaxForm> = {};

    if (!formData.ncmCode.trim()) {
      newErrors.ncmCode = 'Código NCM é obrigatório';
    } else if (!/^\d{4}\.\d{2}\.\d{2}$/.test(formData.ncmCode)) {
      newErrors.ncmCode = 'Código NCM inválido (formato: XXXX.XX.XX)';
    }

    if (!formData.originDocument.trim()) {
      newErrors.originDocument = 'CPF/CNPJ de origem é obrigatório';
    } else {
      const cleanDoc = formData.originDocument.replace(/[^\d]/g, '');
      if (cleanDoc.length === 11 && !validateCPF(cleanDoc)) {
        newErrors.originDocument = 'CPF inválido';
      } else if (cleanDoc.length === 14 && !validateCNPJ(cleanDoc)) {
        newErrors.originDocument = 'CNPJ inválido';
      }
    }

    if (!formData.destinationDocument.trim()) {
      newErrors.destinationDocument = 'CPF/CNPJ de destino é obrigatório';
    } else {
      const cleanDoc = formData.destinationDocument.replace(/[^\d]/g, '');
      if (cleanDoc.length === 11 && !validateCPF(cleanDoc)) {
        newErrors.destinationDocument = 'CPF inválido';
      } else if (cleanDoc.length === 14 && !validateCNPJ(cleanDoc)) {
        newErrors.destinationDocument = 'CNPJ inválido';
      }
    }

    if (!formData.value.trim()) {
      newErrors.value = 'Valor é obrigatório';
    } else if (isNaN(Number(formData.value)) || Number(formData.value) <= 0) {
      newErrors.value = 'Valor inválido';
    }

    if (!formData.originState) {
      newErrors.originState = 'Estado de origem é obrigatório';
    }

    if (!formData.destinationState) {
      newErrors.destinationState = 'Estado de destino é obrigatório';
    }

    if (!formData.operationType) {
      newErrors.operationType = 'Tipo de operação é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateTaxes = () => {
    // Simulação de cálculo de impostos
    const baseValue = Number(formData.value);
    return {
      icms: baseValue * 0.18,
      ipi: baseValue * 0.05,
      pis: baseValue * 0.0165,
      cofins: baseValue * 0.076,
      total: baseValue * (1 + 0.18 + 0.05 + 0.0165 + 0.076)
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const result = calculateTaxes();
      setCalculationResult(result);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Cálculo de Impostos</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-6">
            <Input
              id="ncmCode"
              name="ncmCode"
              label="Código NCM-SH"
              value={formData.ncmCode}
              onChange={handleChange}
              placeholder="XXXX.XX.XX"
              required
              error={errors.ncmCode}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Input
              id="originDocument"
              name="originDocument"
              label="CPF/CNPJ de Origem"
              value={formData.originDocument}
              onChange={handleChange}
              required
              mask={formatCNPJCPF}
              error={errors.originDocument}
            />
            
            <Input
              id="destinationDocument"
              name="destinationDocument"
              label="CPF/CNPJ de Destino"
              value={formData.destinationDocument}
              onChange={handleChange}
              required
              mask={formatCNPJCPF}
              error={errors.destinationDocument}
            />
          </div>

          <div className="mb-6">
            <Input
              id="value"
              name="value"
              label="Valor da Operação"
              type="number"
              value={formData.value}
              onChange={handleChange}
              required
              error={errors.value}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Select
              id="originState"
              name="originState"
              label="Estado de Origem"
              value={formData.originState}
              onChange={handleChange}
              options={ESTADOS_BRASILEIROS}
              placeholder="Selecione o estado"
            />
            
            <Select
              id="destinationState"
              name="destinationState"
              label="Estado de Destino"
              value={formData.destinationState}
              onChange={handleChange}
              options={ESTADOS_BRASILEIROS}
              placeholder="Selecione o estado"
            />
          </div>

          <div className="mb-6">
            <Select
              id="operationType"
              name="operationType"
              label="Tipo de Operação"
              value={formData.operationType}
              onChange={handleChange}
              options={TIPOS_OPERACAO}
              placeholder="Selecione o tipo de operação"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
          >
            Calcular Impostos
          </button>
        </form>

        {calculationResult && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Resultado do Cálculo</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">ICMS:</span>
                <span className="font-medium">{formatCurrency(calculationResult.icms)}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">IPI:</span>
                <span className="font-medium">{formatCurrency(calculationResult.ipi)}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">PIS:</span>
                <span className="font-medium">{formatCurrency(calculationResult.pis)}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">COFINS:</span>
                <span className="font-medium">{formatCurrency(calculationResult.cofins)}</span>
              </div>
              
              <div className="flex justify-between items-center py-4 mt-4 border-t-2">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-lg font-bold text-blue-600">
                  {formatCurrency(calculationResult.total)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaxCalculation;