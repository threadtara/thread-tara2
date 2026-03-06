import os
from PIL import Image

def process_and_replace(directory, category_name, quality=65, max_width=1600):
    extensions = ('.jpg', '.jpeg', '.png', '.tiff', '.bmp')
    
    # Get all image files and sort them to keep your order consistent
    files = sorted([f for f in os.listdir(directory) if f.lower().endswith(extensions)])
    
    if not files:
        print("No images found to process.")
        return

    print(f"Transforming {len(files)} images to Optimized WebP...")

    for index, filename in enumerate(files):
        old_path = os.path.join(directory, filename)
        
        # Determine new name: category.webp for first, category1.webp for others
        new_filename = f"{category_name}.webp" if index == 0 else f"{category_name}{index}.webp"
        new_path = os.path.join(directory, new_filename)

        try:
            with Image.open(old_path) as img:
                # Convert to RGB
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGB")

                # Resize
                if img.width > max_width:
                    w_percent = (max_width / float(img.width))
                    h_size = int((float(img.height) * float(w_percent)))
                    img = img.resize((max_width, h_size), Image.Resampling.LANCZOS)

                # Save as WebP
                img.save(new_path, "WEBP", quality=quality, method=6)

            # DELETE the old file if the name changed or if it was a different extension
            if old_path != new_path:
                os.remove(old_path)
                
            print(f"Converted: {filename} -> {new_filename} ({os.path.getsize(new_path)//1024} KB)")
            
        except Exception as e:
            print(f"Error on {filename}: {e}")

    print("\nDone! All images are now WebP and correctly numbered.")

if __name__ == "__main__":
    folder = input("Enter folder path: ").strip()
    cat = input("Enter category name (e.g., brocade): ").strip()
    process_and_replace(folder, cat)