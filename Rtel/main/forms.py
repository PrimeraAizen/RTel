from django import forms
from django.forms import ModelForm

from main.models import Application


class ApplicationForm(ModelForm):
    class Meta:
        model = Application
        fields = ['name', 'phone']
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 't-input js-tilda-rule',
                'id': "input_1495810354468",
                "placeholder": "Имя",
                "style": "color:#ffffff;border:1px solid #c9c9c9;background-color:#171717;border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; margin-bottom: 25px;",
                "aria-required": "true",
                "data-tilda-req": "1",
                "data-tilda-rule": "name",
                "area-describedby": "error_1495810354468",
                "autocomplete" : "name"
                }),
            'phone': forms.TextInput(attrs={
                'class': 't-input js-tilda-rule js-tilda-mask',
                "type": "tel",
                "name": "phone",
                "value": "",
                "id": "input_1495810359387",
                "placeholder": "+7 (700) 000-00-00",
                "style": "color:#ffffff;border:1px solid #c9c9c9;background-color:#171717;border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px; margin-bottom: 25px;",
                "aria-required": "true",
                "data-tilda-req": "1",
                "data-tilda-rule": "phone",
                # "area-describedby": "error_1495810359387",
                # "data-tilda-mask": "+7 (999) 999-99-99",
                'autocomplete': 'tel',
                'pattern': '[0-9]*'
                })
        }
