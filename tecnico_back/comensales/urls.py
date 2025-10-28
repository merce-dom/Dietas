from django.urls import path, include
from rest_framework import routers
from .views import UnidadFamiliarViewSet

router = routers.DefaultRouter()
router.register(r'unidad_familiares', UnidadFamiliarViewSet, basename='unidad_familiar')

urlpatterns = [
    path('', include(router.urls)),
]
