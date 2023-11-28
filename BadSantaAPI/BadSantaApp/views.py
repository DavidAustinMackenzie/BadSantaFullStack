from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from BadSantaApp.models import BadSantas, Draws
from BadSantaApp.serializers import BadSantaSerializer, DrawSerializer

# Create your views here.
@csrf_exempt
def drawApi(request, id=0):
    if request.method=='GET':
        draws = Draws.objects.all()
        draws_serializer = DrawSerializer(draws, many=True)
        return JsonResponse(draws_serializer.data, safe=False)
    
    elif request.method=='POST':
        draw_data=JSONParser().parse(request)
        draws_serializer = DrawSerializer(data=draw_data)
        print(draw_data)
        if draws_serializer.is_valid():
            draws_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to add.",safe=False)
    
    elif request.method=='PUT':
        draw_data = JSONParser().parse(request)
        draw = Draws.objects.get(DrawId=draw_data['DrawId'])
        draws_serializer = DrawSerializer(draw,data=draw_data)
        if draws_serializer.is_valid():
            draws_serializer.save()
            return JsonResponse("Updated Succesfully!",safe=False)
        return JsonResponse("Failed to update.", safe=False)
    
    elif request.method=='DELETE':
        draw = Draws.objects.get(DrawId = id)
        draw.delete()
        return JsonResponse('Removed succesfully!',safe=False)


@csrf_exempt
def badSantaApi(request, id=0):
    if request.method=='GET':
        badsantas = BadSantas.objects.all()
        badsantas_serializer = BadSantaSerializer(badsantas, many=True)
        return JsonResponse(badsantas_serializer.data, safe=False)
    
    elif request.method=='POST':
        badsanta_data=JSONParser().parse(request)
        badsantas_serializer = BadSantaSerializer(data=badsanta_data)
        print(badsanta_data)
        if badsantas_serializer.is_valid():
            badsantas_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to add.",safe=False)
    
    elif request.method=='PUT':
        badsanta_data = JSONParser().parse(request)
        print(badsanta_data)
        badsanta = BadSantas.objects.get(BadSantaId=badsanta_data['BadSantaId'])
        badsantas_serializer = BadSantaSerializer(badsanta,data=badsanta_data)
        if badsantas_serializer.is_valid():
            badsantas_serializer.save()
            return JsonResponse("Updated Succesfully!",safe=False)
        return JsonResponse("Failed to update.", safe=False)
    
    elif request.method=='DELETE':
        badsanta = BadSantas.objects.get(BadSantaId = id)
        badsanta.delete()
        return JsonResponse('Removed succesfully!',safe=False)
