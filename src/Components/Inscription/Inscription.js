import React from 'react'
import "./Inscription.css"

function Inscription() {
    const handleSubmit=(e)=>{
        e.preventDefault()
       let  data=new FormData(e.target)
       alert(data.get("nom"))
    }
  return (
    <div className='inscription_card'>
      <div className='inscription_title'>
        <h1>Nous vous souhaitons <br/> <span>bienvenue</span> </h1>
      </div>

      <form onSubmit={handleSubmit}>


      <div className='Tape_text'>

      <div class="input-container">
        <i class="fas fa-user message-icon"></i>
        <input type="text" name='nom' placeholder="Nom 6 Prenom"  />
    </div>

    <div class="input-container">
        <i class="fas fa-envelope message-icon"></i>
        <input type="text" name='mail' placeholder="Adresse email" />
    </div>

    <div class="input-container">
   
  <i class="fas fa-phone message-icon"></i>

        <input type="number" name='number' placeholder="Numeros de l telephone" />
    </div>

    <div class="input-container">
        <i class="fas fa-lock message-icon"></i>
        <input type="text" name='mdp' placeholder="Mot de passe" />
    </div>

    <div class="input-container">
        <button >
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
        <button className='btn_inscription'>
            <p>Se connecter</p>
        </button>
    </div>

    </div>
  )
}

export default Inscription
