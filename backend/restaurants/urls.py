from django.urls import path
from . import views

urlpatterns = [
    path('', views.restaurant_list),
    path('<int:pk>/', views.restaurant_detail)
]