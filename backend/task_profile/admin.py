from django.contrib import admin
from .models import TaskerProfile, InviteCode, Notification, CustomerProfile

admin.site.register(CustomerProfile)
admin.site.register(TaskerProfile)
admin.site.register(InviteCode)
admin.site.register(Notification)

# Register your models here.
