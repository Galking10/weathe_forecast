import { Icons } from '../../asset/IconSun';
import './styles.scss';

export const HeadTile = ({mainT, maxT, minT, city, img})=>{
    return(
        <div className='container'>
            <div className='main'>
            <div className='degrees'><p className='degrees_now'>{mainT} c&#176;</p>
            <div className='min_max'>
                <p className='max'>Max : {maxT} c&#176;</p>
                <p className='min'>Min : {minT} c&#176; </p>
            </div>
            </div>
            <div className='place'>
                <p>{city}</p>
                {img && <Icons type={img[0].icon}/>}
            </div>
            </div>
        </div>
    )
}