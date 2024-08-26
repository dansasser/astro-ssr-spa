from PIL import Image, ImageFilter

# Open the original image
original_image_path = "/mnt/data/Screenshot 2024-08-16 120336.png"
original_image = Image.open(original_image_path)

# Resize the original image to 1280x720 px
new_size = (1280, 720)

# Create a blurred background by resizing the image to the new size and then applying a blur
background = original_image.resize(new_size)
background = background.filter(ImageFilter.GaussianBlur(radius=10))

# Calculate position to center the original image on the new background
original_width, original_height = original_image.size
position = ((new_size[0] - original_width) // 2, (new_size[1] - original_height) // 2)

# Paste the original image onto the blurred background
background.paste(original_image, position)

# Save the result
output_path = "/mnt/data/resized_blurred_image.png"
background.save(output_path)

output_path
