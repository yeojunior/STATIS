import React from 'react'
import "./Connexion.css"
function Connexion() {
    const handleSubmit=(e)=>{
        e.preventDefault()
       let  data=new FormData(e.target)
       alert(data.get("nom"))
    }
  return (
    <div className='Connexion_card'>
      <div className='Connexion_title'>
        <h1>Nous sommes heureux <br/> <span>de vous revoir</span> <br/> <span>bienvenue</span> </h1>
      </div>

      <form onSubmit={handleSubmit}>


      <div className='Tape_text'>

     

    <div class="input-container">
        <i class="fas fa-envelope message-icon"></i>
        <input type="text" name='mail' placeholder="Adresse email" />
    </div>

    

    <div class="input-container">
        <i class="fas fa-lock message-icon"></i>
        <input type="text" name='mdp' placeholder="Mot de passe" />
    </div>

    <div class="input-container">
        <button>
            <p>S'inscrire</p>
        </button>
    </div>


      </div>




      </form>
      <div className='liens'>
        <a href='/'>mot de passe ouble</a>
      </div>
      <div className='or'>
        <hr className="line"/>
        <div className="">OR</div>
        <hr className="line"/>
      </div>


      <div class="input-container">
        <button className='btn_connexion'>
            <p>S'inscrire</p>
        </button>
    </div>

    </div>
  )
}

export default Connexion
