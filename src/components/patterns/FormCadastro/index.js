import React from 'react';
import { Lottie } from '@crello/react-lottie';
import loadingAnimation from './animations/loading.json';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import { Button } from '../../commons/Button';
import TextField from '../../Forms/TextField';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = React.useState({
    usuario: 'rayannebarros',
    nome: 'Rayanne Barros',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.usuario.length === 0 || userInfo.nome.length === 0;
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setIsFormSubmited(true);
        setSubmissionStatus(formStates.LOADING);
        // eslint-disable-next-line no-console
        console.log('O formulário esta pronto, faça seu cadastro como usuário');
        const userDTO = { username: userInfo.usuario, name: userInfo.nome };
        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userDTO),
        })
          .then((respostaDoServidor) => {
            if (respostaDoServidor.ok) {
              return respostaDoServidor.json();
            }

            throw new Error('Não foi possível cadastrar o usuário agora');
          })
          .then((respostaConvertidaEmObjeto) => {
            setSubmissionStatus(formStates.DONE);
            // eslint-disable-next-line no-console
            console.log(respostaConvertidaEmObjeto);
          })
          .catch((error) => {
            setSubmissionStatus(formStates.ERROR);
            // eslint-disable-next-line no-console
            console.error(error);
          });
      }}
    >
      <Text
        variant="title"
        tag="h1"
        color="tertiary.mainColor"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.Color"
        marginBottom="32px"
      >
        Você está a um passo de saber tudo o que está
        rolando no bairro, complete seu cadastro agora!
      </Text>
      <div>
        <TextField
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange} // capturadores
        />
      </div>
      <div>
        <TextField
          placeholder="Usuário"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
        />
      </div>
      <Button
        variant="primary"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Cadastrar
      </Button>
      { isFormSubmited && submissionStatus === formStates.LOADING && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{ animationData: loadingAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}
      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{ animationData: successAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}
      { isFormSubmited && submissionStatus === formStates.ERROR && (
      <Box
        display="flex"
        justifyContent="center"
      >
        <Lottie
          width="150px"
          height="150px"
          className="lottie-container basic"
          config={{ animationData: errorAnimation, loop: false, autoplay: true }}
        />
      </Box>
      )}
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          variant="borders"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
