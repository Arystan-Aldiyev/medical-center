from rest_framework import serializers
from .models import Appointment, Patient, Doctor, Medicament


class PatientSerializer(serializers.Serializer):
    date_of_birth = serializers.DateField()
    iin = serializers.CharField(max_length=12)
    id_number = serializers.CharField(max_length=255)
    name = serializers.CharField(max_length=255)
    surname = serializers.CharField(max_length=255)
    middlename = serializers.CharField(max_length=255)
    blood_group = serializers.CharField(max_length=100)
    emergency_contact_number = serializers.CharField(max_length=255)
    contact_number = serializers.CharField(max_length=255)
    address = serializers.CharField()
    marital_status = serializers.CharField(max_length=255)
    password = serializers.CharField()

class UserPatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'
    
    
class DoctorSerializer(serializers.Serializer):
    date_of_birth = serializers.DateField()
    iin = serializers.CharField(max_length=12)
    id_number = serializers.CharField(max_length=255)
    name = serializers.CharField(max_length=255)
    surname = serializers.CharField(max_length=255)
    middlename = serializers.CharField(max_length=255)
    contact_number = serializers.CharField(max_length=255)
    department_id = serializers.CharField(max_length=255)
    specialization_id = serializers.CharField(max_length=255)
    experience = serializers.IntegerField()
    category = serializers.CharField(max_length=255)
    price = serializers.FloatField()
    schedule_details = serializers.CharField()
    degree = serializers.CharField(max_length=100)
    rating = serializers.IntegerField()
    address = serializers.CharField()
    homepage_url = serializers.CharField(default='')
    password = serializers.CharField()
    
class UserDoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
        
class MedicamentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicament
        fields = '__all__'