from django.urls import re_path
from BadSantaApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    re_path(r'^badsanta/$',views.badSantaApi),
    re_path(r'^badsanta/([0-9]+)$',views.badSantaApi),
    
    re_path(r'^draw/$',views.drawApi),
    re_path(r'^draw/([0-9]+)$',views.drawApi)
]