# Generated by Django 2.2.16 on 2023-11-25 10:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_auto_20231124_2214'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ask',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(verbose_name='Имя')),
                ('email', models.EmailField(max_length=254, verbose_name='Почта')),
                ('message', models.TextField(verbose_name='Сообщение')),
            ],
        ),
        migrations.CreateModel(
            name='Publications',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(help_text='Введите заголовок', verbose_name='Заголовок')),
                ('image', models.ImageField(help_text='Добавьте картинку', upload_to='', verbose_name='Картинка')),
                ('description', models.TextField()),
            ],
            options={
                'verbose_name': 'Публикации',
                'verbose_name_plural': 'Публикации',
            },
        ),
        migrations.AlterField(
            model_name='profile',
            name='address',
            field=models.TextField(help_text='Введите Адрес', verbose_name='Адрес'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='href_address',
            field=models.TextField(help_text='Введите ссылку на адрес', verbose_name='Ссылка на адрес'),
        ),
    ]
