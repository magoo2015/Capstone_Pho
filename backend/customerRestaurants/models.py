from django.db import models
from authentication.models import User
from restaurants.models import Restaurant

# Create your models here.

class CustomerRestaurant(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
