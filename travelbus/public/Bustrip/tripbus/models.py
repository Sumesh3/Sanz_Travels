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
    

class Admin_Registartion(models.Model):
    name = models.CharField(max_length=40)
    email = models.CharField(max_length=50, unique=True)
    number = models.CharField(max_length=10)
    login_id = models.ForeignKey(LogIN, on_delete=models.CASCADE)
    role = models.CharField(max_length=10)

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
    available_seats = models.CharField(max_length=100)
    img = models.ImageField(upload_to='images/', null=True)
    # available_dates = models.CharField(max_length=100)
    login_id = models.ForeignKey(LogIN, on_delete=models.CASCADE)
    statuz = models.CharField(max_length=30)

    def __str__(self):
        return self.bus_name


class Booked_seat(models.Model):
    busid = models.ForeignKey(Bus_TB, on_delete=models.CASCADE)
    login_id = models.ForeignKey(LogIN, on_delete=models.CASCADE)
    no_of_seat = models.CharField(max_length=100)
    seat_no = models.CharField(max_length=100)
    total_fare = models.CharField(max_length=100)
    today = models.CharField(max_length=100)

    # def __str__(self):
    #     return self.today


class Passenger_Details(models.Model):
    login_id = models.ForeignKey(LogIN, on_delete=models.CASCADE)
    Name = models.CharField(max_length=100)
    Gender = models.CharField(max_length=100)
    Age = models.CharField(max_length=100)
    today = models.CharField(max_length=100)
    statuz = models.CharField(max_length=100)
    seat_no = models.CharField(max_length=100)
    seat = models.CharField(max_length=100)
    busid = models.ForeignKey(Bus_TB, on_delete=models.CASCADE)

    def __str__(self):
        return self.Name


class Enquiry_Message(models.Model):
    Name = models.CharField(max_length=100)
    Email = models.CharField(max_length=100)
    Subject = models.CharField(max_length=500)
    Message = models.CharField(max_length=1000)

    def __str__(self):
        return self.Name
