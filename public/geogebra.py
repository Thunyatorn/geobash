import xml.etree.ElementTree as ET

from sympy import symbols, simplify, tan

tree = ET.parse('D:\\Python\\geogebra\\test\\geogebra2.xml')

root = tree.getroot()

# print(root.tag)

# print(root.attrib)

a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z = symbols('a b c d e f g h i j k l m n o p q r s t u v w x y z')
a_x, b_x, c_x, d_x, e_x, f_x, g_x, h_x, i_x, j_x, k_x, l_x, m_x, n_x, o_x, p_x, q_x, r_x, s_x, t_x, u_x, v_x, w_x, x_x, y_x, z_x = symbols('a_x b_x c_x d_x e_x f_x g_x h_x i_x j_x k_x l_x m_x n_x o_x p_x q_x r_x s_x t_x u_x v_x w_x x_x y_x z_x')
a_y, b_y, c_y, d_y, e_y, f_y, g_y, h_y, i_y, j_y, k_y, l_y, m_y, n_y, o_y, p_y, q_y, r_y, s_y, t_y, u_y, v_y, w_y, x_y, y_y, z_y = symbols('a_y b_y c_y d_y e_y f_y g_y h_y i_y j_y k_y l_y m_y n_y o_y p_y q_y r_y s_y t_y u_y v_y w_y x_y y_y z_y')
A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, = symbols('A B C D E F G H I J K L M N O P Q R S T U V W X Y Z')
A_x, B_x, C_x, D_x, E_x, F_x, G_x, H_x, I_x, J_x, K_x, L_x, M_x, N_x, O_x, P_x, Q_x, R_x, S_x, T_x, U_x, V_x, W_x, X_x, Y_x, Z_x = symbols('A_x B_x C_x D_x E_x F_x G_x H_x I_x J_x K_x L_x M_x N_x O_x P_x Q_x R_x S_x T_x U_x V_x W_x X_x Y_x Z_x')
A_y, B_y, C_y, D_y, E_y, F_y, G_y, H_y, I_y, J_y, K_y, L_y, M_y, N_y, O_y, P_y, Q_y, R_y, S_y, T_y, U_y, V_y, W_y, X_y, Y_y, Z_y = symbols('A_y B_y C_y D_y E_y F_y G_y H_y I_y J_y K_y L_y M_y N_y O_y P_y Q_y R_y S_y T_y U_y V_y W_y X_y Y_y Z_y')

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

    def editX(self, x):
        self.x = x
    
    def editY(self, y):
        self.y = y


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

def tan(a):
    return "tan(" + a + ")"

class Incircle:
    name: str
    s: str

    def __init__(self, name, a: Point, b: Point, c: Point):
        aa = distance(b, c)
        bb = distance(c, a)
        cc = distance(a, b)
        self.s = div(add(aa, bb, cc), '2')

class TriangleCenter:
    name: str
    x: str
    y: str

    def __init__(self, name, a: Point, b: Point, c: Point, n: int):
        self.name = name
        # self.s = div(add(aa, bb, cc), '2')

def TriangleCenter(name, a: Point, b: Point, c: Point, n: int):
    if n == 1:
        aa = distance(b, c)
        bb = distance(c, a)
        cc = distance(a, b)
        res = Point(name)
        res.x = div(add(mul(aa, a.x), mul(bb, b.x), mul(cc, c.x)), add(aa, bb, cc))
        res.y = div(add(mul(aa, a.y), mul(bb, b.y), mul(cc, c.y)), add(aa, bb, cc))
        return res
    elif n == 2:
        res = Point(name)
        res.x = div(add(a.x, b.x, c.x), '3')
        res.y = div(add(a.y, b.y, c.y), '3')
        return res
    elif n == 4:
        res = Point(name)
        res.x = div(add(mul(a.x, tan(a.name)), mul(b.x, tan(b.name)), mul(c.x, tan(c.name))), add(tan(a.name), tan(b.name), tan(c.name)))
        res.y = div(add(mul(a.y, tan(a.name)), mul(b.y, tan(b.name)), mul(c.y, tan(c.name))), add(tan(a.name), tan(b.name), tan(c.name)))
        return res
    else:
        res = Point(name)
        return res


class OrthogonalLine:
    name: str
    a: str
    b: str
    c: str

    def __init__(self, name, a: Point, b: Line):
        self.name = name
        # print("TYPE", type(b))
        self.a = b.b
        self.b = "-" + b.a
        self.c = sub(mul(b.a, a.y), mul(b.b, a.x))

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
    p: list

    def __init__(self, name, a: list):
        self.name = name
        self.p = a

