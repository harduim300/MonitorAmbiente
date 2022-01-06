from django.contrib import admin
from .models import Monitor


class MonitorAdmin(admin.ModelAdmin):   # Config model for django admin
    list_display = ('temperature', 'humity', 'time_create')


admin.site.register(Monitor, MonitorAdmin)
