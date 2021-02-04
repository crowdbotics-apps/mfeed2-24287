from django.contrib import admin
from .models import Review, Category, Item, Country, ItemVariant

admin.site.register(Category)
admin.site.register(ItemVariant)
admin.site.register(Review)
admin.site.register(Country)
admin.site.register(Item)

# Register your models here.
