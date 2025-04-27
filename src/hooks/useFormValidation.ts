import { useState, useCallback } from 'react';

interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
}

interface Validations {
  [key: string]: ValidationRules;
}

interface ValidationErrors {
  [key: string]: string;
}

export const useFormValidation = (initialState: { [key: string]: string }, validations: Validations) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isValid, setIsValid] = useState(false);

  const validateField = useCallback((name: string, value: string) => {
    const rules = validations[name];
    if (!rules) return '';

    if (rules.required && !value) {
      return 'This field is required';
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `Must be at least ${rules.minLength} characters`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `Must be no more than ${rules.maxLength} characters`;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return 'Invalid format';
    }

    if (rules.custom && !rules.custom(value)) {
      return 'Invalid value';
    }

    return '';
  }, [validations]);

  const handleChange = useCallback((name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
    
    // Check if all fields are valid
    const newErrors = { ...errors, [name]: error };
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    const allFieldsFilled = Object.keys(validations).every(key => values[key]?.trim());
    setIsValid(!hasErrors && allFieldsFilled);
  }, [validateField, errors, validations, values]);

  const validateForm = useCallback(() => {
    const newErrors: ValidationErrors = {};
    let formIsValid = true;

    Object.keys(validations).forEach(name => {
      const value = values[name];
      const error = validateField(name, value);
      if (error) {
        formIsValid = false;
      }
      newErrors[name] = error;
    });

    setErrors(newErrors);
    setIsValid(formIsValid);
    return formIsValid;
  }, [validateField, validations, values]);

  return {
    values,
    errors,
    isValid,
    handleChange,
    validateForm,
    setValues
  };
};