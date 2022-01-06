from django.urls import include, path
from rest_framework import routers
from core import views
from django.contrib import admin
from core.consumer import WSConsumer


router = routers.DefaultRouter()
router.register(r'monitor', views.MonitorViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls'))   # The routes with django rest framework
]

ws_urlpatterns = [
    path('ws/data', WSConsumer.as_asgi())   # The route of WebSocket
]
