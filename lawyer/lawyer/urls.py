from django.contrib import admin
from django.urls import include, path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings
from django.conf.urls.static import static
from django.http import FileResponse
from django.urls import re_path
from  django.views.static import serve


urlpatterns = [
    path('', include('main.urls'), name='main'),
    path('admin/', admin.site.urls),
    path('robots.txt', lambda r: FileResponse(open('static/robots.txt', 'rb'))),
    re_path(r'^media/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT}), 
    re_path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
]

handler404 = 'main.views.page_not_found'
handler500 = 'main.views.server_error'
