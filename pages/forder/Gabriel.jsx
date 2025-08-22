import Link from "next/link"
import Image from "next/image"
import styles from"./primerpo.module.css"

export default function Gabriel(){




return <div className={styles.moda}>
    <h3>enemigo</h3>
    <h2>amigos nuevog</h2>
    
    <button>cebo</button>
<button  onClick={function(){ alert("hola minesota")}}  >
    probar
</button>
<Link target="blank" href="https://pelotainvernal.com/">
<h3>hola</h3>
</Link>
<Image
src="/imagene/1.jpg"  width={200} height={200}

className={styles.ahora}

>

</Image>


</div>



}