import Image from "next/image";
import projrct1 from "../../../public/assets/projimg1.png";
import projectt2 from "../../../public/assets/projimg2.png";
import project3 from "../../../public/assets/projimg3.png";

const Project = () => {
  return (
    <>
      <section id="projects">
        <div className="bg-black text-white pt-20 px-6 lg:px-24">
          <h2 className="text-4xl font-normal mb-16 text-center">
            My <span className="text-white font-bold">Projects</span>
          </h2>

          {/* Project 1 */}
          <div className="myproject flex flex-col gap-10 lg:flex-row items-center mb-12 lg:mb-14">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <Image
                src={projrct1}
                alt="Crypto Screener Application"
                loading="lazy"
                width={594}
                height={476}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 px-4 flex flex-col">
              <h3 className="text-5xl font-bold mb-6">01</h3>
              <h3 className="text-3xl font-semibold mb-4">
                Crypto Screener Application
              </h3>
              <p className="text-gray-400">
                I am Evren Shah. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry
                standard dummy text ever since the 1500s.
              </p>
              <a href="/project/1">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-3 text-lg cursor-pointer text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="myproject flex flex-col gap-10 lg:flex-row-reverse items-center mb-12 lg:mb-14">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <Image
                src={projectt2}
                alt="Freelance Marketplace Platform"
                loading="lazy"
                width={594}
                height={476}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 px-4 flex flex-col">
              <h3 className="text-5xl font-bold mb-6">02</h3>
              <h3 className="text-3xl font-semibold mb-4">
                Freelance Marketplace Platform
              </h3>
              <p className="text-gray-400">
                This platform helps freelancers and clients connect easily for
                various projects. Built with React, Node, and MongoDB to ensure
                efficient performance and scalability.
              </p>
              <a href="/project/2">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-3 text-lg cursor-pointer text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="myproject flex flex-col gap-10 lg:flex-row items-center mb-12 lg:mb-14">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <Image
                src={project3}
                alt="Task Management Application"
                loading="lazy"
                width={594}
                height={476}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 px-4 flex flex-col">
              <h3 className="text-5xl font-bold mb-6">03</h3>
              <h3 className="text-3xl font-semibold mb-4">
                Task Management Application
              </h3>
              <p className="text-gray-400">
                An application to manage daily tasks efficiently. It helps users
                create, assign, and track tasks in real-time, with notifications
                and analytics features.
              </p>
              <a href="/project/3">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-3 text-lg cursor-pointer text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
