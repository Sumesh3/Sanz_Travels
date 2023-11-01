from django.contrib import admin

# Register your models here.

from .models import LogIN, User_Registartion, Bus_company_Registartion, Bus_TB

admin.site.register(LogIN)
admin.site.register(User_Registartion)
admin.site.register(Bus_company_Registartion)
admin.site.register(Bus_TB)