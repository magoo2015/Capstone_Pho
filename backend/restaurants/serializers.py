from rest_framework import serializers
from .models  import Restaurant

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'pho_restaurant_id', 'name', 'isVegan', 'isVegetarian', 'isDelivery', 'isPickup', 'city', 'state', 'zip', 'likes']