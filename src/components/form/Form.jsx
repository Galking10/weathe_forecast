import './styles.scss';

export const Form = ({value, onChange, onSubmit})=>{
   const handleChange = (e)=> {
 
    onChange(e.target.value)
    }
    return(
        <form className='container find' onSubmit={onSubmit}>
            <input className='input' value={value} onChange={handleChange} placeholder='City'></input>
            <button className='button' type='submit'>FIND</button>
        </form>
        
    )
}