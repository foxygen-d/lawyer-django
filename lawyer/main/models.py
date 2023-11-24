from django.contrib.auth import get_user_model
from django.db import models
from django.urls import reverse
from phone_field import PhoneField


User = get_user_model()


class Profile(models.Model):
    name = models.TextField(
        verbose_name='Имя и Отчество',
        help_text='Введите Имя и Отчество',
    )
    surname = models.TextField(
        verbose_name='Фамилия',
        help_text='Введите Фамилию',
    )
    phone = PhoneField(
        verbose_name='Телефон',
        help_text='Введите номер телефона'
    )
    email = models.EmailField(
        verbose_name='Email',
        help_text='Введите email',
    )
    address = models.TextField(
        default='',
        verbose_name='Адрес',
        help_text='Введите Адрес',
    )
    href_address = models.TextField(
        default='',
        verbose_name='Ссылка на адрес',
        help_text='Введите ссылку на адрес',
    )
    href_whatsapp = models.URLField(
        verbose_name='Ссылка на WhatsApp',
        help_text='Введите ссылку на WhatsApp',
    )
    href_vk = models.URLField(
        verbose_name='Ссылка на VK',
        help_text='Введите ссылку на VK',
    )

    class Meta:
        verbose_name = 'Профиль'
        verbose_name_plural = 'Профиль'


class About(models.Model):
    text = models.TextField(
        verbose_name='Текст',
        help_text='Введите текст',
    )
    work_time = models.TextField(
        verbose_name='Период работы',
        help_text='Введите период работы',
    )
    work_place = models.TextField(
        verbose_name='Место работы',
        help_text='Введите место работы',
    )
    id_num = models.TextField(
        verbose_name='Номер удостоверения',
        help_text='Введите номер удостоверения',
    )
    id_url = models.URLField(
        verbose_name='Ссылка на удостоверение',
        help_text='Введите ссылку на удостоверение',
    )

    class Meta:
        verbose_name = 'Обо мне'
        verbose_name_plural = 'Обо мне'


class Publications(models.Model):
    title = models.TextField()
    description = models.TextField()

    class Meta:
        verbose_name = 'Публикации'
        verbose_name_plural = 'Публикации'


# class Ask(models.Model):
#     name = models.TextField()
#     email = models.EmailField()
#     text = models.TextField()
