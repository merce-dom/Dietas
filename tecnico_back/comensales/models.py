from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator

class Unidad_Familiar(models.Model):
    nombre = models.CharField(max_length=50)
    imagen = models.ImageField(upload_to='unidad_familiar', blank=True, null=True)
    usuario = models.ForeignKey(User,  on_delete=models.CASCADE)
    edad = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(120)])

    def __str__(self):
        return self.nombre