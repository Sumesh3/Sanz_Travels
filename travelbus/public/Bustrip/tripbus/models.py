from django.db import models

# Create your models here.

class LogIN(models.Model):
    email = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=20)
    role = models.CharField(max_length=10)

    def __str__(self):
        return self.email
    
class User_Registartion(models.Model):
    name = models.CharField(max_length=40)
    email = models.CharField(max_length=50, unique=True)
    number = models.CharField(max_length=10)
    login_id = models.ForeignKey(LogIN, on_delete=models.CASCADE)
    role = models.CharField(max_length=10)

    def __str__(self):
        return self.email

class Bus_company_Registartion(models.Model):
    name = models.CharField(max_length=40)
    email = models.CharField(max_length=50, unique=True)
    number = models.CharField(max_length=10)
    login_id = models.ForeignKey(LogIN, on_delete=models.CASCADE)
    role = models.CharField(max_length=10)
    statuz = models.CharField(max_length=30)

    def __str__(self):
        return self.name
    
class Bus_TB(models.Model):
    company_name = models.CharField(max_length=40)
    bus_name = models.CharField(max_length=100)
    bus_number = models.CharField(max_length=100)
    bording_point = models.CharField(max_length=100)
    droppinging_point = models.CharField(max_length=100)
    start_time = models.CharField(max_length=100)
    end_time = models.CharField(max_length=100)
    fare = models.CharField(max_length=100)
    total_seats = models.CharField(max_length=100)
    img = models.ImageField(upload_to='images/', null=True, blank=True)
    available_dates = models.CharField(max_length=100)
    login_id = models.ForeignKey(LogIN, on_delete=models.CASCADE)
    statuz = models.CharField(max_length=30)

    def __str__(self):
        return self.bus_name
    