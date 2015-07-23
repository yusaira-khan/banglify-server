__author__ = 'ykhan14'
import re
import pymongo
import subprocess

mongo = pymongo.MongoClient()
bangla = mongo.lang.bangla


def add_char_to_database(char_xml, collection):
    char_data = char_xml.split(' ')
    numeric = int(char_data[1][4:-1], 16)
    char = chr(numeric)
    end = False
    index = 3
    desc = ''
    base = ''

    while not end:
        word = char_data[index].lower()
        if '"' in char_data[index]:
            end = True
            word = word[:-1]
            base = word
        desc += ' ' + word
        index += 1
    sample = {'char': char, 'numeric': numeric, 'description': desc.strip(), 'base': base}
    invalid = True

    while invalid:
        base = input('insert ' + str(sample) + ' to database?')
        if base == 'no':
            break
        elif base == '':
            invalid = False
        elif base == '-1':
            base = base[:-1]
        else:
            sample['base'] = base
    else:
        collection.insert_one(sample)


def parse_from_file(file, limit=None):
    group = re.compile("^\s*<group")
    char = re.compile("^\s*<char")
    group_count = 0
    char_count = 0

    with open(file, "r") as big_file:
        for line in big_file.readlines():
            if group.match(line):
                group_count += 1
                char_count = 0
            if group_count == 25:
                if char.match(line):
                    char_count += 1
                    add_char_to_database(line.strip(), bangla)
                    if char_count == limit:
                        break


def print_collection(collection):
    for col in collection.find({}):
        print(col)


def add_dari(collection):
    dari_char = '<char cp="0964" na="DEVANAGARI DANDA" gc="Po" lb="BA" sc="Zyyy" scx="Beng" InSC="Other"/>'
    add_char_to_database(dari_char, collection)


def remove_slashes(collection):
    valid = re.compile('[/"]')
    for char in collection.find({}):
        char_id = char['_id']
        desc = valid.sub('', char['description'])
        collection.update_one({'_id': char_id}, {'$set': {'description': desc}})


parse_from_file('ucd.all.grouped.xml')
add_dari(bangla)
remove_slashes(bangla)
print_collection(bangla)
