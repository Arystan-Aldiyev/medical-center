from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

# Create your models here.


class UserManager(BaseUserManager):
    def create_user(self, username, password):
        user = self.model(username=username, password=password)
        user.set_password(password)
        user.save()
        return user


class User(AbstractUser):
    is_doctor = models.BooleanField(default=False)
    is_patient = models.BooleanField(default=False)


class Doctor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    date_of_birth = models.DateField()
    iin = models.CharField(max_length=12)
    id_number = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    middlename = models.CharField(max_length=255)
    contact_number = models.CharField(max_length=255)
    department_id = models.CharField(max_length=255)
    specialization_id = models.CharField(max_length=255)
    experience = models.IntegerField()
    category = models.CharField(max_length=255)
    price = models.FloatField()
    schedule_details = models.TextField()
    degree = models.CharField(max_length=100)
    rating = models.IntegerField()
    address = models.TextField()
    homepage_url = models.TextField(blank=True, null=True)


class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    date_of_birth = models.DateField()
    iin = models.CharField(max_length=12)
    id_number = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    middlename = models.CharField(max_length=255)
    blood_group = models.CharField(max_length=100)
    emergency_contact_number = models.CharField(max_length=255)
    contact_number = models.CharField(max_length=255)
    address = models.TextField()
    marital_status = models.CharField(max_length=255)
    registration_date = models.DateTimeField(auto_now_add=True)
    
class Appointment(models.Model):
    date = models.TextField()
    name = models.CharField(max_length=255)
    time = models.CharField(max_length=255)
    doctor = models.BigIntegerField()
    patient = models.BigIntegerField()
    price = models.FloatField()
    department = models.CharField(max_length=255,null=True,blank=True)


class Medicament(models.Model):
    start_time = models.DateField()
    end_time = models.DateField()
    name = models.CharField(max_length=255)
    is_active = models.BooleanField()
    patient = models.BigIntegerField()