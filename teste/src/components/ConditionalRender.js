import { useState } from "react"

const ConditionalRender = () => {
    const [x] =  useState(true);
    const [name, setName] = useState('Jão');

    return (
        <div>
            <h3>if comum</h3>
            {x && <p>Se x for true, sim!</p> }

            <h3>if ternario</h3>
            {name === 'Jão'?
            (
                <div>
                    <p>
                        o nome é Jão
                    </p>
                </div>
            ):(
                <div>
                    <p>
                        o nome é {name}
                    </p>
                </div>
            )}
            <button onClick={()=>setName('jaquin')}>muda nome</button>
        </div>
    );
};

export default ConditionalRender