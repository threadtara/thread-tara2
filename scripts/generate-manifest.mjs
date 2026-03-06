import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const manifest = {};

try {
  // Get all items in public folder
  const items = fs.readdirSync(PUBLIC_DIR);

  items.forEach((item) => {
    const itemPath = path.join(PUBLIC_DIR, item);
    
    // Only process if it's a directory (e.g., /public/silk)
  // Inside your items.forEach loop in the script
if (fs.statSync(itemPath).isDirectory()) {
  const files = fs.readdirSync(itemPath);
  
  const images = files
    .filter(file => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
    .map(file => `/${item}/${file}`)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  if (images.length > 0) {
    // FORCE LOWERCASE KEY HERE
    manifest[item.toLowerCase()] = images;
  }
}
  });

  const libDir = path.join(process.cwd(), 'lib');
  if (!fs.existsSync(libDir)) fs.mkdirSync(libDir);

  fs.writeFileSync(
    path.join(libDir, 'image-manifest.json'), 
    JSON.stringify(manifest, null, 2)
  );
  
  console.log('✅ Manifest generated with categories:', Object.keys(manifest));
} catch (error) {
  console.error('❌ Error generating manifest:', error);
}