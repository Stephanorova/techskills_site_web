import { useHistory } from 'react-router-dom'
import { dataCenter } from './Data2'
import './index.css'


const SousCoures = () => {

  const history = useHistory()

  return (
    <div className="souscours">
    <div className="containers">
       <h1>Our best courses</h1>
       <div className="toutelescours">
        <p>«Our courses are designed in accordance with the Health and Safety at Work Act in Madagascar. However, we also take into account international safety standards as well as industry best practices in order to provide world-class training on working at heights, both in Madagascar and internationally.»</p>
      <div className="rawp">
       {
            dataCenter.map((index,val)  =>{
                return(
                    <section className='section' key={val}>
                        <div className="imagecour">
                        <img src={index.image} alt="" />
                        </div>
                       <span>{index.titre}</span>
                       <button onClick={()=>history.push(`/${val}`)}>View Course</button>
                    </section>
                )
            })
        }
       </div>
    </div>
    <p>© 2024 TechSkils Learning Institute. All right Reserved.</p>
    </div>
</div>
  )
}

export default SousCoures
