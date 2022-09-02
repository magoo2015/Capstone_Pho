from django.db import models
from authentication.models import User
from pho_customer.models import Pho_Customers

# Create your models here.

class Reviews(models.Model):
    review_id = models.CharField(max_length=255)
    customer = models.ForeignKey(Pho_Customers, on_delete=models.CASCADE, null=True)
    isliked = models.IntegerField()
    isdisliked = models.IntegerField()