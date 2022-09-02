from django.db import models
from authentication.models import User

# Create your models here.

class Reviews(models.Model):
    review_id = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    isliked = models.BooleanField('islike status', default=False)
    isdisliked = models.BooleanField('isdislike status', default=False)