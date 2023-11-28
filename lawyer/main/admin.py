from django.contrib import admin

from .models import Profile, About, Publications


class ProfileAdmin(admin.ModelAdmin):
    list_display = (
        'surname',
        'name',
        'email',
        'phone',
    )
    empty_value_display = '-пусто-'


class PublicationsAdmin(admin.ModelAdmin):
    list_display = (
        'title',
    )
    empty_value_display = '-пусто-'


admin.site.register(Profile, ProfileAdmin)
admin.site.register(About)
admin.site.register(Publications, PublicationsAdmin)
