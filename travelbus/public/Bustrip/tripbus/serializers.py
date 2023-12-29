from rest_framework import serializers
from .models import LogIN, User_Registartion, Bus_company_Registartion, Bus_TB, Booked_seat, Passenger_Details, Enquiry_Message, Admin_Registartion


class User_RegistartionSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_Registartion
        fields = '__all__'

    def create(serlf, validated_data):
        return User_Registartion.objects.create(**validated_data)
    

class Bus_company_RegistartionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bus_company_Registartion
        fields = '__all__'

    def create(serlf, validated_data):
        return Bus_company_Registartion.objects.create(**validated_data)
    
class Admin_RegistartionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin_Registartion
        fields = '__all__'

    def create(serlf, validated_data):
        return Admin_Registartion.objects.create(**validated_data)


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = LogIN
        fields = '__all__'


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


class Passenger_DetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Passenger_Details
        fields = '__all__'

    def create(serlf, validated_data):
        return Passenger_Details.objects.create(**validated_data)


class Enquiry_MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiry_Message
        fields = '__all__'

    def create(serlf, validated_data):
        return Enquiry_Message.objects.create(**validated_data)
