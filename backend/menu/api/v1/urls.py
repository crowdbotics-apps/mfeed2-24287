from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    ReviewViewSet,
    CategoryViewSet,
    ItemViewSet,
    CountryViewSet,
    ItemVariantViewSet,
)

router = DefaultRouter()
router.register("category", CategoryViewSet)
router.register("itemvariant", ItemVariantViewSet)
router.register("review", ReviewViewSet)
router.register("country", CountryViewSet)
router.register("item", ItemViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
