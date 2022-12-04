from django.urls import path
from .views import createPatient,createDoctor,login,logout,user, createAppointment, ListAppointments, UpdateDoctor, UpdatePatient


urlpatterns = [
    path("createPatient/", createPatient),
    path('updatePatient/',UpdatePatient.as_view()),
    path('createDoctor/',createDoctor),
    path('updateDoctor/',UpdateDoctor.as_view()),
    path('login/',login),
    path('logout/',logout),
    path('user/',user),
    path('createAppointment/',createAppointment),
    path('appointments/',ListAppointments.as_view()),
]
