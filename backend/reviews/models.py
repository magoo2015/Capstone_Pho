from tkinter import CASCADE
from django.db import models
from authentication.models import User
from pho_customer.models import Pho_Customers
from restaurants.models import Restaurant

# Create your models here.

class Reviews(models.Model):
    customer = models.ForeignKey(Pho_Customers, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    isliked = models.IntegerField()
    isdisliked = models.IntegerField()
    yelp_id = models.CharField(max_length=255)
    comment = models.CharField(max_length=255)
    depth = 1
    