const Equation = () => {
    return (
        `Point('name', 'A')
        ('x', 'A_x')
        ('y', 'A_y')


        Point('name', 'B')
        ('x', 'B_x')
        ('y', 'B_y')


        Point('name', 'C')
        ('x', 'C_x')
        ('y', 'C_y')


        Point('name', 'H')
        ('x', '((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))')
        ('y', '((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))')


        Point('name', 'D')
        ('x', '(B_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+C_x)/3')
        ('y', '(B_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+C_y)/3')


        Point('name', 'E')
        ('x', '(C_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+A_x)/3')
        ('y', '(C_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+A_y)/3')


        Point('name', 'F')
        ('x', '(A_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+B_x)/3')
        ('y', '(A_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+B_y)/3')


        Intersect('name', 'P')
        ('x', '((((C_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+A_x)/3-B_x)*(((B_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+C_x)/3*A_y)-((B_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+C_y)/3*A_x)))-((A_x-(B_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+C_x)/3)*((B_x*(C_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+A_y)/3)-(B_y*(C_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+A_x)/3))))/(((B_y-(C_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+A_y)/3)*(A_x-(B_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+C_x)/3))-(((B_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+C_y)/3-A_y)*((C_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+A_x)/3-B_x)))')
        ('y', '((((B_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+C_y)/3-A_y)*((B_x*(C_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+A_y)/3)-(B_y*(C_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+A_x)/3)))-((B_y-(C_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+A_y)/3)*(((B_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+C_x)/3*A_y)-((B_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+C_y)/3*A_x))))/(((B_y-(C_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+A_y)/3)*(A_x-(B_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+C_x)/3))-(((B_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+C_y)/3-A_y)*((C_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+A_x)/3-B_x)))')


        Polygon('name', 't1')
        ('p', ['A', 'B', 'C'])


        Line('name', 'c')
        ('a', '(A_y-B_y)')
        ('b', '(B_x-A_x)')
        ('c', '((A_x*B_y)-(A_y*B_x))')


        Line('name', 'a')
        ('a', '(B_y-C_y)')
        ('b', '(C_x-B_x)')
        ('c', '((B_x*C_y)-(B_y*C_x))')


        Line('name', 'b')
        ('a', '(C_y-A_y)')
        ('b', '(A_x-C_x)')
        ('c', '((C_x*A_y)-(C_y*A_x))')


        Line('name', 'f')
        ('a', '(B_y-((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C)))')
        ('b', '(((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))-B_x)')
        ('c', '((B_x*((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C)))-(B_y*((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))))')


        Line('name', 'g')
        ('a', '(C_y-((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C)))')
        ('b', '(((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))-C_x)')
        ('c', '((C_x*((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C)))-(C_y*((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))))')


        Line('name', 'h')
        ('a', '(A_y-((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C)))')
        ('b', '(((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))-A_x)')
        ('c', '((A_x*((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C)))-(A_y*((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))))')


        OrthogonalLine('name', 'i')
        ('a', '(((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))-C_x)')
        ('b', '-(C_y-((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C)))')
        ('c', '(((C_y-((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C)))*B_y)-((((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))-C_x)*B_x))')


        OrthogonalLine('name', 'j')
        ('a', '(((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))-A_x)')
        ('b', '-(A_y-((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C)))')
        ('c', '(((A_y-((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C)))*B_y)-((((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))-A_x)*B_x))')


        OrthogonalLine('name', 'k')
        ('a', '(((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))-A_x)')
        ('b', '-(A_y-((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C)))')
        ('c', '(((A_y-((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C)))*C_y)-((((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))-A_x)*C_x))')


        OrthogonalLine('name', 'l')
        ('a', '(((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))-B_x)')
        ('b', '-(B_y-((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C)))')
        ('c', '(((B_y-((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C)))*C_y)-((((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))-B_x)*C_x))')


        OrthogonalLine('name', 'm')
        ('a', '(((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))-C_x)')
        ('b', '-(C_y-((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C)))')
        ('c', '(((C_y-((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C)))*A_y)-((((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))-C_x)*A_x))')


        OrthogonalLine('name', 'n')
        ('a', '(((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))-B_x)')
        ('b', '-(B_y-((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C)))')
        ('c', '(((B_y-((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C)))*A_y)-((((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))-B_x)*A_x))')


        Line('name', 's')
        ('a', '(((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))-B_y)')
        ('b', '(B_x-((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C)))')
        ('c', '((((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))*B_y)-(((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))*B_x))')


        Line('name', 't')
        ('a', '(((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))-A_y)')
        ('b', '(A_x-((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C)))')
        ('c', '((((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))*A_y)-(((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))*A_x))')


        Line('name', 'd')
        ('a', '(((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))-C_y)')
        ('b', '(C_x-((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C)))')
        ('c', '((((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))*C_y)-(((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))*C_x))')


        Line('name', 'p')
        ('a', '((B_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+C_y)/3-A_y)')
        ('b', '(A_x-(B_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+C_x)/3)')
        ('c', '(((B_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+C_x)/3*A_y)-((B_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+C_y)/3*A_x))')


        Line('name', 'q')
        ('a', '(B_y-(C_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+A_y)/3)')
        ('b', '((C_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+A_x)/3-B_x)')
        ('c', '((B_x*(C_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+A_y)/3)-(B_y*(C_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+A_x)/3))')


        Line('name', 'r')
        ('a', '(C_y-(A_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+B_y)/3)')
        ('b', '((A_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+B_x)/3-C_x)')
        ('c', '((C_x*(A_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+B_y)/3)-(C_y*(A_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+B_x)/3))')`
    );
};

export default Equation;