from django.shortcuts import render

def index(request):
    return render(request, 'helloworld/index.html', {})
