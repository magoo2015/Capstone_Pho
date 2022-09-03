from django.urls import path
from . import views

urlpatterns = [
    path('', views.customer_list),
    path('<int:pk>/', views.customer_detail)
]