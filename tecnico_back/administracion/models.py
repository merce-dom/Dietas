from django.db import models
from django.contrib.auth.models import User

class Aplicacion(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.TextField(max_length=200, blank=True)
    imagen = models.ImageField(upload_to='administracion', blank=True, null=True)
    url = models.CharField(max_length=50, unique=True)
    usuarios = models.ManyToManyField(User, blank=True)

    def __str__(self):
        return self.nombre

class Rol(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre

class Perfil(models.Model):
    usuario = models.OneToOneField(User, on_delete=models.CASCADE, related_name='perfil')
    rol = models.ForeignKey(Rol, on_delete=models.CASCADE)

    def __str__(self):
        return self.usuario.get_full_name()

