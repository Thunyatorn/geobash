import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import Navbar from "./_components/navbar";
import KatexSpan from "./_components/KatexSpan";
import Image from "next/image";
import FileUploadButton from "./_components/FileUploadButton";
import CodeBlock from "./_components/Codeblock";
import Equation from "./_components/Equation";

const quadraticEquationTest = `Given a general quadratic equation of the form
$$ax^{2} + bx + c = 0$$
with $x$ representing an unknown, with $a$, $b$ and $c$ representing constants, and with $a \\ne 0$, the quadratic formula is:
$$x = \\frac{-b \\pm \\sqrt{b^{2} - 4ac}}{2a}$$`;

const Equation1 = `Given point $a$, $b$, $c$. 
$$d=a+(c-a)i$$
$$e=a+(a-b)i$$
$$f=b+(a-b)i$$
$$g=c+(c-a)i$$
$$k=\\frac{fg-bc}{f+g-b-c}=a+i\\cdot\\frac{(a-b)(a-c)}{b-c}$$
$$m=\\frac{b+c}{2}$$
$$h=\\frac{(1+i)(a^2b-iab^2-a^2c+ib^2c-iac^2+ibc^2)}{2(ab-iac-(1-i)bc)}$$
It remains to show that
$$2a+i\\cdot\\frac{2(a-b)(a-c)}{b-c}, b+c, \\frac{(1+i)(a^2b-iab^2-a^2c+ib^2c-iac^2+ibc^2)}{2(ab-iac-(1-i)bc)}$$
are collinear.
`;

const Equation2 = `Clearing denominators, this becomes
$$(2a(b-c)+i\\cdot2(a-b)(a-c))\\cdot(ab-iac-(1-i)bc),$$
$$(b+c)(b-c)(ab-iac-(1-i)bc),$$
$$(1+i)(b-c)(a^2b-iab^2-a^2c+ib^2c-iac^2+ibc^2)$$
are collinear.
`;

const Equation3 = `We then want to show that
$$\\frac{(b-c)((b+c)(ab-iac-(1-i)bc)-(1+i)(a^2b-iab^2-a^c+ib^2c-iac^2+ibc^2))}{(b^2-c^2-(2a(b-c)+i\\cdot 2(a-b)(a-c)))(ab-iac-(1-i)bc)}=\\frac{a(b-c)^2((-1-i)a+ib+c)}{((-i+1)a+b-ic)^2(ab-iac-(1-i)bc)}$$
is a real but it's self conjugate so the result follows.
`;

const Code = `Point('name', 'A')
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
('c', '((C_x*(A_y+((A_y*tan(A))+(B_y*tan(B))+(C_y*tan(C)))/(tan(A)+tan(B)+tan(C))+B_y)/3)-(C_y*(A_x+((A_x*tan(A))+(B_x*tan(B))+(C_x*tan(C)))/(tan(A)+tan(B)+tan(C))+B_x)/3))')`;

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  // void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex w-screen min-h-screen flex-col m-5 gap-y-4">
        <h1 className="text-3xl font-bold">GeoBash</h1>
        <p className="">This online tool is a diagram-to-coordinates manipulation software. Given Geogebra file (.ggb), the software will output cartesian and complex coordinates of point in the diagram.</p>
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="">
          <li><b>Auto-detect points and objects</b> in a `.ggb` file (independent & dependent)</li>
          <li><b>Dual output:</b> Cartesian (x,y) and complex z=x+iy</li>
          <li><b>Respect diagram visibility:</b> skip hidden points (configurable)</li>
          <li><b>Names preserved:</b> labels like `A, B, C, H, O, ...` carried through</li>
        </ul>
        <h2 className="text-2xl font-bold">Upcoming features</h2>
        <ul className="">
          <li><b>Batch mode:</b> process many `.ggb` files at once</li>
          <li>Select primary points--points</li>
        </ul>
        {/* <ul className="">
          <li>Input: the GeoGebra file (.ggb)</li>
          <li>Output: Equation of bashing form expressed using LaTeX </li>
          </ul> */}
        <h1 className="text-2xl font-bold">Example</h1>
        <h1 className="text-xl font-bold">Sample Input</h1>
        <div className="flex w-screen items-center">
          <Image src="/geogebra-export (1).svg" width={1000} height={1000} alt="skibidi" />
        </div>
        <h1 className="text-xl font-bold">Sample Output (Without formatting with LaTeX)</h1>
        <div className="min-w-screen">
          <CodeBlock  code={Code} />
        </div>
        <h1 className="text-xl font-bold">Sample Figure</h1>
        <div className="flex w-screen items-center">
          <Image src="/geogebra-export.svg" width={1000} height={1000} alt="skibidi" />
        </div>
        <h1 className="text-xl font-bold">Sample Solution by typical contestant in mathematics olympiad competition</h1>
        <KatexSpan
          text={Equation1}
          className='mx-20 my-20 text-l'
        />
        <KatexSpan
          text={Equation2}
          className='mx-20 my-20 text-l'
        />
        <KatexSpan
          text={Equation3}
          className='mx-20 my-20 text-l'
        />

        <p className="flex justify-center text-red-500">The upload button and LaTeX format are currently not available due to the web migration problem. However, you can download the source code of the program from <a href="/geogebra.py" className="text-blue-900">this link</a></p>

        <FileUploadButton />

        <div className="flex justify-center text-sm">
          Developed by Puntre & Thun
        </div>


        {/* <KatexSpan text={"$$$$"} /> */}
      </main>
      {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <Navbar />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>
          </div>

          <LatestPost />
        </div>
      </main> */}
    </HydrateClient>
  );
}
