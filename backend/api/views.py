from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from .serializers import PatientSerializer, DoctorSerializer, AppointmentSerializer, UserDoctorSerializer, UserPatientSerializer, MedicamentSerializer
from rest_framework.response import Response
from .models import Patient, Doctor, User, Appointment, Medicament
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.conf import settings
import datetime
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView, CreateAPIView, UpdateAPIView
from rest_framework import status
from rest_framework_simplejwt.tokens import AccessToken
from itertools import chain
from rest_framework import permissions, pagination
# Create your views here.

class ListMedicaments(ListAPIView):
    queryset = Medicament.objects.all()
    serializer_class = MedicamentSerializer
    
    
class ListPatients(ListAPIView):
    queryset = Patient.objects.all()
    serializer_class = UserPatientSerializer
    
class ListDoctors(ListAPIView):
    queryset = Doctor.objects.all()
    serializer_class = UserDoctorSerializer

class CreateMedicament(CreateAPIView):
    queryset = Medicament.objects.all()
    serializer_class = MedicamentSerializer

class UpdateMedicament(UpdateAPIView):
    serializer_class = MedicamentSerializer
    queryset = Medicament.objects.all()

@api_view(http_method_names=["POST"])
@permission_classes([permissions.IsAdminUser])
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
        emergency_contact_number=s["emergency_contact_number"],
        contact_number=s["contact_number"],
        address=s["address"],
        marital_status=s["marital_status"],
    )
    user.save()
    return Response({"detail": "success"})


@api_view(http_method_names=["POST"])
@permission_classes([permissions.IsAdminUser])
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
        price=s["price"],
        schedule_details=s["schedule_details"],
        degree=s["degree"],
        rating=s["rating"],
        address=s["address"],
        homepage_url = s['homepage_url']
    )
    user.save()
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

@api_view(http_method_names=['GET'])
def user(request):
    user = getUser(request)
    if user:
        if user.is_doctor:
            doctor = Doctor.objects.get(user=user)
            serializer = UserDoctorSerializer(doctor)
            response = serializer.data
            response['userType'] = 'doctor'
            return Response(data=response)
        elif user.is_patient:
            patient = Patient.objects.get(user=user)
            serializer = UserPatientSerializer(patient)
            response = serializer.data
            response['userType'] = 'patient'
            return Response(data=response)
        else:
            response = {}
            response['userType'] = 'admin'
            response['name'] = user.username
            response['surname'] = ''
            return Response(data=response)
    return Response({'message':'user not found'},status=status.HTTP_404_NOT_FOUND)
    
@api_view(http_method_names=['DELETE'])
def deletePatient(request,pk):
    print("Start")
    patient = Patient.objects.get(id=pk)
    print(patient)
    user = User.objects.get(id=patient.user)
    patient.delete()
    user.delete()
    return Response(status=status.HTTP_200_OK) 


class UpdatePatient(RetrieveUpdateDestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = UserPatientSerializer
    def put(request):
        serializer = PatientSerializer(data=request.data)
        if not serializer.is_valid():
            return Response({'detail' : 'provide valid data'})
        s = serializer.data
        password = s.pop('password')
        patient = super().put(request)
        user = patient(user=patient.user)
        user.set_password(password)
        return Response(status=status.HTTP_200_OK)
    
class UpdateDoctor(RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = UserDoctorSerializer
    permission_classes = [permissions.IsAdminUser]
    
@api_view(http_method_names=['POST'])
def createAppointment(request):
    serializer = AppointmentSerializer(request.data)
    if (not serializer.is_valid()):
        return Response({'message' : 'Provide valid data'})
    doctor = Doctor.objects.get(id = serializer.validated_data['doctor'])
    appointment = Appointment(
        name = serializer.validated_data['name'],
        time = serializer.validated_data['time'],
        doctor = serializer.validated_data['doctor'],
        patient = serializer.validated_data['patinet'],
        price = serializer.validated_data['price'],
        department = doctor.department_id,
    )
    appointment.save()
    return Response({'detail':'success'}, status=status.HTTP_201_CREATED)


class ListAppointments(ListAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

        
    
def getUser(request):
    token = request.COOKIES.get('access_token')
    if token:
        access_token = AccessToken(token)
        user = User.objects.get(id=access_token['user_id'])
    else:
        return None
    return user
    
    
    
@api_view(http_method_names=['GET'])
def getPatientAppointments(request,id):
    appointments = Appointment.objects.filter(patient=id)
    serializer = AppointmentSerializer(appointments,many=True)
    return Response(data=serializer.data)

@api_view(http_method_names=['GET'])
def getDoctorAppointments(request,id):
    appointments = Appointment.objects.filter(doctor=id)
    serializer = AppointmentSerializer(appointments,many=True)
    return Response(data=serializer.data)

@api_view(http_method_names=['GET'])
def getPatientMedicaments(request,id):
    medicaments = Medicament.objects.filter(patient=id)
    serializer = MedicamentSerializer(medicaments,many=True)
    return Response(serializer.data)