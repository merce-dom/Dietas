from rest_framework import viewsets
from .models import Unidad_Familiar
from .serializers import UnidadFamiliarSerializer

class UnidadFamiliarViewSet(viewsets.ModelViewSet):
    queryset = Unidad_Familiar.objects.all()
    serializer_class = UnidadFamiliarSerializer
