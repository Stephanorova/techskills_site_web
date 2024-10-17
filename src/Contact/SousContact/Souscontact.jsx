import './index.css'
import { useRef, useState } from "react"
import  EmailJS  from "@emailjs/browser"



const Souscontact = () => {
    const maps = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7550.379073492983!2d47.550970015122886!3d-18.878670950016243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2smg!4v1726481430342!5m2!1sfr!2smg"
  
    const [saisir,setSaisire] = useState({
      nom: '',
      email : '',
      message: '',
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
  
    <section className="contacte">
    <div className="container shandow flexSB">
       <div className="lefte">
            <iframe src={maps}/>
       </div>
       <div className="righe">
           <h1>Contact us</h1>
           <p>Learning institute.</p>
           <div className="titre gride">
             <div className="box">
               <p>Lot II N 18 D Ambatobe Nanisana 101 Antananarivo</p>
             </div>
             <div className="box">
               <p>administration@tsl-isntitute.com</p>
             </div>
             <div className="box">
               <p>+261 38 46  503 32 / +261 38 38 734 53</p>
             </div>
           </div>
           <form onSubmit={sendEmail} className="forme" ref={form}>
               <div className="flexSB">
                   <input type="text" name='user_name' placeholder="Your Name" onChange={(e)=>setSaisire({...saisir , nom : e.target.value})}/>
                   <input type="email" name='user_email' placeholder="Your Email" onChange={(e)=>setSaisire({...saisir , email : e.target.value})}/>
               </div>
               <textarea cols="30" name='message'  rows="10" placeholder="Write your message..." onChange={(e)=>setSaisire({...saisir , message: e.target.value})}/>
               <button className="primary-btn">Send</button>
           </form>
       </div>
  </div>
  <div className="qrcode">
       <h1>You can scan this QR code</h1>
       <img src="/image/qr.png" alt="" />
  </div>
  </section>

  )
}

export default Souscontact
