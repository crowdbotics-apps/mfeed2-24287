from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CategoryViewSet, SubcategoryViewSet

router = DefaultRouter()
router.register("subcategory", SubcategoryViewSet)
router.register("category", CategoryViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
