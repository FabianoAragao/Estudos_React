import { useState } from 'react';
import './MyForm.css';

const MyForm = ({user}) => {
  {/* Controled inputs */}
  {/* Gerenciamento de dados, manipúlação de state */}
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(user ? user.bio : '');
  const [role, setRole] = useState(user ? user.role : '');

  const handleName = (e) =>
  {
    setName(e.target.value);
  }

  {/* Envio de form */}
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    console.log('Enviando o formulario');
    console.log(name, email, bio, role);    

    {/* Limpando valores do form */}
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  }

  //console.log(name);    
  //console.log(email);

  return (    
    <div> 
        {/* Criação de form */}
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome</label>
            <input  type="text" 
                    name="name" 
                    value={name}
                    onChange={handleName} 
                    placeholder="Digite o seu nome"
            />

            {/* Label envolvendo input */}
            <label>
              <span>Email</span>
              {/* Manipulação de state simplificada */}
              <input  type="text"
                      name="email" 
                      value={email}
                      placeholder="Digite o seu e-mail"                      
                      onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <span>Bio</span>
              {/* textarea */}  
              <textarea name="bio" 
                        placeholder='Descrição do usuario'
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
              ></textarea>
            </label>

            <label>
              <span>Função no sistema</span>
              {/* select */}  
              <select name="role" 
                      onChange={(e) => setRole(e.target.value)}
                      value={role}
              >
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Administratdor</option>
              </select>
            </label>

            <input type="submit" value="Enviar" />
        </form>


    </div>
  );
}

export default MyForm;