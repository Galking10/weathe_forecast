import './styles.scss';

export const HeadTile = ({mainT, maxT, minT, city, img})=>{
    return(
        <div className='container main'>
            <div className='degrees'><p className='degrees_now'>{mainT} c</p>
            <div className='min_max'>
                <p className='max'>Max : {maxT} c</p>
                <p className='min'>Min : {minT} c </p>
            </div>
            </div>
            <div className='place'>
                <p>{city}</p>
                {/* {img[0] && <img src={`http://openweathermap.org/img/wn/${img[0].icon}@2x.png`} alt='weather icon'/>} */}
            </div>
        </div>
    )
}