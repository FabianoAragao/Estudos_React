import { useState } from "react";

const ManageData = () => 
{
    let someData = 10;
    const [number, setNumber] = useState(10);

    return (
        <>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => (someData = 15)}>Mudar Valor</button>
            </div>
            
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(number+5)}>Mudar Valor</button>
            </div>
        </>
    );
};

export default ManageData