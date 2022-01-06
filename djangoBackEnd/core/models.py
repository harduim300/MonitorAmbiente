from django.db import models

# Create model table for database


class Monitor(models.Model):
    temperature = models.IntegerField()
    humity = models.IntegerField()
    time_create = models.DateTimeField(auto_now=True)
