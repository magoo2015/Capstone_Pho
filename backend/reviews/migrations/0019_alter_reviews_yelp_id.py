# Generated by Django 4.1 on 2022-09-15 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0018_reviews_yelp_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reviews',
            name='yelp_id',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]