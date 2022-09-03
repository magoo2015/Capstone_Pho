from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import RestaurantSerializer
from .models import Restaurant
from restaurants import serializers


@api_view(['GET', 'POST'])
def restaurant_list(request):
    if request.method == 'GET':
        restaurants = Restaurant.objects.all()
        serializer = RestaurantSerializer(restaurants, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = RestaurantSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def restaurant_detail(request, pk):
    restaurants = get_object_or_404(Restaurant, pk=pk)

    if request.method == 'GET':
        serializer = RestaurantSerializer(restaurants)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = RestaurantSerializer(restaurants, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        restaurants.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

