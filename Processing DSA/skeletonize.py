import cv2
import numpy as np
from matplotlib import pyplot as plt

def skeletonize(img):
    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Threshold the image to create a binary image
    ret, thresh = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY_INV)
    
    # Apply morphological operations to get the skeleton
    size = np.size(thresh)
    skel = np.zeros(thresh.shape, dtype=np.uint8)
    
    element = cv2.getStructuringElement(cv2.MORPH_CROSS, (3, 3))
    done = False
    
    while not done:
        eroded = cv2.erode(thresh, element)
        temp = cv2.dilate(eroded, element)
        temp = cv2.subtract(thresh, temp)
        skel = cv2.bitwise_or(skel, temp)
        thresh = eroded.copy()
        
        zeros = size - cv2.countNonZero(thresh)
        if zeros == size:
            done = True
            
    return skel

# Load an image to skeletonize
skeletonImage = plt.imread('a.jpg')

# Skeletonize the image
skeleton = skeletonize(skeletonImage)

# Save the skeletonized image
plt.imsave('skeleton.png', skeleton, cmap='gray')
