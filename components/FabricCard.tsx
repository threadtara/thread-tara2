import Image from "next/image";
import Link from "next/link";
import { Fabric } from "@/lib/fabrics";

export default function FabricCard({ fabric }: { fabric: Fabric }) {
  return (
    <Link href={`/fabrics/${fabric.id}`} passHref>
      <div className="group relative h-96 w-full overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl cursor-pointer">
        {/* Image Container with Zoom/Pan effect */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={fabric.image}
            alt={fabric.name}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />

          {/* Dark overlay that fades in on hover */}
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/40" />
        </div>

        {/* Content that slides up */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
          {/* Badge */}
          <span className="mb-2 inline-block rounded-full bg-fabric-gold px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black">
            {fabric.category}
          </span>

          {/* Title with 'Breathe' animation on hover */}
          <h3 className="mb-1 text-2xl font-bold group-hover:animate-breathe">
            {fabric.name}
          </h3>

          <p className="opacity-0 transition-opacity delay-100 duration-300 group-hover:opacity-100">
            {fabric.description}
          </p>
        </div>
      </div>
    </Link>
  );
}