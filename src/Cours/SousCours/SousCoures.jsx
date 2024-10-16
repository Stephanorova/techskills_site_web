import { useHistory } from 'react-router-dom'
import { dataCenter } from './Data2'
import './index.css'


const SousCoures = () => {

  const history = useHistory()

  return (
    <div className="souscours">
    <div className="containers">
       <h1>Les meilleurs cours</h1>
       <div className="toutelescours">
        <p>« Nos cours sont conçus conformément à la Loi sur la Santé et la Sécurité au Travail à Madagascar. Cependant, nous tenons également compte des normes internationales de sécurité ainsi que des meilleures pratiques de l'industrie afin de fournir une formation de classe mondiale sur les travaux en hauteur, aussi bien à Madagascar qu'à l'international.»</p>
      <div className="rawp">
       {
            dataCenter.map((index,val)  =>{
                return(
                    <section className='section' key={val}>
                        <div className="imagecour">
                        <img src={index.image} alt="" />
                        </div>
                       <span>{index.titre}</span>
                       <button onClick={()=>history.push(`/${val}`)}>Voir Cours</button>
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
