import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const manifest = {};

try {
  // ✅ Check if public directory exists
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.warn('⚠️ public directory not found, skipping manifest generation');
    process.exit(0);
  }

  const items = fs.readdirSync(PUBLIC_DIR);

  items.forEach((item) => {
    const itemPath = path.join(PUBLIC_DIR, item);

    let stat;
    try {
      stat = fs.statSync(itemPath);
    } catch (err) {
      console.warn(`⚠️ Skipping invalid path: ${itemPath}`);
      return;
    }

    // ✅ Only process directories
    if (stat.isDirectory()) {
      let files = [];

      try {
        files = fs.readdirSync(itemPath);
      } catch (err) {
        console.warn(`⚠️ Cannot read directory: ${itemPath}`);
        return;
      }

      const images = files
        .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
        .map((file) => `/${item}/${file}`)
        .sort((a, b) =>
          a.localeCompare(b, undefined, { numeric: true })
        );

      if (images.length > 0) {
        manifest[item.toLowerCase()] = images;
      }
    }
  });

  const libDir = path.join(process.cwd(), 'lib');

  // ✅ Ensure lib directory exists
  if (!fs.existsSync(libDir)) {
    fs.mkdirSync(libDir, { recursive: true });
  }

  const outputPath = path.join(libDir, 'image-manifest.json');

  fs.writeFileSync(
    outputPath,
    JSON.stringify(manifest, null, 2),
    'utf-8'
  );

  console.log('✅ Manifest generated successfully');
  console.log('📁 Output:', outputPath);
  console.log('📦 Categories:', Object.keys(manifest));

} catch (error) {
  console.error('❌ Error generating manifest:', error);

  // 🔥 VERY IMPORTANT: fail the build properly
  process.exit(1);
}