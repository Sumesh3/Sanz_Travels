from django.contrib import admin

# Register your models here.

from .models import LogIN, User_Registartion, Bus_company_Registartion, Bus_TB, Booked_seat, Passenger_Details, Enquiry_Message, Admin_Registartion

admin.site.register(LogIN)
admin.site.register(User_Registartion)
admin.site.register(Bus_company_Registartion)
admin.site.register(Bus_TB)
admin.site.register(Booked_seat)
admin.site.register(Passenger_Details)
admin.site.register(Enquiry_Message)
admin.site.register(Admin_Registartion)