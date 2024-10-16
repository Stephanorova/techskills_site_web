import React, { useState } from 'react';
import { data3 } from './Data3'
import { data4 } from './Data4'
import {useHistory} from "react-router-dom"
import'./index.css'
import Slide from '../Slide/Slide';
import { useRef } from "react"
import  EmailJS  from "@emailjs/browser"




const SousHome = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [saisir,setSaisire] = useState({
      nom: '',
      email : '',
      message: '',
   })

    const toggleForm = () => {
      setIsOpen(!isOpen);
    };
  
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
  
    const map ="https://drive.google.com/file/d/1k2yD7iG0_F8NONVt4alCFUDOFYKaF8Cw/view";
    const history = useHistory()

  
  return (
   <>
    <div className="bonneraison2">
        <div className="container">
           <h1>BONNES RAISONS DE NOUS CHOISIR ...</h1>
           <div className="letrebonneraison2">
           {
                data4.map(index =>{
                    return(
                        <section className='letres' key={index.id}>
                            <div className="image">
                            <img src={index.image} alt="" />
                            </div>
                           <span>{index.info}</span>
                        </section>
                    )
                })
            }
           </div>
        </div>
    </div>
 
    <div className="bonneraison" id='info'>
        <div className="container">
           <div className="letrebonneraison">
           {
                data3.map(index =>{
                    return(
                        <section  className='letres' key={index.id}>
                            <div className="image">
                            <p>{index.id}</p>
                            </div>
                           <span>{index.info}</span>
                        </section>
                    )
                })
            }
           </div>
        </div>
    </div>
    <div className="slide">
    <Slide />
    </div>
   
    
  
    {/* <div className='soushome'>
        <div className="cadre">
      <div className="titres">
            <h1>Pourquoi se former en Sécurité et Prévention des risques ?</h1>
      </div>
        <div className="container flexSB">
            <img src="/image/image4.png" alt="" />
           <div className="soushomRight">
            <div className="backright">
            {
                dataLeft.map(index =>{
                    return(
                        <section className='letres' key={index.id}>
                           <span>{index.info}</span>
                        </section>
                    )
                })
            }
            </div>
        </div>
        </div>
        </div>
        </div> */}
    {/* <div className="pube1">
        <div className="pubegauche">
            <div className="devis">
                <h3>Demandez votre devis  </h3>
                <i className='fa fa-long-arrow-right icons'/>
            </div>
            <div className="tsltitre">
                <h1>Choisissez TSL. <span style={{color:"grey"}}>Parcourez notre catalogue de formation et demandez votre devis</span></h1>
            </div>
        </div>
    <div className="pubdroite" id='info'>
      <button onClick={toggleForm} className="bouton">
        {isOpen ? 'Demandez devis' : 'Demandez devis'}
      </button>
      {isOpen && (
        <form onSubmit={sendEmail} className="forme" ref={form}>
            <span>  
            Laissez-nous un message
            </span>
            <input type="text" name='user_name' placeholder="Votre nom"  onChange={(e)=>setSaisire({...saisir , nom : e.target.value})} required  />
            <input type="email" name='user_email' placeholder="Votre email"  onChange={(e)=>setSaisire({...saisir , email : e.target.value})} required />
            <textarea name='message'  placeholder="Votre message"  onChange={(e)=>setSaisire({...saisir , message: e.target.value})} required />
          <button >Envoyer</button>
        
        </form>
      )}
      </div>
    </div> */}
    </>
  )
}

export default SousHome
