from rest_framework import serializers
from .models import Appointment


class PatientSerializer(serializers.Serializer):
    date_of_birth = serializers.DateField()
    iin = serializers.CharField(max_length=12)
    id_number = serializers.CharField(max_length=255)
    name = serializers.CharField(max_length=255)
    surname = serializers.CharField(max_length=255)
    middlename = serializers.CharField(max_length=255)
    blood_group = serializers.CharField(max_length=100)
    emrgency_contact_number = serializers.CharField(max_length=255)
    contact_number = serializers.CharField(max_length=255)
    adress = serializers.CharField()
    martial_status = serializers.CharField(max_length=255)
    password = serializers.CharField()

class UserPatientSerializer(serializers.Serializer):
    date_of_birth = serializers.DateField()
    iin = serializers.CharField(max_length=12)
    id_number = serializers.CharField(max_length=255)
    name = serializers.CharField(max_length=255)
    surname = serializers.CharField(max_length=255)
    middlename = serializers.CharField(max_length=255)
    blood_group = serializers.CharField(max_length=100)
    emrgency_contact_number = serializers.CharField(max_length=255)
    contact_number = serializers.CharField(max_length=255)
    adress = serializers.CharField()
    martial_status = serializers.CharField(max_length=255)
    
    
class DoctorSerializer(serializers.Serializer):
    date_of_birth = serializers.DateField()
    iin = serializers.CharField(max_length=12)
    id_number = serializers.CharField(max_length=255)
    name = serializers.CharField(max_length=255)
    surname = serializers.CharField(max_length=255)
    middlename = serializers.CharField(max_length=255)
    contact_number = serializers.CharField(max_length=255)
    department_id = serializers.IntegerField()
    specialization_id = serializers.IntegerField()
    experience = serializers.IntegerField()
    category = serializers.CharField(max_length=255)
    price = serializers.FloatField()
    schedule = serializers.CharField()
    degree = serializers.CharField(max_length=100)
    rating = serializers.IntegerField()
    adress = serializers.CharField()
    password = serializers.CharField()
    
class UserDoctorSerializer(serializers.Serializer):
    date_of_birth = serializers.DateField()
    iin = serializers.CharField(max_length=12)
    id_number = serializers.CharField(max_length=255)
    name = serializers.CharField(max_length=255)
    surname = serializers.CharField(max_length=255)
    middlename = serializers.CharField(max_length=255)
    contact_number = serializers.CharField(max_length=255)
    department_id = serializers.IntegerField()
    specialization_id = serializers.IntegerField()
    experience = serializers.IntegerField()
    category = serializers.CharField(max_length=255)
    price = serializers.FloatField()
    schedule = serializers.CharField()
    degree = serializers.CharField(max_length=100)
    rating = serializers.IntegerField()
    adress = serializers.CharField()

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['start_time','end_time','doctor','patient','price',]