from django.db import models
from authentication.models import User

# Create your models here.

class Restaurant(models.Model):
    pho_restaurant_id = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    isVegan = models.BooleanField('vegan status', default=False)
    isVegetarian = models.BooleanField('vegetarian status', default=False)
    isDelivery = models.BooleanField('delivery status', default=False)
    isPickup = models.BooleanField('pickup status', default=False)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip = models.CharField(max_length=255)


