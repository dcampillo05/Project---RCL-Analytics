from django.shortcuts import render
from django.http import JsonResponse
from .models import Usuario

def index(request):
    return render(request, 'todos/index.html')
