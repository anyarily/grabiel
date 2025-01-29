import react from "react";

export default function Multipos({date}){

return<div>

<h1> {date.body}  </h1>
<h1>{date.id}</h1>

</div>



}

export async function getStaticPaths(){
    console.log("Hola")
    try{

return {
    paths:[],
   fallback: "blocking"
}
}catch(error){
        console.log(error)

    }

}


export async function getStaticProps({params}){
    try{
 let red =await fetch("https://jsonplaceholder.typicode.com/posts/" + params.id)
console.log(red)
let date= await red.json()

return {
props:{date:date}
    
}
    } catch(error){
      console.log(error)
        
      return {
        props:{date:null}
            
        }


    }
        
    

}
