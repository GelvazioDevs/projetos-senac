import React, { useState } from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import { ESTADOS_BRASILEIROS } from '../constants/states';
import { validateCNPJ, validateCPF, formatCNPJCPF } from '../utils/validators';

interface CustomerForm {
  name: string;
  document: string;
  email: string;
  phone: string;
  state: string;
  city: string;
  address: string;
}

const CustomerRegistration = () => {
  const [formData, setFormData] = useState<CustomerForm>({
    name: '',
    document: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    address: ''
  });

  const [errors, setErrors] = useState<Partial<CustomerForm>>({});

  const validateForm = () => {
    const newErrors: Partial<CustomerForm> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.document.trim()) {
      newErrors.document = 'CPF/CNPJ é obrigatório';
    } else {
      const cleanDoc = formData.document.replace(/[^\d]/g, '');
      if (cleanDoc.length === 11 && !validateCPF(cleanDoc)) {
        newErrors.document = 'CPF inválido';
      } else if (cleanDoc.length === 14 && !validateCNPJ(cleanDoc)) {
        newErrors.document = 'CNPJ inválido';
      } else if (cleanDoc.length !== 11 && cleanDoc.length !== 14) {
        newErrors.document = 'Documento inválido';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Cadastro de Cliente</h1>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Input
            id="name"
            name="name"
            label="Nome"
            value={formData.name}
            onChange={handleChange}
            required
            error={errors.name}
          />
          
          <Input
            id="document"
            name="document"
            label="CPF/CNPJ"
            value={formData.document}
            onChange={handleChange}
            required
            mask={formatCNPJCPF}
            error={errors.document}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Input
            id="email"
            name="email"
            label="E-mail"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            error={errors.email}
          />
          
          <Input
            id="phone"
            name="phone"
            label="Telefone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Select
            id="state"
            name="state"
            label="Estado"
            value={formData.state}
            onChange={handleChange}
            options={ESTADOS_BRASILEIROS}
            placeholder="Selecione o estado"
          />
          
          <Input
            id="city"
            name="city"
            label="Cidade"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <Input
            id="address"
            name="address"
            label="Endereço"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          Cadastrar Cliente
        </button>
      </form>
    </div>
  );
};

export default CustomerRegistration;