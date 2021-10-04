import React, { Fragment, useState } from 'react'//importamos la libreria de react 

const MiComponente = () => {
    //Hooks
    const [marca, setModelo] = useState("")//Los Set parten sin ningún valor por defecto, el contenido que es pasado via formuario queda guardado dentro del set y luego se lo pasamos a la variable marca
    const [modelo, setMarca] = useState("")
    const [patente, setPatente] = useState("")
    const [autos, setAutos] = useState([])

    const handleInputChangeModelo = (event) => {//Este evento se activa cuando el usuario empieza a llenar el formulario 
        //console.log(event.target.value)
        setMarca(event.target.value)//el evento es el que recoge el contenido que va en los casilleros del formulario, value quiere decir que accedemos a su contenido numerico
    }

    const handleInputChangeMarca = (event) => {
        //console.log(event.target.value)
        setModelo(event.target.value)

    }

    const handleInputChangePatente = (event) => {
        
        setPatente(event.target.value)
    
    }

    const enviarDatos = () => {//este envento se activa cuando el usuario hace click en enviar
        // alert("Entro aqui")
        // console.log("Enviando datos nombre:"+nombre+" y apellido:"+apellido)
        //console.log(`Enviando datos nombre:${nombre} y apellido:${apellido}`)

        
        if(modelo !== "" && marca !== "" && patente !== "" ){
            
            if(patente.length === 6){
                let nuevo = {//guardamos la marca, modelo y la patente dentro de un objeto
                    model: modelo,
                    marc: marca,
                    patent: patente
                }
                setAutos(autos => [...autos, nuevo])//callback (autos)=>{...autos, nuevo}
                setMarca("")//seteamos de nuevo con vacios para dejar los casilleros en blanco 
                setModelo("")
                setPatente("")
    
            }else{
                alert('La pantente lleva 6 digitos')
            }
    
        }else{
            alert('debe completar todos los campos')
        }

        // if(modelo === ""){//Valido que la casilla modelo no venga vacia 
        //     alert('Casilla modelo vacía')
        // }

        // if(marca === ""){//Los 3 === quiere decir que aparte de tener el mismo valor, tambien seran del mismo tipo
        //     alert('Casilla marca vacía')
        // }
        
        // if(patente === ""){
        //     alert('Casilla patente vacía')
        // }

        // if(patente.length === 6){
        //     let nuevo = {
        //         model: modelo,
        //         marc: marca,
        //         pantent: patente
        //     }
        //     setAutos(autos => [...autos, nuevo])
        //     setMarca("")
        //     setModelo("")
        //     setPatente("")

        // }else{
        //     alert('La pantente lleva 6 digitos')
        // }

    }

    return (
        //React nos permite crear una mezcla de html con javascrip llamada JSX
        <Fragment>
            <h1>Formulario</h1>
            <div>
                <div>
                    <input type="text" placeholder="Modelo" name="Modelo" onChange={handleInputChangeModelo} value={modelo} ></input>
                </div>

                <div>
                    <input type="text" placeholder="Marca" name="Marca" onChange={handleInputChangeMarca} value={marca}></input>
                </div>
                <div>
                    <input type="text" placeholder="Patente" name="Patente" onChange={handleInputChangePatente} value={patente}></input>
                </div>
                <button onClick={enviarDatos}>Enviar</button>  

                <div className="users">
                    {autos.map((auto) => (
                        //map funciona de la misma manera que el foreach
                        <li>Modelo: {auto.model} | Marca: {auto.marc} | Patente: {auto.patent}</li>//imprimo por pantalla lo enviado en el formulario 

                    ))}
                </div>

            </div>
        </Fragment>

    )
}
export default MiComponente