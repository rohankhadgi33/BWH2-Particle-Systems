import numpy as np
import matplotlib.pyplot as plt
from skimage.morphology import medial_axis
from skimage.util import invert
from skimage.color import rgb2gray, rgba2rgb
from scipy.ndimage import distance_transform_edt

# Load image and convert to binary
skeletonImage = plt.imread('sample_img.jpg')
if skeletonImage.ndim == 3 and skeletonImage.shape[2] == 4:
    skeletonImage = rgba2rgb(skeletonImage)
binaryImage = invert(rgb2gray(skeletonImage)) > 0.5

# Get the skeleton of the image
skeleton, _ = medial_axis(binaryImage, return_distance=True)

# Generate the distance field
distanceField = distance_transform_edt(binaryImage)

# Normalize distance field to range [0,1]
distanceField /= distanceField.max()

# Save the distance field as PNG
plt.imsave('distance_field.png', distanceField, cmap='gray')


# Display the distance field
#plt.imshow(distanceField, cmap='gray')
#plt.show()
