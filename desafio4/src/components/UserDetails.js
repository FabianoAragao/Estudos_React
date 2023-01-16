const UserDetails = ({ name, age, job }) => {
  return (
    <>
        <p>{name} - {age} - {job} </p>
        {age >= 18 ?  
            <p>Está apto a tirar carteira</p> : 
            <p>Não está apto a tirar carteira</p> 
        }
    </>
  );
};

export default UserDetails;