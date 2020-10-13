from django.shortcuts import render
from django.http import JsonResponse
from .utils import readQRCode
# Create your views here.
def index(request):
    image_name = request.GET['imageName']
    read_code = readQRCode(image_name)
    return JsonResponse({
        'transfer_ref': read_code
    })