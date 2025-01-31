import { useState } from "react"
import styles from"./primerpo.module.css"
import Link from "next/link"

export default function Primerpos({date}){
    let [agregar,setagregar]=useState("")
    let [cliente,setclientes]=useState([])

 function agregando(e){
  e.preventDefault()
let id=0 

let suma= cliente.length - 1
id = suma + 1
  
setclientes([...cliente,{nombre:agregar,id:id}])

alert(cliente.length)
setagregar(" ")
 }



return <div className={styles.div1}>
    <h2> gyuguguihkhgcgv</h2>
    <form onSubmit={ function(e){agregando(e) }}  >
    <input onChange={(a)=>{setagregar(a.target.value)    }} value={agregar} ></input>
<h1 className={styles.titulo}> ESTILO DE TRABAJOS  </h1>
<button className={styles.buton}  >
    agregar
</button>
</form>
<div>

{cliente.map( (a)=>{ return    <div key={a.id}>

<h2>{a.nombre}</h2>
</div>    })  }

</div>

{date.map((e)=>{return  <div key={e.id}>


    <h3>
    <h3>bsbsbsb</h3>
        <Link href={`${e.id}` }>
          {e.id}
          
<h3>jhxbjn</h3>
        </Link>        
       
      
    </h3>
   

</div>      })}

console.log(e.id)
</div>

}





export async function getStaticProps({params}){
    try{
 let red =await fetch("https://jsonplaceholder.typicode.com/posts" )

let date= await red.json()

return {
props:{date:date}
    
}
    } catch(error){
      console.log(error)
        
    }
        
    

}