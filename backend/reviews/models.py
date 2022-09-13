from tkinter import CASCADE
from django.db import models
from authentication.models import User
from pho_customer.models import Pho_Customers
from restaurants.models import Restaurant

# Create your models here.

class Reviews(models.Model):
    customer = models.ForeignKey(Pho_Customers, on_delete=models.CASCADE)
    isliked = models.IntegerField()
    isdisliked = models.IntegerField()
    comment = models.CharField(max_length=255)
    