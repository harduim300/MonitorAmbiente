import json
from time import sleep
from channels.generic.websocket import WebsocketConsumer
from .models import Monitor


class WSConsumer(WebsocketConsumer):    # Create WebSocket Server

    def connect(self):  # Connect WebSocket
        queryset = Monitor.objects.latest('id')     # Get the recentest data from database

        self.accept()
        values = json.dumps({   # Convert to JSON format
            "temperature": queryset.temperature,
            "humity": queryset.humity,
        })
        print(values)
        self.send(values)
        sleep(1)

    def receive(self, text_data):   # Create a response,for the constant requests(real time) of components from frontend

        if text_data == "NEEDNEWDATA":

            queryset = Monitor.objects.latest('id')
            values = json.dumps({
                "temperature": queryset.temperature,
                "humity": queryset.humity,
            })
            self.send(values)
