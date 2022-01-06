from rest_framework import serializers
from .models import Monitor


class MonitorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Monitor
        fields = ('id', 'temperature', 'humity', 'time_create')
