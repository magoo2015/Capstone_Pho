from django.db import models
from authentication.models import User

# Create your models here.

class Restaurant(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    restaurant_id = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    isVegan = models.CharField(max_length=255)
    isVegetarian = models.CharField(max_length=255)
    isDelivery = models.CharField(max_length=255)
    isPickup = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip = models.CharField(max_length=255)


