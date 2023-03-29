import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { api } from '../services/api';
import { Header } from '../components/Header/Header';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail, MdLock } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import '../componentsCSS/register.css';

const schema = yup.object({
  name: yup.string().min(3, 'No mínimo 6 caracteres').required('Nome é obrigatório'),
  email: yup.string().required('E-mail não é valido').email('E-mail não é valido'),
  telephone: yup.number('Somente números').required('Telefone é obrigatório'),
  password: yup.string().min(6, 'No mínimo 6 caracteres').required('Senha é obrigatória'),
}).required();

const Register = () => {
  const [message, setMessage] = useState('');
  const styleIcon = { fontSize: '0.5em', padding: '10px 10px 0 0' };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/users', data);
      if (response.status === 201) {
        setMessage('Usuário cadastrado com sucesso!');
      }
    } catch (error) {
      setMessage('Erro ao cadastrar usuário. Tente novamente mais tarde.');
    }
  };

  return (
    <div>
      <Header autenticado={false} />
      <div className="container_register">
        <section>
          <div>
            <h1>
              A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </h1>
          </div>
        </section>
        <section>
          <div>
            <h2>Comece agora grátis</h2>
            <p>Crie sua conta e make the change.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                <FaUserAlt style={styleIcon} />
                <input type="text" placeholder="Nome Completo" {...register('name')} name="name" />
                <p>{errors.name?.message}</p>
              </label>

              <label>
                <MdEmail style={styleIcon} />
                <input type="email" placeholder="Seu melhor @E-mail" {...register('email')} name="email" />
                <p>{errors.email?.message}</p>
              </label>

              <label>
                <BsFillTelephoneFill style={styleIcon} />
                <input type="number" placeholder="Celular" {...register('telephone')} name="telephone" />
                <p>{errors.telephone?.message}</p>
              </label>

              <label>
                <MdLock style={styleIcon} />
                <input type="password" placeholder="Senha" {...register('password')} name="password" />
                <p>{errors.password?.message}</p>
              </label>
              {message && <p>{message}</p>}
              <button type="submit">Criar minha conta</button>
            </form>
            <div className="infoCadaster">
              <p id="termos">
                Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO
              </p>
              <p>
                Já tenho conta. <NavLink to={'/login'} id="Login">Fazer login</NavLink>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
