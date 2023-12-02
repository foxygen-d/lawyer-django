from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from django.http import FileResponse


urlpatterns = [
    path('', include('main.urls'), name='main'),
    path('admin/', admin.site.urls),
    path('robots.txt', lambda r: FileResponse(open('static/robots.txt', 'rb'))),
]

handler404 = 'main.views.page_not_found'

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL, document_root=settings.MEDIA_ROOT
    )
