import React from 'react'
import {
  KeyboardView,
  Title,
  Container,
  Imput,
  ButtonSubmit,
  TextButton
} from './styles'
import Header from '../../components/Header'

function Signin() {
  return (
    <KeyboardView>
      <Header />
      <Container>
        <Title>Login</Title>
        <Imput placeholderTextcolor="#fff" placeholder="E-mail" />
        <Imput
          placeholderTextcolor="#fff"
          placeholder="Senha"
          secureTextEntry
        />
        <ButtonSubmit>
          <TextButton>Entrar</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  )
}

export default Signin
