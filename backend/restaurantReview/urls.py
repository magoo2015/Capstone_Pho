from django.urls import path
from . import views

urlpatterns = [
    path('', views.restaurantReview_list),
    path('<int:pk>/', views.restaurantReview_detail)
]