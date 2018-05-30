
from time import sleep
import datetime
from firebase import firebase
from firebase_admin import db
import pyrebase

import serial
#import urllib2, urllib, httplib
import json
import os 
from functools import partial


ser =serial.Serial('/dev/ttyACM0',115200);
#firebase = firebase.FirebaseApplication('https://farmina-5c940.firebaseio.com/', None)


#def update_firebase():

#	ser.flushInput()
#	lines=ser.readline().strip()
#	values=lines.decode('ascii').split(',')
#	if len(values)==5:
 #           water_level,humidity,temperature,lux,watertemp=[float(s) for s in values]
  #          print(ser)
#	
#
 #           data = {"humidity": humidity,"temperature":temperature,"water level":water_level,"lux":lux}
  #          firebase.put('/sensor', "data",data)
#	
config = {
    "apiKey": "AIzaSyCJvtBdqcl8Xv-Y1Sic9_kbw1mfvwYSCHc",
    "authDomain": "farmina-5c940.firebaseapp.com",
    "databaseURL": "https://farmina-5c940.firebaseio.com",
    "projectId": "farmina-5c940",
    "storageBucket": "farmina-5c940.appspot.com"
    }
firebase=pyrebase.initialize_app(config)
db=firebase.database()

def update_firebase():
    print(ser.readline())
    ser.flushInput()
    lines=ser.readline().strip()
    values=lines.decode('ascii').split(',')
    if len(values)==5:
        water_level,humidity,temperature,lux,water_temp=[float(s) for s in values]
        print(ser)
        data = {"humidity": humidity,"temperature":temperature,"water level":water_level,"lux":lux,"water temp":water_temp}
        db.child("sensor").update(data)
    settings=  db.child("settings").get()
    for setting in settings.each():
        ser.write(json.dumps(settings.val()).encode())
    
    
    
        
while True:
	update_firebase()
	sleep(1)	
        #sleepTime = int(sleepTime)
		