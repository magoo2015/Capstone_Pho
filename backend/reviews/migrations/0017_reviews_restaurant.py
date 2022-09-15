# Generated by Django 4.1 on 2022-09-14 17:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0003_rename_restaurant_id_restaurant_pho_restaurant_id'),
        ('reviews', '0016_remove_reviews_pho_restaurant'),
    ]

    operations = [
        migrations.AddField(
            model_name='reviews',
            name='restaurant',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='restaurants.restaurant'),
            preserve_default=False,
        ),
    ]