from django.contrib.auth import get_user_model
from django.db import models
from django.urls import reverse
from phonenumber_field.modelfields import PhoneNumberField


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
    phone = PhoneNumberField(
        verbose_name='Телефон',
        help_text='Введите номер телефона'
    )
    email = models.EmailField(
        verbose_name='Email',
        help_text='Введите email',
    )
    photo = models.ImageField(
        verbose_name='Фото',
        help_text='Добавьте фото',
        upload_to='images/',
    )
    address = models.TextField(
        verbose_name='Адрес',
        help_text='Введите Адрес',
    )
    url_address = models.TextField(
        verbose_name='Ссылка на адрес',
        help_text='Введите ссылку на адрес',
    )
    url_whatsapp = models.URLField(
        verbose_name='Ссылка на WhatsApp',
        help_text='Введите ссылку на WhatsApp',
    )
    url_vk = models.URLField(
        verbose_name='Ссылка на VK',
        help_text='Введите ссылку на VK',
    )
    map = models.URLField(
        verbose_name='Код карты',
        help_text='Введите код карты',
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


class VideoAbout(models.Model):
    video = models.FileField(
        verbose_name='Видео',
        help_text='Добавьте видео',
        upload_to='videos/',
    )

    class Meta:
        verbose_name = 'Видео'
        verbose_name_plural = 'Видео'


class Publications(models.Model):
    title = models.TextField(
        verbose_name='Заголовок',
        help_text='Введите заголовок',
    )
    image = models.ImageField(
        verbose_name='Картинка',
        help_text='Добавьте картинку',
        upload_to='images/',
    )
    gif = models.ImageField(
        verbose_name='GIF к посту',
        help_text='Добавьте GIF к посту',
        upload_to='gif/',
    )
    description = models.TextField(
        verbose_name='Текст публикации',
        help_text='Введите текст публикации',
    )

    class Meta:
        verbose_name = 'Публикации'
        verbose_name_plural = 'Публикации'
