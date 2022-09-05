from rest_framework import serializers
from .models import CustomerRestaurant

class CustomerRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerRestaurant
        fields = ['id', 'restaurant_id', 'customer_id']

    restaurant_id = serializers.IntegerField(write_only=True)