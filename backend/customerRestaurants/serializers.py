from rest_framework import serializers
from .models import CustomerRestaurant

class CustomerRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerRestaurant
        fields = ['id', 'restaurant_id', 'user_id']