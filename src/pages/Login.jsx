import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { api } from '../services/api';
import { Header } from '../components/Header/Header';
import { MdEmail, MdLock } from 'react-icons/md';
import '../componentsCSS/login.css';

const schema = yup.object({
  email: yup.string().required('E-mail não é válido').email('E-mail não é válido'),
  password: yup.string().min(6, 'No mínimo 6 caracteres').required('Senha é obrigatória'),
}).required();

const Login = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const styleIcon = { fontSize: "0.5em", padding: "10px 10px 0 0" };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (FormData) => {
    const data = await api.get(`/users?email=${FormData.email}&senha=${FormData.password}`);
    try {
      var test = data.data[0].email === FormData.email && data.data[0].password === FormData.password;
      if (!test) {
        setMessage('E-mail ou senha inválidos');
      } else {
        navigate('/feed');
      }

    } catch (error) {
      setMessage('E-mail ou senha inválidos');
    }
  };

  return (
    <div>
      <Header autenticado={false} />
      <div className='container_login'>
        <section>
          <div>
            <h1>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</h1>
          </div>
        </section>
        <section>
          <div>
            <h2>Faça seu cadastro</h2>
            <p>Faça seu login e make the change._</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                <MdEmail style={styleIcon} />
                <input type='email' placeholder='E-mail' {...register("email")} />
                <p>{errors.email?.message}</p>
              </label>
              <label>
                <MdLock style={styleIcon} />
                <input type='password' placeholder='Senha' {...register("password")} />
              </label>
              <p>{errors.password?.message}</p>
              {message && <p>{message}</p>}
              <button type="submit">Entrar</button>
            </form>
            <div className='info_esqCriar'>
              <p id='senha'>Esqueci minha senha</p>
              <p><NavLink to={'/register'} id='criar'>Criar Conta</NavLink></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;