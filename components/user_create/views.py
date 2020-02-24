from django.shortcuts import render

def signup(request):
    context = {
        'title': 'term of service'
    }
    return render(request, 'pages/user_create/signup.html', context)

def confirm(request):
    context = {
        'title': 'confirm'
    }
    return render(request, 'pages/user_create/confirm.html', context)
