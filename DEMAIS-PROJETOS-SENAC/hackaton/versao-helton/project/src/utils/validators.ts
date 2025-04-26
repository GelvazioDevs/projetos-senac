export const validateCNPJ = (cnpj: string): boolean => {
  const cleanCNPJ = cnpj.replace(/[^\d]/g, '');
  
  if (cleanCNPJ.length !== 14) return false;
  
  if (/^(\d)\1+$/.test(cleanCNPJ)) return false;
  
  let sum = 0;
  let weight = 2;
  
  for (let i = 11; i >= 0; i--) {
    sum += parseInt(cleanCNPJ.charAt(i)) * weight;
    weight = weight === 9 ? 2 : weight + 1;
  }
  
  const digit1 = (sum % 11) < 2 ? 0 : 11 - (sum % 11);
  
  sum = 0;
  weight = 2;
  
  for (let i = 12; i >= 0; i--) {
    sum += parseInt(cleanCNPJ.charAt(i)) * weight;
    weight = weight === 9 ? 2 : weight + 1;
  }
  
  const digit2 = (sum % 11) < 2 ? 0 : 11 - (sum % 11);
  
  return (
    parseInt(cleanCNPJ.charAt(12)) === digit1 &&
    parseInt(cleanCNPJ.charAt(13)) === digit2
  );
};

export const validateCPF = (cpf: string): boolean => {
  const cleanCPF = cpf.replace(/[^\d]/g, '');
  
  if (cleanCPF.length !== 11) return false;
  
  if (/^(\d)\1+$/.test(cleanCPF)) return false;
  
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
  }
  
  const digit1 = (sum * 10) % 11 === 10 ? 0 : (sum * 10) % 11;
  
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
  }
  
  const digit2 = (sum * 10) % 11 === 10 ? 0 : (sum * 10) % 11;
  
  return (
    parseInt(cleanCPF.charAt(9)) === digit1 &&
    parseInt(cleanCPF.charAt(10)) === digit2
  );
};

export const formatCNPJCPF = (value: string): string => {
  const numbers = value.replace(/[^\d]/g, '');
  
  if (numbers.length <= 11) {
    return numbers.replace(
      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
      '$1.$2.$3-$4'
    );
  }
  
  return numbers.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    '$1.$2.$3/$4-$5'
  );
};