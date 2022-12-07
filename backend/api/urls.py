from django.urls import path
from .views import createPatient,createDoctor,login,logout,user, createAppointment, ListAppointments, UpdateDoctor, UpdatePatient, ListPatients, ListDoctors, getPatientAppointments, UpdateMedicament, CreateMedicament, getPatientMedicaments, getDoctorAppointments, ListMedicaments


urlpatterns = [
    path("createPatient/", createPatient),
    path('updatePatient/<int:pk>/',UpdatePatient.as_view()),
    path('patients/',ListPatients.as_view()),
    path('createDoctor/',createDoctor),
    path('updateDoctor/<int:pk>/',UpdateDoctor.as_view()),
    path('doctors/',ListDoctors.as_view()),
    path('login/',login),
    path('logout/',logout),
    path('user/',user),
    path('createAppointment/',createAppointment),
    path('appointments/',ListAppointments.as_view()),
    path('appointments/<int:id>/',getPatientAppointments),
    path('appointments/doctor/<int:id>/', getDoctorAppointments),
    path('medicaments/',ListMedicaments.as_view()),
    path('createMedicament/',CreateMedicament.as_view()),
    path('updateMedicament/',UpdateMedicament.as_view()),
    path('medicaments/<int:id>/',getPatientMedicaments),
]
