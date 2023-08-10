import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
// Reglas para crear un custom hook
// Custom Hook es una función que utiliza otros hooks de react
// 1. El nombre de la función debe comenzar con la palabra use}
// 2. Siempre deben de ser funciones (a partir de React 16.8 usamos hooks)
// 3. Siempre deben usar al menos un Hook de React (useState, useEffect, useContext, etc).
// 4. No deben ser llamados dentro de ciclos, condiciones o funciones anidadas.
// 5. Deben ser reutilizables, no para casos muy especificos.
// 6. Debe retornar algo, ya sea un valor, un objeto, un array, etc.
// Definir una interfaz para los valores por defecto.
interface Defaults {
  [key: string]: string;
}

interface useFormReturn {
  input: Defaults;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

function useForm(callback: (input: Defaults) => void, defaults: Defaults): useFormReturn {
  const [input, setInput] = useState<Defaults>(defaults);

  useEffect(() => {
    setInput({ ...defaults });
  }, [defaults]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    callback(input);
  };

  return {
    input,
    handleInputChange,
    handleSubmit
  };
}

export default useForm;
