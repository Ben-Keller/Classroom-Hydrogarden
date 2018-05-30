# Import gcloud
from google.cloud import storage
import picamera
import time

camera=picamera.PiCamera()

#GOOGLE_APPLICATION_CREDENTIALS="/home/pi/Desktop/client_secret_346459219965-birmit9ibl8g4ojebl6supq8l8nmkajr.apps.googleusercontent.com.json"

#credentials=storage.Credentials()

# Enable Storage
client = storage.Client()


# Reference an existing bucket.
bucket = client.get_bucket('farmina1')

# Upload a local file to a new file to be created in your bucket.
zebraBlob = bucket.get_blob('Zebras.jpg')
#camera.start_preview()
for i in range(10):
    camera.capture('image.png', format='png')

    zebraBlob.upload_from_filename(filename='image.png')
    time.sleep(5)
    print(i)