from django.urls import path, re_path
from django.conf.urls import include, url
from platformtest.view.user import user_view

app_name = 'user'

urlpatterns = [
    path('login', user_view.login, name='login'),

]
