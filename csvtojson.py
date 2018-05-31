import json
import csv

o = open(r'C:\Users\Ben\Downloads\wordz.csv', 'rU')
f = open(r'C:\Users\Ben\Downloads\file2.json', 'w')
reader = csv.DictReader(o, fieldnames = ( "question","answer","fieldname2","fieldname3" ))
out = json.dumps( [ row for row in reader ] )
f.write(out)
