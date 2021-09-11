import React from 'react';

export function useForm({
  initialValues,
  onSubmit,
  validateSchema,
}) {
  const [values, setValues] = React.useState(initialValues);

  const [isFormDisabled, setIsFormDisabled] = React.useState(true);
  const [erros, setErros] = React.useState({});
  const [touched, setTouchedFields] = React.useState({});

  React.useEffect(() => {
    validateSchema(values)
      .then(() => {
        setIsFormDisabled(false);
        setErros({});
      })
      .catch((erro) => {
        const formatedErros = erro.inner.reduce((errorObjectAcc, currentError) => {
          const fieldName = currentError.path;
          const erroMessage = currentError.message;
          return {
            ...errorObjectAcc,
            [fieldName]: erroMessage,
          };
        }, {});
        setErros(formatedErros);
        setIsFormDisabled(true);
      });
  }, [values]);

  return {
    values,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(values);
    },
    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;

      setValues((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
    // Validação do Form
    isFormDisabled,
    setIsFormDisabled,
    erros,
    touched,
    handleBlur(event) {
      const fieldName = event.target.getAttribute('name');

      setTouchedFields({
        ...touched,
        [fieldName]: true, // usuário: true, senha: true
      });
    },
  };
}
