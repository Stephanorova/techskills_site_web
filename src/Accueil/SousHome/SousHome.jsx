import React from 'react';
import { data3 } from './Data3'
import { data4 } from './Data4'
import'./index.css'
import Slide from '../Slide/Slide';





const SousHome = () => {
  
  return (
   <>
    <div className="bonneraison2">
        <div className="container">
           <h1>GOOD REASONS TO CHOOSE US...</h1>
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
    </>
  )
}

export default SousHome
