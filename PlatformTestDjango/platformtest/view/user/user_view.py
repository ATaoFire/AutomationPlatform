from django.shortcuts import render
from django.http.response import JsonResponse
import json
import datetime
from django.db.models import Q
from django.core import serializers
from platformtest.models import UserModel
# Create your views here.
import logging
logger = logging.getLogger('django')


def login(request):
    try:
        data={'code':200,'msg':""}
        username = ''
        password = ''
        logger.info(request.META.get("CONTENT_TYPE"))
        dict_json = json.loads(request.body)
        logger.info(dict_json)
        dict_json = json.loads(request.body)
        username = dict_json.get('username')
        password = dict_json.get('password')
        # if request.META.get("CONTENT_TYPE") != "application/json":
        #     dict_json = json.loads(request.body)
        #     username = dict_json.get('username')
        #     password = dict_json.get('password')
        # else:
        #     logger.info(request.POST.get('username'))
        #     username = request.POST.get('username')
        #     password = request.POST.get('password')
        logger.info(username)
        logger.info(password)
        if username == '' or password == '':
            data['code'] = 1000
            data['msg'] = '姓名或密码不能为空'
            return JsonResponse(data)
        if username == None or password == None:
            data['code'] = 1000
            data['msg'] = '姓名或密码不能为空'
            return JsonResponse(data)
        user = UserModel.objects.filter(username=username).first()
        if user.password == password:
            data['code'] = 200
            data['msg'] = '登录成功'
            return JsonResponse(data)
        else:
            data['code'] = 200
            data['msg'] = '用户名密码不匹配'
            return JsonResponse(data)
    except Exception as e:
        logger.info(e)
        data['code'] = 1000
        data['msg'] = '登录失败'
    return JsonResponse(data)




