import xml.etree.ElementTree as ET

from sympy import symbols, simplify

tree = ET.parse('D:\\Python\\geogebra\\geogebra.xml')

root = tree.getroot()

# print(root.tag)

# print(root.attrib)

elem = {}

def add(*a):
    s = "("
    for _ in a:
        s = s + _ + "+"
    s = s[:-1]
    s = s + ")"
    return s

def sub(a, b):
    return "(" + a + "-" + b + ")"

def mul(*a):
    s = "("
    for _ in a:
        s = s + _ + "*"
    s = s[:-1]
    s = s + ")"
    return s

def div(a, b):
    return a + "/" + b
    # return "(\\frac{" + a + "}{" + b + "})"

def sqrt(a):
    return "sqrt(" + a + ")"
    # return "\\sqrt{" + a + "}"

def pow(a, b):
    return a + "^" + b

class Point:
    name: str
    x: str
    y: str

    def __init__(self, name):
        self.name = name
        self.x = name + "_x"
        self.y = name + "_y"

class AngleBisector:
    name: str

class Segment:
    name: str
    a: str
    b: str
    c: str

    def __init__(self, name, a: Point, b: Point):
        self.name = name
        self.a = sub(a.y, b.y)
        self.b = sub(b.x, a.x)
        self.c = sub(mul(a.x, b.y), mul(a.y, b.x))

class Line:
    name: str
    a: str
    b: str
    c: str

    def __init__(self, name, a: Point, b: Point):
        self.name = name
        self.a = sub(a.y, b.y)
        self.b = sub(b.x, a.x)
        self.c = sub(mul(a.x, b.y), mul(a.y, b.x))


    # def __add__(self, xx, yy):
    #     xx.xt

    # def __init__(self, name):
    #     self.name = name

    # def __add__(self, ):

    # def __sub__(self):
    
    # def __mul__(self):

    # def __eq__(self):
        

    # def __str__(self):
    #     return f"{self.name}"

# x = Point('skibidi')

class Midpoint:
    name: str
    x: str
    y: str

    def __init__(self, name, a: Point, b: Point):
        self.name = name
        self.x = div(add(a.x, b.x), '2')
        self.y = div(add(a.y, b.y), '2')

class Intersect:
    name: str
    x: str
    y: str
    
    def __init__(self, name, a: Line, b: Line):
        self.name = name
        self.x = div(sub(mul(b.b, a.c), mul(a.b, b.c)), sub(mul(b.a, a.b), mul(a.a, b.b)))
        self.y = div(sub(mul(a.a, b.c), mul(b.a, a.c)), sub(mul(b.a, a.b), mul(a.a, b.b)))
        # self.x = div(sub(b.c, a.c), sub(a.m, b.m))
        # self.y = add(mul(a.m, self.x), a.c)

def distance(a, b):
    return sqrt(add(pow(sub(a.x, b.x), '2'), pow(sub(a.y, b.y), '2')))

class Incircle:
    name: str
    s: str

    def __init__(self, name, a: Point, b: Point, c: Point):
        ab = distance(a, b)
        bc = distance(b, c)
        ca = distance(c, a)
        self.s = add(ab, bc, ca)

class PerpendicularLine:
    name: str
    x: str
    y: str
    z: str

    def __init__(self, name, a: Point, b: Line):
        self.name = name
        self.x = b.b
        self.y = "-" + b.a
        self.z = sub(mul(b.a, a.y), mul(b.b, a.x))


class PerpendicularBisector:
    name: str
    
    def __init__(self, name, a: Point, b: Point):
        self.name = name
        

class Circle:
    name: str
    x: str
    y: str
    r: str
    
    def __init__(self, name, a: Point, b: Point):
        self.name = name
        self.x = a.x

class Polygon:
    name: str
    elem: list

    def __init__(self, name, a: list):
        self.name = name
        self.elem = a

for child in root:
    if child.tag == "construction":
        # for i in child.iter('command'):
        #     print(i[0].attrib)
        # for i in child:
            # print(i.tag, i.attrib)
        for i in child.iter('element'):
            elem[i.attrib['label']] = i.attrib['type']
            print(i.tag, i.attrib)
        for i in child.iter('command'):
            print(i.tag, i.attrib)
            # for j in i:
            #     print(j.attrib, end="")
            # if i.attrib['name'] == "Polygon":
            #     for j in i:
            #         print(j.attrib)
            for j in i:
                print(j.attrib, end="")
            print("\n")
        # for i in child:
        #     if i.tag == "command":
        #         print(i.tag, i.attrib)



# for i in elem:
#     print(i)

a = Point('a')
# print(type(a).__name__)
b = Point('b')
# print(b)
c = Line('c', a, b)
# for i in vars(c).items():
#     print(i)
d = Midpoint("d", a, b)
e = Point('e')
f = Point('f')
g = Line('g', e, f)
# h = Intersect('h', c, g)
# print(type(d), d.name, d.x, d.y)
# print(type(h), h.name, h.x, h.y)
# print(h.x)
# print('\n')
# print(h.y)