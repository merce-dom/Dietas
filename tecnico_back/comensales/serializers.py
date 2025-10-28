from rest_framework import serializers
from .models import Unidad_Familiar

class UnidadFamiliarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unidad_Familiar
        fields = '__all__'
