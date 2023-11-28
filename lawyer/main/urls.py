from django.urls import path

from . import views

app_name = 'lawyer'

urlpatterns = [
    path('', views.index, name='main'),
    path('about/', views.about, name='about'),
    path('publications/', views.publications, name='pub'),
    path('contacts/', views.contacts, name='contacts'),
]