for child in root:
    if child.tag == "construction":
        # for i in child.iter('command'):
        #     print(i[0].attrib)
        # for i in child:
            # print(i.tag, i.attrib)
        for i in child.iter('element'):
            # elem[i.attrib['label']] = i.attrib['type']
            print(i.tag, i.attrib['label'], i.attrib['type'])
            if i.attrib['type'] == "point":
                elem[i.attrib['label']] = Point(i.attrib['label'])
            # if i.attrib['type'] == "line":
            #     elem[i.attrib['label']] = Line(i.attrib['label'])
            # print(i.tag, i.attrib)
        for i in child.iter('command'):
            print(i.tag, i.attrib)
            for j in i:
                print(j.attrib, end="")
            if i.attrib['name'] == "Polygon":
                l = []
                for j in i[0].attrib:
                    l.append(i[0].attrib[j])
                # print(i[1].attrib['a0'])
                # print(l)
                elem[i[1].attrib['a0']] = Polygon(i[1].attrib['a0'], l)
                ii = 0
                for j in i[1].attrib:
                    if j != 'a0':
                        elem[i[1].attrib[j]] = Line(i[1].attrib[j], elem[i[0].attrib['a' + str(ii)]], elem[i[0].attrib['a' + str((ii + 1) % len(i[0].attrib))]])
                        # print(i[0].attrib['a' + str(ii)], i[0].attrib['a' + str((ii + 1) % len(i[0].attrib))])
                        # print(i[1].attrib[j])
                        ii = ii + 1
            # if i.attrib['name'] == "Circle":
            if i.attrib['name'] == "Line":
                elem[i[1].attrib['a0']] = Line(i[1].attrib['a0'], elem[i[0].attrib['a0']], elem[i[0].attrib['a1']])
            if i.attrib['name'] == "Segment":
                elem[i[1].attrib['a0']] = Line(i[1].attrib['a0'], elem[i[0].attrib['a0']], elem[i[0].attrib['a1']])
            if i.attrib['name'] == "OrthogonalLine":
                # print(i[0].attrib['a0'], i[0].attrib['a1'])
                # print(elem[i[0].attrib['a1']])
                # print(type(elem[i[0].attrib['a1']]))
                # print(type(elem[i[0].attrib['a0']]).__name__)
                # for j in vars(elem[i[0].attrib['a1']]).items():
                #     print(j, end="")
                # print(i[1].attrib['a0'])
                elem[i[1].attrib['a0']] = OrthogonalLine(i[1].attrib['a0'], elem[i[0].attrib['a0']], elem[i[0].attrib['a1']])
            if i.attrib['name'] == "TriangleCenter":
                print(i[1].attrib['a0'])
                # pos = TriangleCenter(i[1].attrib['a0'], elem[i[0].attrib['a0']], elem[i[0].attrib['a1']], elem[i[0].attrib['a2']], i[0].attrib['a3'])
                elem[i[1].attrib['a0']] = TriangleCenter(i[1].attrib['a0'], elem[i[0].attrib['a0']], elem[i[0].attrib['a1']], elem[i[0].attrib['a2']], int(i[0].attrib['a3']))
                # print(elem[i[1].attrib['a0']])
                # for j in vars(elem[i[1].attrib['a0']]).items():
                #     print(j, end="")

                # elem[i[1].attrib['a0']] = Point(i[1].attrib['a0'])
                # elem[i[1].attrib['a0']].editX(pos.x)
                # elem[i[1].attrib['a0']].editY(pos.y)
                # elem[i[1].attrib['a0']].editX(pos.x)
                # elem[i[1].attrib['a0']].editY(pos.y)
            if i.attrib['name'] == "Intersect":
                elem[i[1].attrib['a0']] = Intersect(i[1].attrib['a0'], elem[i[0].attrib['a0']], elem[i[0].attrib['a1']])
            # if i.attrib['name'] == ""
                    # print(i[0].attrib[j])
                # for j in i:
                #     print(j.attrib)
            # for j in i:
            #     print(j.attrib, end="")
            print("\n")
        # for i in child:
        #     if i.tag == "command":
        #         print(i.tag, i.attrib)



for i in elem:
    print(type(elem[i]).__name__, end="")
    for j in vars(elem[i]).items():
        print(j)
        # express = j
        # print(simplify(express))
    print("\n")
    # if type(elem[i]).__name__ == "Polygon":
    #     # print("D")
    #     # print(elem[i])
    #     for j in vars(elem[i]).items():
    #         print(j, end="")
    #     print("\n")
    # if type(elem[i]).__name__ == "Point":
    #     for j in vars(elem[i]).items():
    #         print(j, end="")
    #     print("\n")

# a = Point('a')
# print(type(a).__name__)
# b = Point('b')
# print(b)
# c = Point('c')
# d = Incircle('d', a, b, c)
# for i in vars(d).items():
#     print(i)
# c = Line('c', a, b)
# for i in vars(c).items():
#     print(i)
# d = Midpoint("d", a, b)
# e = Point('e')
# f = Point('f')
# g = Line('g', e, f)
# h = Intersect('h', c, g)
# print(type(d), d.name, d.x, d.y)
# print(type(h), h.name, h.x, h.y)
# print(h.x)
# print('\n')
# print(h.y)