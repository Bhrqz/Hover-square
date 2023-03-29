import React, {useState} from 'react'


const randomInt = () =>{
    return Math.floor(Math.random()*255)
}



export default function CuadroColor() {

    const [IsHover, setIsHover] = useState(false);

    
    const CreateColors =()=>{

        let red = randomInt()
        let green = randomInt()
        let blue = randomInt()
    
        return (`rgb(${red},${green},${blue})`)
    
    }


    


const MovingColor = {
    backgroundColor:CreateColors(),
  
}



    const MouseHover = () => {
        setIsHover(true)
        CreateColors()
    }

    const MouseLeave = () =>{
        setIsHover(false)
    }

    const handleClick = (e) => {
        if(e.detail===2) {
            setIsHover(false)
        }
    }

  return (
    <div>
        <h1> Hover square</h1>
        <h3>Al entrar y salir del cuadro, cambiará de color.</h3>
        <h3>Con doble Click, se elimina el cambio de color.</h3>

      <div className='cuadrado' onClick={handleClick} onMouseOver={MouseHover} onPointerLeave={MouseLeave} style={IsHover? (MovingColor):null}>
      


      </div>


    </div>
  )
}
