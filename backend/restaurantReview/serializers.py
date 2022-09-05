from rest_framework import serializers
from .models import RestaurantReview

class RestaurantReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantReview
        fields = ['id', 'restaurant_id', 'review_id']

    restaurant_id = serializers.IntegerField(write_only=True)
    review_id = serializers.IntegerField(write_only=True)