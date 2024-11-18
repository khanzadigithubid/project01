import React from "react";
import Image from "next/image";
import image from '../../../public/assets/aboutimg.png';

const About = () => {
  return (
    <>
      <section id="about" className="py-20 px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Image
              src={image}
              alt="About Me Illustration"
              loading="lazy"
              width={400}
              height={400}
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </div>

          <div>
            <h1 className="text-3xl font-normal mb-4">
              About <span className="text-black font-bold">Me</span>
            </h1>
            <p className="mb-3">
              I’m a passionate, self-proclaimed designer who specializes in
              full-stack development (React.js & Node.js). I am very
              enthusiastic about bringing the technical and visual aspects of
              digital products to life. User experience, pixel-perfect design,
              and writing clear, readable, highly performant code matter to me.
            </p>
            <p className="mb-3">
              I began my journey as a web developer in 2015, and since then,
              I’ve continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I’m building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, NestJS,
              TailwindCSS, Supabase, and more.
            </p>
            <p>
              When I’m not in full-on developer mode, you can find me hovering
              around on Twitter or working on indie hacker projects. You can
              follow me on GitHub where I share tech-related bites and build in
              public.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
