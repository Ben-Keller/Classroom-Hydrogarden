import csv
import json

with open(r'C:\Users\Ben\Downloads\file2.json','r') as g:
    data=g.read()
d=json.loads(data)



while True:
    text=input("Input: ")
    print('You said "', text, '"')
    if 'good boy' in text:
        print("c")
    elif 'turn off the light' in text:
        print("a")
    elif 'blink' in text:
        print("b")
    elif 'goodbye' in text:
        print("c")
    for row in d:
        if(row['question']==text):
            print(row['answer'])
