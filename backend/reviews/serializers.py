from rest_framework import serializers
from .models import Reviews

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = ['isliked', 'isdisliked', 'customer_id', 'comment', 'restaurant_id', 'yelp_id']
        depth = 1
    
    customer_id = serializers.IntegerField(write_only=True)
    restaurant_id = serializers.IntegerField(write_only=True)
    