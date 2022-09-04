from rest_framework import serializers
from .models import Pho_Customers

class PhoCustomerSerializers(serializers.ModelSerializer):
    class Meta:
        model = Pho_Customers
        fields = ['id', 'first_name', 'last_name', 'city', 'state', 'zip', 'user_id']
        depth = 1