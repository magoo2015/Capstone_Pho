# Generated by Django 4.1 on 2022-09-13 21:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0003_rename_restaurant_id_restaurant_pho_restaurant_id'),
        ('reviews', '0008_remove_reviews_pho_restaurant_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='reviews',
            name='pho_restaurant',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='restaurants.restaurant'),
        ),
    ]
