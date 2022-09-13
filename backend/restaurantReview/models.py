from django.db import models
from restaurants.models import Restaurant
from reviews.models import Reviews
# Create your models here.

class RestaurantReview(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    review = models.ForeignKey(Reviews, on_delete=models.CASCADE)
    depth = 1
    


