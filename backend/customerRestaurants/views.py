from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import CustomerRestaurantSerializer
from .models import CustomerRestaurant
from customerRestaurants import serializers

@api_view(['GET', 'POST'])
def custRestaurant_list(request):

    if request.method =='GET':
        custRestaurant = CustomerRestaurant.objects.all()
        serializer = CustomerRestaurantSerializer(custRestaurant, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = CustomerRestaurantSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)