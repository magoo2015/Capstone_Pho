from django.db import models
from authentication.models import User
# Create your models here.

class Pho_Customers(models.Model):
    customer_id = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
