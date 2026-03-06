export interface Fabric {
  id: string;
  name: string;
  category: string;
  image: string; 
  description: string;
}

export const fabrics: Fabric[] = [
  {
    id: '1',
    name: 'Brocade Fabrics',
    category: 'Brocade',
    image: '/brocade/brocade.webp', // Look in public/brocade.jpg
    description: 'A luxurious, heavy-weight fabric featuring intricate, raised patterns woven directly into the cloth for a three-dimensional, embossed effect.',
  },
  {
    id: '2',
    name: 'Embroidery Fabrics',
    category: 'Embroidery',
    image: '/embroidery/embroidery.webp', // Look in public/embroidery.jpg
    description: 'Fine embroidery featuring heavy needlework for bridal and festive wear.',
  },
  {
    id: '3',
    name: 'Plain Fabrics',
    category: 'Plain',
    image: '/plain/plain.webp', // Look in public/plain.jpg
    description: 'High-quality, solid-colored fabrics with a soft fall and matte finish.',
  },


];