import {useState} from 'react'

const ListRender = () => 
{
    const [list] = useState(["jao","pedro","miqueias","juracindo"]);
    const [users, setUsers] = useState([
        {id:1, name: 'jao', age: 25},
        {id:2, name: 'miqueias', age: 22},
        {id:3, name: 'pedro', age: 66},
        {id:4, name: 'juracindo', age: 77},
    ]);

    const deleteRandon = () => {
        const randonNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((users) => randonNumber !== users.id);
        });
    };
 
    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item} </li>
                ))}
            </ul>
            
            <ul>
                {users.map((item) => (
                    <li key={item.id}>{item.name} - {item.age} </li>
                ))}
            </ul>

            <button onClick={deleteRandon}>deleta usuario aleatorio</button>
        </div>
    );
};

export default ListRender