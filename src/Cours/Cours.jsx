
import'./index.css'
import SousCoures from './SousCours/SousCoures'


const Cours = () => {

  return (
  <>
    <div className='cours'>
        <div className="row">
            <h1><i>Courses Us</i><img src="/image/suivre.png" alt="" /></h1>
            <hr />
            <p>TRAINING</p>
        </div>
    </div>
    <div className="souscour">
        <SousCoures/>
    </div>
    </>
  )
}

export default Cours