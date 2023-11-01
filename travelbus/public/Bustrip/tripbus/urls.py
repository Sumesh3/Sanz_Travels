from django.urls import path
from .import views

urlpatterns = [
    path("user_registration_api", views.user_registration_api.as_view(), name="user_registration_api"),
    path("single_user_api/<int:id>", views.single_user_api.as_view(), name="single_user_api"),
    path("all_view_user_api", views.all_view_user_api.as_view(), name="all_view_user_api"),
    path("update_single_user_api/<int:id>", views.update_single_user_api.as_view(), name="update_single_user_api"),
    path("delete_user_api/<int:id>", views.delete_user_api.as_view(), name="delete_user_api"),

    path("Bus_company_Registartion_api", views.Bus_company_Registartion_api.as_view(), name="Bus_company_Registartion_api"),
    path("single_company_api/<int:id>", views.single_company_api.as_view(), name="single_company_api"),
    path("all_company_api", views.all_company_api.as_view(), name="all_company_api"),
    path("update_single_company_api/<int:id>", views.update_single_company_api.as_view(), name="update_single_company_api"),
    path("delete_company_api/<int:id>", views.delete_company_api.as_view(), name="delete_company_api"),

    path("login_api", views.login_api.as_view(), name="login_api"),
    path("delete_login_api/<int:id>", views.delete_login_api.as_view(), name="delete_login_api"),
    path("add_bus_details_api", views.add_bus_details_api.as_view(), name="add_bus_details_api"),
    path("all_bus_details_api", views.all_bus_details_api.as_view(), name="all_bus_details_api"),
    path("update_bus_details_api/<int:id>", views.update_bus_details_api.as_view(), name="update_bus_details_api"),
    path("delete_bus_details/<int:id>", views.delete_bus_details.as_view(), name="delete_bus_details"),
    path("search_bus", views.search_bus.as_view(), name="search_bus"),
]