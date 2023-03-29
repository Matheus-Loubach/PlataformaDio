import { FiThumbsUp } from 'react-icons/fi'
import React from 'react'
import {
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './cardStyle'

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://www.ifsc.edu.br/documents/1035121/2170426/dio.png/ab47310a-b7a6-49d2-b3c1-72e88a7c99ed?t=1625144670996" />
      <hr/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/34719454?v=4" />
          <div>
            <h4>Matheus Affonso</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto do curso React Developer - DIO </h4>
          <p>Este projeto em ReactJS tem como objetivo estudar o uso do style-component para estilização de componentes, a validação de formulários com a biblioteca yup e yupResolver, além do uso do userForm para gerenciamento do estado do formulário em conjunto com uma API de teste implementada com o json-server. A aplicação permite o cadastro e login de usuários, com validação de campos e feedbacks visuais para as ações do usuário. Além disso, a aplicação faz requisições à API para armazenar e recuperar as informações dos usuários cadastrados.</p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript #API #ReactJS</h4>
          <p>
            <FiThumbsUp />10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export default Card