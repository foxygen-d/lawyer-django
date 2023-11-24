from django.shortcuts import get_object_or_404, redirect, render
from django.http import HttpResponse

# from .forms import CommentForm, PostForm
from .models import Profile, About


def index(request):
    template = 'index.html'
    profile = get_object_or_404(Profile)
    context = {
        'profile': profile,
    }
    return render(request, template, context)


def about(request):
    template = 'about.html'
    profile = get_object_or_404(Profile)
    about_info = get_object_or_404(About)
    context = {
        'profile': profile,
        'about': about_info,
    }
    return render(request, template, context)


def publications(request):
    template = 'pub.html'
    return render(request, template)


def contacts(request):
    template = 'contacts.html'
    profile = get_object_or_404(Profile)
    about_info = get_object_or_404(About)
    context = {
        'profile': profile,
        'about': about_info,
    }
    return render(request, template, context)
