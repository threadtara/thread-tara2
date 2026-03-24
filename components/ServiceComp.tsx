import Image from "next/image";
import serviceFeature from "../public/features.webp";

export default function ServiceComp() {
    return (
        <div className="flex flex-col items-center justify-center min-h-auto py-2 my-12 px-4"> 
        <div className="items-center justify-center flex flex-col text-center ">
            <h1 className="font-heading text-5xl text-fabric-dark my-4">Our Services</h1>
            <p className="text-gray-600 font-serif text-lg md:text-xl max-w-3xl py-4 md:pb-8 mx-auto">Experience premium fabrics with free delivery and personalized customization.</p>
            <Image
                src={serviceFeature}
                alt="Thread Tara Services"
                width={1300}
                height={1000}
                className="rounded-lg shadow-lg"
            />
            
        </div>
        </div> 
)
}