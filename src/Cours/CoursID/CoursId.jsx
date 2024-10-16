import { useParams } from "react-router-dom"
import { dataCenter } from "../SousCours/Data2"
import "./index.css"
import  EmailJS  from "@emailjs/browser"
import { useRef, useState } from "react"


const CoursId = () => {
   const {id} = useParams([])
   const data = dataCenter[id]
   const [saisir,setSaisire] = useState({
    email : '',
 })

  const form = useRef();

  const sendEmail = (e)=>{
    e.preventDefault()
    const send =  EmailJS.sendForm('service_bs22p5j','template_rxb6ttx' ,form.current,'goflVDn8UP0myT3qG')
    .then((result) => {
      console.log(result.text);
      window.location.reload(true)
    })
    .catch(error =>console.log(error.text))
   
      if (send) {
           alert("success")
      } else{
       alert("erreur")
      }}

  return (
    <div className="courId">
         <div className="container">
            <h1>{data.titre}</h1>
            <div className="description">
                <img src={data.image} alt="" />
                <div className="leftdesc">
                <h4>{data.info}</h4>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Natus dolor voluptatem ad, aspernatur animi dolores ea praesentium
                     ducimus maiores nesciunt aut laudantium aperiam aliquid pariatur 
                     saepe ut esse suscipit veniam.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Natus dolor voluptatem ad, aspernatur animi dolores ea praesentium
                     ducimus maiores nesciunt aut laudantium aperiam aliquid pariatur 
                     saepe ut esse suscipit veniam.</p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Ea magnam vero voluptatibus consequatur, error vel cupiditate hic libero quibusdam quis a odit autem, 
                 tempora esse omnis ratione? Laboriosam, voluptates adipisci.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Ea magnam vero voluptatibus consequatur, error vel cupiditate hic libero quibusdam quis a odit autem, 
                 tempora esse omnis ratione? Laboriosam, voluptates adipisci.</p>
        <div className="pube">
         <section className="droite">
         <i class="fa fa-bell" aria-hidden="true"/>
         <h5>S'ABONNER A NOTRE NEWSLETTER</h5>
         </section>   
        <form onSubmit={sendEmail} className="mail" ref={form}>
        <input type="text"  name='user_email'  onChange={(e)=>setSaisire({...saisir , email : e.target.value})} placeholder='Enter your mail' />
        <button >SOUSCRIRE</button>
        </form>
        </div>
         </div>
    </div>
  )
}

export default CoursId
