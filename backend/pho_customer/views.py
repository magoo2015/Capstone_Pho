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

@api_view(['Get'])
def customer_detail(request, pk):
    try:
        customers = Pho_Customers.objects.get(pk=pk)
        serializer = PhoCustomerSerializers(customers)
        return Response(serializer.data)

    except Pho_Customers.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
        