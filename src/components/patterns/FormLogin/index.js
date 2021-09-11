import React from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { Button } from '../../commons/Button';
import TextField from '../../Forms/TextField';
import { useForm } from '../../../infra/hooks/forms/useForm';
import { loginService } from '../../../services/login/loginService';

const loginSchena = yup.object().shape({
  usuario: yup
    .string()
    .required('"Usuário" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  senha: yup
    .string()
    .required('Sua senha é obrigatória')
    .min(8, 'Sua senha precisa ter ao menos 8 caracteres'),
});

// console.log(
//   'loginSchena',
//   loginSchena.validate(
//     { usuario: '', senha: '' },
//     { abortEarly: false },
//   )
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.error(err.inner);
//     }),
// );

export default function LoginForm() {
  const router = useRouter();
  const initialValues = {
    usuario: '',
    senha: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      loginService.login({
        username: values.usuario, // 'omariosouto',
        password: values.senha, // 'senhasegura
      })
        .then(() => {
          router.push('/app/profile');
        });
    },
    async validateSchema(values) {
      return loginSchena.validate(values, {
        abortEarly: false,
      });
    },
  });
  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        onChange={form.handleChange}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        onChange={form.handleChange}
      />
      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
      <pre>
        {JSON.stringify(form.erros, null, 4)}
      </pre>
    </form>
  );
}
