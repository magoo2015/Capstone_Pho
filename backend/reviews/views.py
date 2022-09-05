from functools import partial
from urllib import response
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import ReviewSerializer
from .models import Reviews
from reviews import serializers

@api_view(['GET'])
@permission_classes([AllowAny])
def review_list(request):
    reviews = Reviews.objects.all()
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def new_review(request):
    serializer = ReviewSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', "DELETE"])
@permission_classes([IsAuthenticated])
def review_detail(request, pk):
    reviews = get_object_or_404(Reviews, pk=pk)

    if request.method == 'GET':
        serializer = ReviewSerializer(reviews)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ReviewSerializer(reviews, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        reviews.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def likes(request, pk):
    type = request.query_params.get('type')
    print(type)

    if type == 'likes':
        reviews = Reviews.objects.get(pk=pk)

        data = {'isliked': reviews.isliked + int(1) }
        serializer = ReviewSerializer(reviews, data=data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif type == 'dislikes':
        reviews = Reviews.objects.get(pk=pk)

        data = {'isdisliked': reviews.isdisliked + int(1) }
        serializer = ReviewSerializer(reviews, data=data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    


        