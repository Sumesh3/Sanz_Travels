from django.shortcuts import render
from django.conf import settings
from django.db.models import Q
from datetime import date
from .qr import Generateqr

# Create your views here.

from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from .models import LogIN, User_Registartion, Bus_company_Registartion, Bus_TB, Booked_seat, Passenger_Details, Enquiry_Message, Admin_Registartion
from .serializers import User_RegistartionSerializer, LoginSerializer, Bus_company_RegistartionSerializer, Bus_TBSerializer, Booked_seatSerializer, Passenger_DetailsSerializer, Enquiry_MessageSerializer, Admin_RegistartionSerializer

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
    


#ADMIN

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
            return Response({'data': serializer.data, 'message': 'updated successfully', 'success': 1}, status=status.HTTP_200_OK)

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
            return Response({'data': 'email id or password is invalid'}, status=status.HTTP_400_BAD_REQUEST)


class delete_login_api(GenericAPIView):
    def delete(self, request, id):
        deluser = LogIN.objects.get(pk=id)
        deluser.delete()
        return Response({'message': 'Deleted successfully'})

#BUS
    
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
        # available_dates = request.data.get('available_dates')
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
            return Response({'message': 'No data available'}, status=status.HTTP_400_BAD_REQUEST)




class search_bus(GenericAPIView):
    def post(self, request):
        starting = request.data.get('starting')
        ending = request.data.get('ending')
        if (starting != "" and ending != ""):
            queryset = Bus_TB.objects.filter(
                Q(bording_point__icontains=starting) and Q(
                    droppinging_point__icontains=ending)
            ).values()
            print(queryset)

            i = Bus_TB.objects.filter(bording_point__icontains=starting) and Bus_TB.objects.filter(
                droppinging_point__icontains=ending)
            for dta in i:
                print(dta)

            for obj in queryset:

                obj['img'] = settings.MEDIA_URL+str(obj['img'])
            return Response({'data': queryset, 'message': 'Successfully fetched', 'success': True}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'no result found', 'success': True}, status=status.HTTP_200_OK)


# class search_bus2(GenericAPIView):
#     def post(self, request):
#         starting = request.data.get('starting')
#         ending = request.data.get('ending')

#         i = Bus_TB.objects.filter(bording_point__icontains=starting) and Bus_TB.objects.filter(droppinging_point__icontains=ending)
#         for dta in i:
#             print(dta)

#         data = [{'company_name':info.company_name} for info in i]
#         return Response ({'data':data,'message':'Successfully fetched', 'success':True}, status=status.HTTP_200_OK)

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
            return Response({'data': serializer.data, 'message': 'Successfull', 'success': 1}, status=status.HTTP_200_OK)
        return Response({'data': serializer.errors, 'message': 'failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)


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


class generateqr_api(GenericAPIView):

    def post(self, request):
        grandtotal = request.data.get('grandTotal')
        print(grandtotal)
        Generateqr(grandtotal)
        return Response({'message': 'QR Generated  successfully', 'success': 1}, status=status.HTTP_200_OK)


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
            statuz = 0

            serializer = self.serializer_class(
                data={'login_id': login_id, 'Name': name, 'Gender': gender, 'Age': age, 'today': today, 'statuz': statuz})

            if serializer.is_valid():
                serializer.save()
                print("Data saved")
            else:
                print(serializer.errors)

        return Response({'message': 'Data added successfully', 'success': 1}, status=status.HTTP_200_OK)

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
        return Response({'data': serializer.errors, 'message': 'failed', 'success': 0}, status=status.HTTP_400_BAD_REQUEST)
