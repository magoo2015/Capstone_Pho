from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import PhoCustomerSerializers
from .models import Pho_Customers
from pho_customer import serializers


@api_view(['GET', 'POST'])
def customer_list(request):

    if request.method == 'GET':
        customers = Pho_Customers.objects.all()
        serializer = PhoCustomerSerializers(customers, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PhoCustomerSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def customer_detail(request, pk):
    customers = get_object_or_404(Pho_Customers, pk=pk)

    if request.method == 'GET':
        serializer = PhoCustomerSerializers(customers)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = PhoCustomerSerializers(customers, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        customers.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


    
    

        