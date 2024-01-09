from django.shortcuts import render
from django.conf import settings
from django.db.models import Q
from datetime import date
from .qr import Generateqr
from .PythonMail import sendmail


# Create your views here.

from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from .models import LogIN, User_Registartion, Bus_company_Registartion, Bus_TB, Booked_seat, Passenger_Details, Enquiry_Message, Admin_Registartion
from .serializers import User_RegistartionSerializer, LoginSerializer, Bus_company_RegistartionSerializer, Bus_TBSerializer, Booked_seatSerializer, Passenger_DetailsSerializer, Enquiry_MessageSerializer, Admin_RegistartionSerializer

send_otp = 0
stored_email = ""
existing_email = ""

# USER

class user_registration_api(GenericAPIView):
    serializer_class = User_RegistartionSerializer
    serializer_class_login = LoginSerializer

    def post(self, request):
        login_id = ""
        name = request.data.get('name')
        email = request.data.get('email')
        number = request.data.get('number')
        password = request.data.get('password')
        role = 'user'

        if (User_Registartion.objects.filter(email=email)):
            return Response({'message': 'Duplicate email Found!'}, status=status.HTTP_400_BAD_REQUEST)
        elif (User_Registartion.objects.filter(number=number)):
            return Response({'message': 'Duplicate Phonenumber Found!'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login = self.serializer_class_login(
                data={'email': email, 'password': password, 'role': role})

        if serializer_login.is_valid():
            log = serializer_login.save()
            login_id = log.id
            print(login_id)

        serializer = self.serializer_class(
            data={'name': name, 'email': email, 'number': number, 'password': password, 'login_id': login_id, 'role': role})
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Registration Successfully', 'success': 1}, status=status.HTTP_200_OK)
        return Response({'data': serializer.errors, 'message': 'Registration failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)

class single_user_api(GenericAPIView):
    def get(self, request, id):
        queryset = User_Registartion.objects.get(pk=id)
        serializer = User_RegistartionSerializer(queryset)
        return Response(serializer.data)

class all_view_user_api(GenericAPIView):
    serializer_class = User_RegistartionSerializer

    def get(self, request):
        user = User_Registartion.objects.all()
        if (user.count() > 0):
            serializer = User_RegistartionSerializer(user, many=True)
            return Response({'data': serializer.data, 'message': 'data get', 'success': True}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'No data available'}, status=status.HTTP_400_BAD_REQUEST)

class update_single_user_api(GenericAPIView):
    Serializer_class = User_RegistartionSerializer

    def put(self, request, id):
        queryset = User_Registartion.objects.get(pk=id)
        print(queryset)
        serializer = User_RegistartionSerializer(
            instance=queryset, data=request.data, partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'updated successfully', 'success': 1}, status=status.HTTP_200_OK)

class delete_user_api(GenericAPIView):
    def delete(self, request, id):
        deluser = User_Registartion.objects.get(pk=id)
        deluser.delete()
        return Response({'message': 'Deleted successfully'})

# BUS_OWNER

class Bus_company_Registartion_api(GenericAPIView):
    serializer_class = Bus_company_RegistartionSerializer
    serializer_class_login = LoginSerializer

    def post(self, request):
        login_id = ""
        name = request.data.get('name')
        email = request.data.get('email')
        number = request.data.get('number')
        password = request.data.get('password')
        role = 'company'
        statuz = 1

        if (Bus_company_Registartion.objects.filter(email=email)):
            return Response({'message': 'Duplicate email Found!'}, status=status.HTTP_400_BAD_REQUEST)
        elif (Bus_company_Registartion.objects.filter(number=number)):
            return Response({'message': 'Duplicate Phonenumber Found!'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login = self.serializer_class_login(
                data={'email': email, 'password': password, 'role': role})

        if serializer_login.is_valid():
            log = serializer_login.save()
            login_id = log.id
            print(login_id)

            serializer = self.serializer_class(
                data={'name': name, 'email': email, 'number': number, 'password': password, 'login_id': login_id, 'role': role, 'statuz': statuz})
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Registration Successfully', 'success': 1}, status=status.HTTP_200_OK)
        return Response({'data': serializer.errors, 'message': 'Registration failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)

class single_company_api(GenericAPIView):
    def get(self, request, id):
        queryset = Bus_company_Registartion.objects.get(pk=id)
        serializer = Bus_company_RegistartionSerializer(queryset)
        return Response(serializer.data)

class all_company_api(GenericAPIView):
    serializer_class = Bus_company_RegistartionSerializer

    def get(self, request):
        user = Bus_company_Registartion.objects.all()
        if (user.count() > 0):
            serializer = Bus_company_RegistartionSerializer(user, many=True)
            return Response({'data': serializer.data, 'message': 'data get', 'success': True}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'No data available'}, status=status.HTTP_400_BAD_REQUEST)

class update_single_company_api(GenericAPIView):
    Serializer_class = Bus_company_RegistartionSerializer

    def put(self, request, id):
        queryset = Bus_company_Registartion.objects.get(pk=id)
        print(queryset)
        serializer = Bus_company_RegistartionSerializer(
            instance=queryset, data=request.data, partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'updated successfully', 'success': 1}, status=status.HTTP_200_OK)

class delete_company_api(GenericAPIView):
    def delete(self, request, id):
        deluser = Bus_company_Registartion.objects.get(pk=id)
        deluser.delete()
        return Response({'message': 'Deleted successfully'})

# ADMIN

class Admin_Registartion_api(GenericAPIView):
    serializer_class = Admin_RegistartionSerializer
    serializer_class_login = LoginSerializer

    def post(self, request):
        login_id = ""
        name = request.data.get('name')
        email = request.data.get('email')
        number = request.data.get('number')
        password = request.data.get('password')
        role = 'admin'

        if (Admin_Registartion.objects.filter(email=email)):
            return Response({'message': 'Duplicate email Found!'}, status=status.HTTP_400_BAD_REQUEST)
        elif (Admin_Registartion.objects.filter(number=number)):
            return Response({'message': 'Duplicate Phonenumber Found!'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login = self.serializer_class_login(
                data={'email': email, 'password': password, 'role': role})

        if serializer_login.is_valid():
            log = serializer_login.save()
            login_id = log.id
            print(login_id)

        serializer = self.serializer_class(
            data={'name': name, 'email': email, 'number': number, 'password': password, 'login_id': login_id, 'role': role})
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Registration Successfully', 'success': 1}, status=status.HTTP_200_OK)
        return Response({'data': serializer.errors, 'message': 'Registration failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)

class single_admin_api(GenericAPIView):
    def get(self, request, id):
        queryset = Admin_Registartion.objects.get(pk=id)
        serializer = Admin_RegistartionSerializer(queryset)
        return Response(serializer.data)

class update_admin_api(GenericAPIView):
    Serializer_class = Admin_RegistartionSerializer

    def put(self, request, id):
        queryset = Admin_Registartion.objects.get(pk=id)
        print(queryset)
        serializer = Admin_RegistartionSerializer(
            instance=queryset, data=request.data, partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Updated Successfully', 'success': 1}, status=status.HTTP_200_OK)

# LOGIN

class login_api(GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        logreg = LogIN.objects.filter(email=email, password=password)
        if (logreg.count() > 0):
            read_serializer = LoginSerializer(logreg, many=True)
            for i in read_serializer.data:
                login_id = i['id']
                role = i['role']

                user_data = User_Registartion.objects.filter(
                    login_id=login_id).values()
                for i in user_data:
                    user_id = i['id']
                    name = i['name']

                owner_data = Bus_company_Registartion.objects.filter(
                    login_id=login_id).values()
                for i in owner_data:
                    user_id = i['id']
                    name = i['name']

                admin_data = Admin_Registartion.objects.filter(
                    login_id=login_id).values()
                for i in admin_data:
                    user_id = i['id']
                    name = i['name']

            return Response({'data': {'login_id': login_id, 'user_id': user_id, 'email': email, 'password': password, 'name': name, 'role': role}, 'success': 1, 'message': 'Logged in successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'Email-id or Password is invalid'}, status=status.HTTP_400_BAD_REQUEST)

class delete_login_api(GenericAPIView):
    def delete(self, request, id):
        deluser = LogIN.objects.get(pk=id)
        deluser.delete()
        return Response({'message': 'Deleted successfully'})

# BUS

class add_bus_details_api(GenericAPIView):
    Serializer_class = Bus_TBSerializer

    def post(self, request):
        login_id = request.data.get('login_id')
        company_name = request.data.get('company_name')
        bus_name = request.data.get('bus_name')
        bus_number = request.data.get('bus_number')
        bording_point = request.data.get('bording_point')
        droppinging_point = request.data.get('droppinging_point')
        start_time = request.data.get('start_time')
        end_time = request.data.get('end_time')
        fare = request.data.get('fare')
        total_seats = 40
        available_seats = 40
        img = request.data.get('img')
        statuz = 1
        serializer = self.Serializer_class(
            data={'login_id': login_id, 'company_name': company_name, 'bus_name': bus_name, 'bus_number': bus_number, 'bording_point': bording_point, 'droppinging_point': droppinging_point, 'start_time': start_time, 'end_time': end_time, 'fare': fare, 'total_seats': total_seats, 'img': img, 'statuz': statuz, 'available_seats': available_seats})
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            print("data saved")
            return Response({'data': serializer.data, 'message': 'Added successfully', 'success': 1}, status=status.HTTP_200_OK)
        return Response({'data': serializer.errors, 'message': 'failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)

class all_bus_details_api(GenericAPIView):
    serializer_class = Bus_TBSerializer

    def get(self, request):
        bus = Bus_TB.objects.all()
        if (bus.count() > 0):
            serializer = Bus_TBSerializer(bus, many=True)
            return Response({'data': serializer.data, 'message': 'data get', 'success': True}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'No data available'}, status=status.HTTP_400_BAD_REQUEST)

class single_bus_details_api(GenericAPIView):
    def get(self, request, id):
        queryset = Bus_TB.objects.get(pk=id)
        serializer = Bus_TBSerializer(queryset)
        return Response(serializer.data)

class update_bus_details_api(GenericAPIView):
    Serializer_class = Bus_TBSerializer

    def put(self, request, id):
        queryset = Bus_TB.objects.get(pk=id)
        print(queryset)
        serializer = Bus_TBSerializer(
            instance=queryset, data=request.data, partial=True)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'updated successfully', 'success': 1}, status=status.HTTP_200_OK)

class delete_bus_details(GenericAPIView):
    def delete(self, request, id):
        deluser = Bus_TB.objects.get(pk=id)
        deluser.delete()
        return Response({'message': 'Deleted successfully'})

class company_all_bus_api(GenericAPIView):
    serializer_class = Bus_TBSerializer

    def get(self, request, id):
        bus_detl = Bus_TB.objects.filter(login_id=id)
        if (bus_detl.count() > 0):
            serializer = Bus_TBSerializer(bus_detl, many=True)
            return Response({'data': serializer.data, 'message': 'data get', 'success': True}, status=status.HTTP_200_OK)
        else:
            return Response({'message': "They don't have a bus" }, status=status.HTTP_400_BAD_REQUEST)

class search_bus(GenericAPIView):
    def post(self, request):
        starting = request.data.get('starting')
        ending = request.data.get('ending')

        if (starting != "" and ending != ""):
            # starting and ending:
            queryset = Bus_TB.objects.filter(
                Q(bording_point__icontains=starting) & Q(droppinging_point__icontains=ending)).values()

            for obj in queryset:
                obj['img'] = settings.MEDIA_URL + str(obj['img'])

            return Response({'data': list(queryset), 'message': 'Successfully fetched', 'success': True}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'no result found', 'success': True}, status=status.HTTP_200_OK)

class booked_seat_api(GenericAPIView):
    Serializer_class = Booked_seatSerializer

    def post(self, request):
        busid = request.data.get('busid')
        login_id = request.data.get('login_id')
        no_of_seat = request.data.get('no_of_seat')
        seat_no = request.data.get('seat_no')
        total_fare = request.data.get('total_fare')
        # today = date.today()
        today = request.data.get('today')
        seat_no = str(seat_no)

        serializer = self.Serializer_class(
            data={'busid': busid, 'login_id': login_id, 'no_of_seat': no_of_seat, 'seat_no': seat_no, 'total_fare': total_fare, 'today': today})

        if serializer.is_valid():
            serializer.save()

        queryset = Passenger_Details.objects.filter(
            busid=busid, seat_no=seat_no, today=today, login_id=login_id)
        if (queryset.count() > 0):
            for passenger_detail in queryset:
                print(passenger_detail.statuz)
                passenger_detail.statuz = 1
                passenger_detail.save()

            return Response({'data': serializer.data, 'message': 'Successfull', 'success': 1}, status=status.HTTP_200_OK)
        return Response({'data': serializer.errors, 'message': 'failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)

#GENERATE QR CODE
    
class generateqr_api(GenericAPIView):

    def post(self, request):
        grandtotal = request.data.get('grandTotal')
        print(grandtotal)
        Generateqr(grandtotal)
        return Response({'message': 'QR Generated  successfully', 'success': 1}, status=status.HTTP_200_OK)

#SEAT BOOKING
    
class view_seat_book_api(GenericAPIView):
    serializer_class = Booked_seatSerializer

    def get(self, request, id, date):
        bus = Booked_seat.objects.filter(busid=id, today=date)
        print(date)
        if (bus.count() > 0):
            serializer = Booked_seatSerializer(bus, many=True)
            return Response({'data': serializer.data, 'message': 'data get', 'success': True}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'No data available'}, status=status.HTTP_400_BAD_REQUEST)

class booked_passenger_details_api(GenericAPIView):
    serializer_class = Passenger_DetailsSerializer

    def post(self, request):
        data_list = request.data

        for data in data_list:
            login_id = data.get('login_id')
            name = data.get('Name')
            gender = data.get('Gender')
            age = data.get('Age')
            today = data.get('today')
            seat_no = data.get('seat_no')
            seat_no = str(seat_no)
            busid = data.get('busid')
            seat = data.get('seat')
            statuz = 0

            serializer = self.serializer_class(
                data={'login_id': login_id, 'Name': name, 'Gender': gender, 'Age': age, 'today': today, 'busid': busid, 'seat_no': seat_no, 'statuz': statuz, 'seat': seat})

            if serializer.is_valid():
                serializer.save()
                print("Data saved")
            else:
                print(serializer.errors)

        return Response({'message': 'Data added successfully', 'success': 1}, status=status.HTTP_200_OK)

class all_booked_ticket_api(GenericAPIView):
    serializer_class = Passenger_DetailsSerializer

    def get(self, request):
        passenger_data = Passenger_Details.objects.all()
        if (passenger_data.count() > 0):
            all_passenger_data = []
            for passenger in passenger_data:
                serializer = Passenger_DetailsSerializer(passenger)
                serialized_data = serializer.data

                busid = serialized_data['busid']
                bus_details = Bus_TB.objects.filter(id=busid).values(
                    'bus_name', 'bus_number', 'bording_point', 'droppinging_point', 'start_time', 'end_time', 'fare', 'img', 'company_name').first()

                if bus_details:
                    combined_data = {**serialized_data, **bus_details}
                    all_passenger_data.append(combined_data)

            if all_passenger_data:
                return Response({'data': all_passenger_data, 'message': 'Data retrieved successfully', 'success': True}, status=status.HTTP_200_OK)
            else:
                return Response({'data': 'No data available'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'data': 'No data available'}, status=status.HTTP_400_BAD_REQUEST)

        #     serializer = Passenger_DetailsSerializer(passenger, many=True)
        #     all_passenger_data = []
        #     return Response({'data': serializer.data, 'message': 'data get', 'success': True}, status=status.HTTP_200_OK)
        # else:
        #     return Response({'data': 'No data available'}, status=status.HTTP_400_BAD_REQUEST)

        # a = []

        # a.append(
        #     {
        #        'login_id':login_id,
        #        'Name':Name,
        #        'Gender':Gender,
        #        'Age':Age
        #     }
        # )

        # serializer = self.Serializer_class(
        #     data=a,many=True)
        # if serializer.is_valid():
        #     serializer.save()
        #     return Response({'data': serializer.data, 'message': 'Successfull', 'success': 1}, status=status.HTTP_200_OK)
        # return Response({'data': serializer.errors, 'message': 'failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)

class user_view_ticket_api(GenericAPIView):
    serializer_class = Passenger_DetailsSerializer

    def get(self, request, id):

        bus = Passenger_Details.objects.filter(login_id=id)
        if bus.exists():
            all_passenger_data = []
            for passenger in bus:
                serializer = Passenger_DetailsSerializer(passenger)
                serialized_data = serializer.data

                busid = serialized_data['busid']
                bus_details = Bus_TB.objects.filter(id=busid).values(
                    'bus_name', 'bus_number', 'bording_point', 'droppinging_point', 'start_time', 'end_time', 'fare', 'img', 'company_name').first()

                if bus_details:
                    combined_data = {**serialized_data, **bus_details}
                    all_passenger_data.append(combined_data)

            if all_passenger_data:
                return Response({'data': all_passenger_data, 'message': 'Data retrieved successfully', 'success': True}, status=status.HTTP_200_OK)
            else:
                return Response({'data': 'No data available'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'data': 'No data available'}, status=status.HTTP_400_BAD_REQUEST)

#ENQUIRY
            
class enquiry_message_api(GenericAPIView):
    Serializer_class = Enquiry_MessageSerializer

    def post(self, request):
        Name = request.data.get('name')
        Email = request.data.get('email')
        Subject = request.data.get('subject')
        Message = request.data.get('message')

        serializer = self.Serializer_class(
            data={'Name': Name, 'Email': Email, 'Subject': Subject, 'Message': Message})
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data': serializer.data, 'message': 'Message successfully send', 'success': 1}, status=status.HTTP_200_OK)
        return Response({'data': serializer.errors, 'message': 'Sending failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)

# FORGOT PASSWORD USING OTP

class OTP_send_API(GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        email = request.data.get('email')

        user_data = User_Registartion.objects.filter(email=email).values()
        bus_company_data = Bus_company_Registartion.objects.filter(email=email).values()
        admin_data = Admin_Registartion.objects.filter(email=email).values()

        product_data = list(user_data) + list(bus_company_data) + list(admin_data)
        print(product_data)
        for i in product_data:
            username = i['name']
            print(username)

        global stored_email
        stored_email = email

        sendotp = LogIN.objects.filter(email=email)
        if sendotp.exists():
            global send_otp
            send_otp = sendmail(email, username)
            print(send_otp)

            if send_otp:
                return Response({'data': {'email': email}, 'success': 1, 'message': 'Send OTP successfully'}, status=status.HTTP_200_OK)
            else:
                return Response({'data': 'Failed to send OTP'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response({'data': 'Invalid E-mail id'}, status=status.HTTP_400_BAD_REQUEST)

class OTP_Checking_API(GenericAPIView):

    def post(self, request):
        otp = request.data.get('otp')

        try:
            entered_otp = int(otp)
        except (TypeError, ValueError):
            return Response({'data': 'Invalid OTP format'}, status=status.HTTP_400_BAD_REQUEST)

        print(send_otp)
        if send_otp == entered_otp:
            print("working")
            global existing_email
            existing_email = stored_email

            return Response({'success': 1, 'message': 'OTP successfully verified'}, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'Incorrect OTP'}, status=status.HTTP_400_BAD_REQUEST)        

class update_Password_API(GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        password = request.data.get('pass')
        cpassword = request.data.get('cpass')

        if password == cpassword:
            try:
                user = LogIN.objects.get(email=existing_email)
                user.password = password
                user.save()
                return Response({'success': 1, 'message': 'Password updated successfully'}, status=status.HTTP_200_OK)
            except LogIN.DoesNotExist:
                return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'error': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)

#CHANGE PASSWORD
        
class password_change_api(GenericAPIView):
    serializer_class = LoginSerializer

    def put(self, request, id):
        current_password = request.data.get('currentpass')
        new_password = request.data.get('newpass')
        confirm_password = request.data.get('confirmpass')
        # loginid = request.data.get('loginid')

        try:
            user = LogIN.objects.get(id=id)
            print(user.password)
        except LogIN.DoesNotExist:
            return Response({'error': 'User does not exist'}, status=status.HTTP_404_NOT_FOUND)

        if user.password != current_password:
            return Response({'error': 'Current password is incorrect'}, status=status.HTTP_400_BAD_REQUEST)

        if new_password != confirm_password:
            return Response({'error': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)

        user.password=new_password
        user.save()

        return Response({'success': 1, 'message': 'Password updated successfully'}, status=status.HTTP_200_OK)