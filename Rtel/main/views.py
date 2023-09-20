from django.shortcuts import render, redirect
from django.core.mail import send_mail, EmailMessage
from main.forms import ApplicationForm


# Create your views here.
def index(request):
    if request.method == 'POST':
        form = ApplicationForm(request.POST)
        if form.is_valid():
            form.save()
            # email_subject = 'Новая заявка'
            # message = f'Новая заявка от {form.cleaned_data["name"]}. Телефон номер:{form.cleaned_data["phone"]}'
            # email = EmailMessage(email_subject, message, to=['diyas.nurullaev@gmail.com'],)
            # email.send()


            return redirect('index')
    form = ApplicationForm()
    return render(request, 'main/index.htm', {'form': form})


def error_404_view(request, exception):
    return render(request, 'main/404notfound.html')