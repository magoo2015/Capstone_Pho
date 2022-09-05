from django.urls import path
from . import views

urlpatterns = [
    path('', views.review_list),
    path('new_review/', views.new_review),
    path('<int:pk>/', views.review_detail),
    path('like_status/<str:pk>/', views.likes)
]