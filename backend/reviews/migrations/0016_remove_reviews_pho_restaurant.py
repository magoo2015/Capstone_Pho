# Generated by Django 4.1 on 2022-09-14 05:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0015_alter_reviews_pho_restaurant'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='reviews',
            name='pho_restaurant',
        ),
    ]
