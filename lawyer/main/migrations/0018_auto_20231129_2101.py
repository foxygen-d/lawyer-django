# Generated by Django 2.2.16 on 2023-11-29 21:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0017_auto_20231129_2050'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='map',
            field=models.URLField(help_text='Введите код карты', verbose_name='Код карты'),
        ),
    ]