import React from 'react'
import "./Card_food.css"
import Card from '../../../Images/food1.jpg'
import FoodData from "../../../DATABASE/Food.json"

function Card_food() {
  return (
    <div div className='Bg_container'>
    <div className='container'>
      <div className='big_card'>
        <div className='list-plats1'>
            <img src= {Card} alt='food'/>
        </div>
        <div className='list-text'>
            <h4>Burger 1pcs</h4>
            <p>Plays de resistance</p>
            <div className='prix'>
                <h2>8000<span>fcfa</span></h2>
                <i class="fas fa-heart"></i>

            </div>
        </div>
      </div>




      <div className='big_card'>
        <div className='list-plats1'>
            {/* {FoodData.map(food=>({
                <img key={food.id} src= {} alt='food'/>
            }))} */}
            <img src= {Card} alt='food'/>
        </div>
        <div className='list-text'>
            <h4>Burger 1pcs</h4>
            <p>Plays de resistance</p>
            <div className='prix'>
                <h2>8000<span>fcfa</span></h2>
                <i class="fas fa-heart"></i>

            </div>
        </div>
      </div>





      <div className='big_card'>
        <div className='list-plats1'>
            <img src= {Card} alt='food'/>
        </div>
        <div className='list-text'>
            <h4>Burger 1pcs</h4>
            <p>Plays de resistance</p>
            <div className='prix'>
                <h2>8000<span>fcfa</span></h2>
                <i class="fas fa-heart"></i>

            </div>
        </div>
      </div>

      <div className='big_card'>
        <div className='list-plats1'>
            <img src= {Card} alt='food'/>
        </div>
        <div className='list-text'>
            <h4>Burger 1pcs</h4>
            <p>Plays de resistance</p>
            <div className='prix'>
                <h2>8000<span>fcfa</span></h2>
                <i class="fas fa-heart"></i>

            </div>
        </div>
      </div>

      <div className='big_card'>
        <div className='list-plats1'>
            <img src= {Card} alt='food'/>
        </div>
        <div className='list-text'>
            <h4>Burger 1pcs</h4>
            <p>Plays de resistance</p>
            <div className='prix'>
                <h2>8000<span>fcfa</span></h2>
                <i class="fas fa-heart"></i>

            </div>
        </div>
      </div>

      <div className='big_card'>
        <div className='list-plats1'>
            <img src= {Card} alt='food'/>
        </div>
        <div className='list-text'>
            <h4>Burger 1pcs</h4>
            <p>Plays de resistance</p>
            <div className='prix'>
                <h2>8000<span>fcfa</span></h2>
                <i class="fas fa-heart"></i>

            </div>
        </div>
      </div>

      <div className='big_card'>
        <div className='list-plats1'>
            <img src= {Card} alt='food'/>
        </div>
        <div className='list-text'>
            <h4>Burger 1pcs</h4>
            <p>Plays de resistance</p>
            <div className='prix'>
                <h2>8000<span>fcfa</span></h2>
                <i class="fas fa-heart"></i>

            </div>
        </div>
      </div>

      <div className='big_card'>
        <div className='list-plats1'>
            <img src= {Card} alt='food'/>
        </div>
        <div className='list-text'>
            <h4>Burger 1pcs</h4>
            <p>Plays de resistance</p>
            <div className='prix'>
                <h2>8000<span>fcfa</span></h2>
                <i class="fas fa-heart"></i>

            </div>
        </div>
      </div>

      <div className='big_card'>
        <div className='list-plats1'>
            <img src= {Card} alt='food'/>
        </div>
        <div className='list-text'>
            <h4>Burger 1pcs</h4>
            <p>Plays de resistance</p>
            <div className='prix'>
                <h2>8000<span>fcfa</span></h2>
                <i class="fas fa-heart"></i>

            </div>
        </div>
      </div>

      
      <div className='big_card'>
        <div className='list-plats1'>
            <img src= {Card} alt='food'/>
        </div>
        <div className='list-text'>
            <h4>Burger 1pcs</h4>
            <p>Plays de resistance</p>
            <div className='prix'>
                <h2>8000<span>fcfa</span></h2>
                <i class="fas fa-heart"></i>

            </div>
        </div>
      </div>

      <div className='big_card'>
        <div className='list-plats1'>
            <img src= {Card} alt='food'/>
        </div>
        <div className='list-text'>
            <h4>Burger 1pcs</h4>
            <p>Plays de resistance</p>
            <div className='prix'>
                <h2>8000<span>fcfa</span></h2>
                <i class="fas fa-heart"></i>

            </div>
        </div>
      </div>

      <div className='big_card'>
        <div className='list-plats1'>
            <img src= {Card} alt='food'/>
        </div>
        <div className='list-text'>
            <h4>Burger 1pcs</h4>
            <p>Plays de resistance</p>
            <div className='prix'>
                <h2>8000<span>fcfa</span></h2>
                <i class="fas fa-heart"></i>

            </div>
        </div>
      </div>
      
      
      
    </div>

    </div> 

    // <div div className='Bg_container'>
    //   <div className='container'> 
    //   {FoodData.map(food => (
    //     <div className='big_card' key={food.id}>
    //       <div className='list-plats1'>
    //         <img src={food.image} alt={`Food ${food.id}`} />
    //       </div>
    //       <div className='list-text'>
    //         <h4>{food.name}</h4>
    //         <p>{food.description}</p>
    //         <div className='prix'>
    //           <h2>{food.price}<span>{food.currency}</span></h2>
    //           <i className="fas fa-heart"></i>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    //   </div> 
    // </div>
  )
}

export default Card_food
