import json

# load data
data = json.load(open("/home/cs143/data/nobel-laureates.json", "r"))

with open("laureates.import", 'w') as outf:
    for laureate in data["laureates"]:
        outf.write(json.dumps(laureate) + '\n')
