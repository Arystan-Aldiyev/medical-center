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
    schedule = models.TextField()
    degree = models.CharField(max_length=100)
    rating = models.IntegerField()
    adress = models.TextField()


class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    date_of_birth = models.DateField()
    iin = models.CharField(max_length=12)
    id_number = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    middlename = models.CharField(max_length=255)
    blood_group = models.CharField(max_length=100)
    emrgency_contact_number = models.CharField(max_length=255)
    contact_number = models.CharField(max_length=255)
    adress = models.TextField()
    martial_status = models.CharField(max_length=255)
    registration_date = models.DateTimeField(auto_now_add=True)
    
class Appointment(models.Model):
    time = models.CharField(max_length=255)
    doctor = models.BigIntegerField()
    patient = models.BigIntegerField()
    price = models.FloatField(null=True,blank=True)
