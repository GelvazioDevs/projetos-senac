import React, { useState } from 'react';
import Input from '../components/Input';
import { formatCNPJCPF, validateCNPJ, validateCPF } from '../utils/validators';

interface ProductForm {
  name: string;
  ncmCode: string;
  originDocument: string;
  destinationDocument: string;
  description: string;
  price: string;
  unit: string;
}

const ProductRegistration = () => {
  const [formData, setFormData] = useState<ProductForm>({
    name: '',
    ncmCode: '',
    originDocument: '',
    destinationDocument: '',
    description: '',
    price: '',
    unit: ''
  });

  const [errors, setErrors] = useState<Partial<ProductForm>>({});

  const validateForm = () => {
    const newErrors: Partial<ProductForm> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome do produto é obrigatório';
    }

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

    if (!formData.price.trim()) {
      newErrors.price = 'Preço é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Cadastro de Produto</h1>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Input
            id="name"
            name="name"
            label="Nome do Produto"
            value={formData.name}
            onChange={handleChange}
            required
            error={errors.name}
          />
          
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Input
            id="price"
            name="price"
            label="Preço"
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
            error={errors.price}
          />
          
          <Input
            id="unit"
            name="unit"
            label="Unidade"
            value={formData.unit}
            onChange={handleChange}
            placeholder="Ex: UN, KG, CX"
          />
        </div>

        <div className="mb-6">
          <Input
            id="description"
            name="description"
            label="Descrição"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          Cadastrar Produto
        </button>
      </form>
    </div>
  );
};

export default ProductRegistration;