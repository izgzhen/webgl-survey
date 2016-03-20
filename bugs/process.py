import json


def is_h3(ln):
    return ln[:4] == "### "

def is_item(ln):
    return ln[:2] == "* "

def parse_type(ln):
    return ln[4:]

def parse_item(ln):
    return ln[2:]

def get_type_list_pairs(source):
    lns = source.splitlines()
    types = []
    lists = []
    cur_items = []
    in_reading = False
    for ln in lns:
        if in_reading:
            if is_item(ln):
                cur_items.append(parse_item(ln))
            else:
                print "not an item, end the collecting"
                lists.append(cur_items)
                in_reading = False
        else:
            if is_h3(ln):
                types.append(parse_type(ln))
                in_reading = True
                cur_items = []
    return zip(types, lists)

def gen_JSON(pairs):
    lsts = map(lambda (ty, lst) : map(lambda link: { "link" : link, "categories" : [ty]}, lst), pairs)
    return reduce(lambda a, b : a + b, lsts)

md = open("stackoverflow.md").read()

pairs = get_type_list_pairs(md)

result = gen_JSON(pairs)

print result

# open("result.json", "w").write(result)
