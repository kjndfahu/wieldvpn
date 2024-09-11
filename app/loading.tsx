import Image from "next/image";
import biglogo from '../assets/logo-anim-blue-gif.gif'

export default function Loading(){
    return(
        <div className="relative bg-black h-screen">
            <Image className="w-[15vw] absolute inset-0 m-auto" src={biglogo} alt="logo"/>
        </div>

    )
}