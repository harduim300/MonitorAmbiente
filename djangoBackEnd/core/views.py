from rest_framework import viewsets
from .models import Monitor
from .serializers import MonitorSerializer


class MonitorViewSet(viewsets.ModelViewSet):

    # Because of Django Rest Framework, We don't need to create all Http requests
    queryset = Monitor.objects.all()    # Receive data in queryset
    serializer_class = MonitorSerializer    # And convert to serializer data
