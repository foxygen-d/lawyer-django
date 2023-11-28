from django import forms


class AskForm(forms.Form):
    name = forms.CharField(
        required=True,
        min_length = 2,
        widget = forms.TextInput(
            attrs={'placeholder': 'Имя'}
        )
    )
    email = forms.EmailField(
        required=True,
        min_length = 2,
        widget = forms.EmailInput(
            attrs={'placeholder': 'Почта'}
        )
    )
    message = forms.CharField(
        required=True,
        min_length = 2,
        widget = forms.Textarea(
            attrs={'placeholder': 'Сообщение',}
        )
    )
