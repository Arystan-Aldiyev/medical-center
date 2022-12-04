from django.shortcuts import render
from rest_framework.decorators import api_view
from .serializers import PatientSerializer, DoctorSerializer, AppointmentSerializer
from rest_framework.response import Response
from .models import Patient, Doctor, User, Appointment
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.conf import settings
import datetime
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework import status
# Create your views here.


@api_view(http_method_names=["POST"])
def createPatient(request):
    serializer = PatientSerializer(request.data)
    if not serializer.is_valid:
        return Response({"detail": "please enter valid data"})
    username = serializer.data["name"] + " " + serializer.data["surname"]
    user = User.objects.create_user(username=username, password=serializer.data["password"])
    user.is_patient = True
    s = serializer.data
    patient = Patient.objects.create(
        user=user,
        date_of_birth=s["date_of_birth"],
        iin=s["iin"],
        id_number=s["id_number"],
        name=s["name"],
        surname=s["surname"],
        middlename=s["middlename"],
        blood_group=s["blood_group"],
        emrgency_contact_number=s["emrgency_contact_number"],
        contact_number=s["contact_number"],
        adress=s["adress"],
        martial_status=s["martial_status"],
    )
    patient.save()
    return Response({"detail": "success"})


@api_view(http_method_names=["POST"])
def createDoctor(request):
    serializer = DoctorSerializer(request.data)
    if not serializer.is_valid:
        return Response({"detail": "please enter valid data"})
    username = serializer.data["name"] + " " + serializer.data["surname"]
    user = User.objects.create_user(username=username, password=serializer.data["password"])
    user.is_doctor = True
    s = serializer.data
    doctor = Doctor.objects.create(
        user=user,
        date_of_birth=s["date_of_birth"],
        iin=s["iin"],
        id_number=s["id_number"],
        name=s["name"],
        surname=s["surname"],
        middlename=s["middlename"],
        contact_number=s["contact_number"],
        department_id=s["department_id"],
        specialization_id=s["specialization_id"],
        experience=s["experience"],
        category=s["category"],
        price=["price"],
        schedule=s["schedule"],
        degtee=s["degtee"],
        rating=s["rating"],
        adress=s["adress"],
    )
    return Response({"detail": "success"})

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
        
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
            }

@api_view(http_method_names=["POST"])
def login(request,*args, **kwargs):
    data = request.data
    response = Response()        
    username = data.get('username', None)
    password = data.get('password', None)
    user = authenticate(username=username, password=password)
    if user is not None:
        data = get_tokens_for_user(user)
        response.set_cookie(
                            key = settings.SIMPLE_JWT['AUTH_COOKIE'], 
                            value = data["access"],
                            expires = datetime.timedelta(hours=24),
                            secure = settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
                            httponly = settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
                            samesite = settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE']
                            )
        return response
    else:
        return Response({"message" : "Invalid username or password!"},status=status.HTTP_404_NOT_FOUND)

@api_view(http_method_names=["POST"])
def logout(request):
    response = Response()
    response.delete_cookie('access_token')
    return response

from rest_framework_simplejwt.backends import TokenBackend
@api_view(http_method_names=['GET'])
def user(request):
    token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
    data = {'token': token}
    try:
        valid_data = TokenBackend(algorithm='HS256').decode(token,verify=True)
        user = valid_data['user']
        request.user = user
        return Response({'username' : f'{request.user}'})
    except:
        return Response({'message':'user not found'},status=status.HTTP_404_NOT_FOUND)
    
    
class UpdatePatient(RetrieveUpdateDestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    
class UpdateDoctor(RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    
@api_view(http_method_names=['POST'])
def createAppointment(request):
    serializer = AppointmentSerializer(request.data)
    if (not serializer.is_valid()):
        return Response({'message' : 'Provide valid data'})
    doctor = Doctor.objects.get(id = serializer.validated_data['doctor'])
    appointment = Appointment(
        start_time = serializer.validated_data['start_time'],
        end_time = serializer.validated_data['end_time'],
        doctor = serializer.validated_data['doctor'],
        patient = serializer.validated_data['patinet'],
        price = doctor.price
    )
    appointment.save()
    return Response({'detail':'success'}, status=status.HTTP_201_CREATED)

class ListAppointments(ListAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer