import './styles.scss';

export function Tile ({item}){
    return(
        <li className="tile" key={item.id}>
            <p className='top_text'>{item.title}</p>
            <p className='bottom_text'>{item.value}</p>
        </li>
    )
}