from rest_framework import serializers
from .models import LogIN, User_Registartion, Bus_company_Registartion, Bus_TB, Booked_seat

class User_RegistartionSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_Registartion
        fields = '__all__'

    def create(serlf, validated_data):
        return User_Registartion.objects.create(**validated_data)

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = LogIN
        fields = '__all__'

class Bus_company_RegistartionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bus_company_Registartion
        fields = '__all__'

    def create(serlf, validated_data):
        return Bus_company_Registartion.objects.create(**validated_data)
    
class Bus_TBSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bus_TB
        fields = '__all__'

    def create(serlf, validated_data):
        return Bus_TB.objects.create(**validated_data)
    
class Booked_seatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booked_seat
        fields = '__all__'

    def create(serlf, validated_data):
        return Booked_seat.objects.create(**validated_data)