from rest_framework.serializers import ModelSerializer

from main.models import Application

class ApplicationSerializer(ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'
        