from rest_framework import serializers
from BadSantaApp.models import BadSantas,Draws

class DrawSerializer(serializers.ModelSerializer):
    class Meta:
        model = Draws
        fields = ('DrawId',
                  'DrawTotal')
        
class BadSantaSerializer(serializers.ModelSerializer):
    class Meta:
        model = BadSantas
        fields = ('BadSantaId',
                  'BadSantaName',
                  'BadSantaPlace',
                  'Draw')
