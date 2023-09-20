from django.core.mail import send_mail, EmailMessage
from main.api.serializers import ApplicationSerializer
from main.models import Application
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import redirect


 
@api_view(['GET'])
def add(request):
    name = request.GET.get('name')
    phone = request.GET.get('phone')
    appication = Application(name=name, phone=phone)
    appication.save()
    # email_subject = 'Новая заявка'
    # message = f'Новая заявка от {name}. Телефон номер:{phone}'
    # email = EmailMessage(email_subject, message, to=['diyas.nurullaev@gmail.com'])
    # email.fail_silently = True
    # email.send()
    serializer = ApplicationSerializer(appication)
    return redirect('https://rtel.kz/')