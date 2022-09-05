from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import RestaurantReviewSerializer
from .models import RestaurantReview
from restaurantReview import serializers


@api_view(['GET', 'POST'])
def restaurantReview_list(request):

    if request.method == 'GET':
        reviews = RestaurantReview.objects.all()
        serializer = RestaurantReviewSerializer(reviews, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = RestaurantReviewSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def restaurantReview_detail(request, pk):
    reviews = get_object_or_404(RestaurantReview, pk=pk)

    if request.method == 'GET':
        serializer = RestaurantReviewSerializer(reviews)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = RestaurantReviewSerializer(reviews, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        reviews.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
