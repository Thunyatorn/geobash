import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import Navbar from "./_components/navbar";
import KatexSpan from "./_components/KatexSpan";
import Image from "next/image";

const quadraticEquationTest = `Given a general quadratic equation of the form
$$ax^{2} + bx + c = 0$$
with $x$ representing an unknown, with $a$, $b$ and $c$ representing constants, and with $a \\ne 0$, the quadratic formula is:
$$x = \\frac{-b \\pm \\sqrt{b^{2} - 4ac}}{2a}$$`;

const Equation = `Given point $a$, $b$, $c$. 
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
$$(1+i)(b-c)(a^2b-iab^2-a^2c+ib^2c-iac^2+ibc^2$$
are collinear.
`;

const Equation3 = `We then want to show that
$$\\frac{(b-c)((b+c)(ab-iac-(1-i)bc)-(1+i)(a^2b-iab^2-a^c+ib^2c-iac^2+ibc^2))}{(b^2-c^2-(2a(b-c)+i\\cdot 2(a-b)(a-c)))(ab-iac-(1-i)bc)}=\\frac{a(b-c)^2((-1-i)a+ib+c)}{((-i+1)a+b-ic)^2(ab-iac-(1-i)bc)}$$
is a real but it's self conjugate so the result follows.
`;

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex w-screen min-h-screen flex-col m-5 gap-y-4">
        <h1 className="text-3xl font-bold">GeoBash</h1>
        <p className="">This online tool is a diagram-to-coordinates manipulation application compiled with a GeoGebra file (.ggb) and converted in the form of a bashing equation.</p>
        <ul className="">
          <li>Input: the GeoGebra file (.ggb)</li>
          <li>Output: Equation of bashing form expressed using LaTeX </li>
        </ul>
        <h1 className="text-2xl font-bold">Example</h1>
        <h1 className="text-xl font-bold">Input</h1>
        <div className="flex w-screen items-center">
          <Image src="/geogebra-export.svg" width={1000} height={1000} alt="skibidi" />
        </div>
        <h1 className="text-xl font-bold">Output</h1>
        <KatexSpan
          text={Equation}
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
