from django.db import models

# Create your models here.
class Draws(models.Model):
    DrawId = models.AutoField(primary_key=True)
    DrawTotal = models.CharField(max_length=3)

class BadSantas(models.Model):
    BadSantaId = models.AutoField(primary_key=True)
    BadSantaName = models.CharField(max_length=100)
    BadSantaPlace = models.CharField(max_length=3)
    Draw= models.CharField(max_length=3)
