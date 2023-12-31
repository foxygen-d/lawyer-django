from django.shortcuts import get_object_or_404, redirect, render
from django.core.mail import send_mail
from django.http import HttpResponse
from django.template.loader import get_template

from .forms import AskForm
from .models import Profile, About, Publications, VideoAbout
from lawyer.settings import EMAIL_HOST_USER


def index(request):
    profile = get_object_or_404(Profile)
    context = {
        'profile': profile,
    }
    return render(request, 'index.html', context)


def about(request):
    profile = get_object_or_404(Profile)
    about_info = get_object_or_404(About)
    video = VideoAbout.objects.all()
    context = {
        'profile': profile,
        'about': about_info,
        'text': about_info.text.split(';'),
        'videos': video,
    }
    return render(request, 'about.html', context)


def publications(request):
    profile = get_object_or_404(Profile)
    posts = Publications.objects.all()
    
    for post in posts:
        post.text_list = post.description.split(';')

    context = {
        'profile': profile,
        'posts': posts,
    }
    return render(request, 'pub.html', context)


def contacts(request):
    profile = get_object_or_404(Profile)
    context = {
        'profile': profile,
    }
    if request.method == 'POST':
        form = AskForm(request.POST)
        if form.is_valid():
            send_message(
                form.cleaned_data['name'],
                form.cleaned_data['email'],
                form.cleaned_data['message'],
                profile.email,
                )
            context['success'] = 1
    else:
        form = AskForm()

    context['form'] = form
    return render(request, 'contacts.html', context)


def send_message(name, email, message, email_to):
    text = get_template('message.html')
    context = {
        'name': name,
        'email': email,
        'message': message,
    }
    subject = 'Сообщение с сайта'
    text_content = text.render(context)

    send_mail(subject, text_content, EMAIL_HOST_USER, [email_to])


def page_not_found(request, exception):
    return render(request, '404.html', status=404)


def server_error(request):
    return render(request, '500.html', status=500)
