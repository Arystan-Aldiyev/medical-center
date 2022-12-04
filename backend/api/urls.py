from django.urls import path
from .views import createPatient,createDoctor,login,logout,user


urlpatterns = [
    path("createPatient/", createPatient),
    path('createDoctor/',createDoctor),
    path('login/',login),
    path('logout/',logout),
    path('user/',user),
]
