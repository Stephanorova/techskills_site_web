import'./index.css'
import SousHome from './SousHome/SousHome'


const Home = () => {
  


  return (
  <>
    <div className='home'>
        <div className="row">
            <h1><i>Institute Learning</i><img src="/image/suivre.png" alt="" /></h1>
            <hr />
            <p>Show and event technicians</p>
        </div>
    </div>
    <div className="souhome">
        <SousHome/>
    </div>
    </>
  )
}

export default Home
