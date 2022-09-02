from rest_framework import serializers
from .models import Reviews

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = ['id', 'review_id', 'isliked', 'isdisliked', 'user_id']