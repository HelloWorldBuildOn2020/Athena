from io import BytesIO
import os
import requests

from pyzbar.pyzbar import decode
from PIL import Image


def readQRCode(image_name):
    s3_url = os.environ['s3_url']
    response = requests.get(s3_url + image_name)
    image_decode = decode(Image.open(BytesIO(response.content)))
    transfer_ref_id = image_decode[0].data.decode("utf-8")[25:43]
    return transfer_ref_id