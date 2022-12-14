# Generated by Django 4.1 on 2022-09-02 21:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pho_customer', '0001_initial'),
        ('reviews', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='reviews',
            name='user',
        ),
        migrations.AddField(
            model_name='reviews',
            name='customer',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='pho_customer.pho_customers'),
        ),
        migrations.AlterField(
            model_name='reviews',
            name='isdisliked',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='reviews',
            name='isliked',
            field=models.IntegerField(),
        ),
    ]
