from django.shortcuts import render

def index(request):
    context = {
        'title': 'welcome'
    }
    return render(request, 'pages/portal/welcome.html', context)

def policy(request):
    context = {
        'title': 'policy'
    }
    return render(request, 'pages/portal/policy.html', context)
