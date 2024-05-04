import React, { useState } from 'react'
import img_food from "../../Images/food1.jpg"
import "./Dish_details.css"
function Dish_details() {
    const[increment,setIncrement]=useState(0);
    const[color,setColor]=useState([false,false,false,false,false]);

    const handelChangeColor=(index)=>{
        // passe les etat dans un tableau pour les traiter
        const SetCHange=[...color]
        SetCHange[index]=!SetCHange[index]
        setColor(SetCHange)

    }

    const Incre=()=>{
        setIncrement(increment+1)
    }
    const Decre=()=>{
        if(increment>0){
            setIncrement(increment-1)
        }
    }
   


  
  return (
    
    <div  >
      <div className='containeur' >
        <div className='img_food_details'  style={{ display: 'flex', justifyContent: 'center',alignItems:"center" }} >
            <i class="fas fa-arrow-left" ></i>
            <img src={img_food} alt='food' />
        </div>
            <div className='food_details'>
                
                    <div className="smal_details">
                      <div className='img_card'>
                        <img src={img_food} alt='food' />
                      </div>
                    <div className='fodd_text'>
                        <h4>Lycoris Blue</h4>
                        <p>Pres de kamish</p>
                    </div>
                    
                    </div>
                        <h2>La speciale Lycoris</h2>
                    <div className='stars'>

                {color.map((isFilled, index) => (
                        <i key={index} onClick={() => handelChangeColor(index)} className={isFilled ? "fas fa-star" : "far fa-star"}></i>
                    ))}

                        </div> 
                    <div className='prix_details'>
                        <h2>8000<e>fcfa</e> </h2>
                        <div className='count'>
                            <button onClick={Decre} >-</button>
                            <p> {increment} </p>
                            <button onClick={Incre} >+</button>
                        </div>

                    </div> 
                    <div className='info_plats'>
                        <p>La Spécialité de Lycoris" est un plat exquis et visuellement frappant, conçu pour enchanter les sens. Au centre de l'assiette repose une généreuse portion de filet mignon, parfaitement saisi, surmonté d'une sauce au vin rouge réduite, infusée avec des herbes aromatiques et une pointe de truffe noire. Autour du filet, une harmonie de légumes de saison — carottes violettes, asperges vertes, et petites pomme ... <a href='/'>voir plus</a></p>
                    </div>

                    <div className='panier'>
                        <button><h2>Ajouter au panier</h2></button>
                        <i class="fas fa-birthday-cake"></i>
                    </div>
                
            </div>
      </div>
      <div/>
    </div>
  )
}

export default Dish_details
