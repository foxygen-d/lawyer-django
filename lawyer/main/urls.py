from django.urls import path

from . import views
from django.contrib.sitemaps.views import sitemap

from .sitemap import StaticViewSitemap


sitemaps = {
    'static': StaticViewSitemap,
}

app_name = 'lawyer'

urlpatterns = [
    path('', views.index, name='main'),
    path('about/', views.about, name='about'),
    path('publications/', views.publications, name='pub'),
    path('contacts/', views.contacts, name='contacts'),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}),
]
