from django.db import models
from authentication.models import User
from pho_customer.models import Pho_Customers
from restaurants.models import Restaurant

# Create your models here.

class CustomerRestaurant(models.Model):
    customer = models.ForeignKey(Pho_Customers, on_delete=models.CASCADE, null=True)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
