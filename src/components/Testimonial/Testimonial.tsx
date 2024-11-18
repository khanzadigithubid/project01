import Image from "next/image";
import image1 from '../../../public/assets/clientimg1.png';
import image2 from '../../../public/assets/clientimg2.png';

const Testimonial = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <h5 className="text-3xl leading-6 flex justify-center items-center gap-2">
            <span className="font-normal">My</span><span className="font-bold">TESTIMONIAL</span>
          </h5>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-0 justify-items-center">
          <div className="max-w-sm bg-white rounded-2xl border shadow-md shadow-gray-300">
            <div className="flex flex-col items-center justify-center p-10">
              <Image src={image1} alt="Everen Shah" width={80} height={80} className="mb-3 rounded-full shadow-lg" />
              <p className="text-sm text-gray-900 text-center mb-10">
                Remarkable impact! Shahrukh transformed our digital presence at Patron. Their strategies were spot-on, driving notable growth. Highly recommended for exceptional digital marketing expertise.
              </p>
              <div className="h-0 w-32 border border-black mb-4"></div>
              <h3 className="mb-1 text-xl font-semibold text-gray-900">Everen Shah</h3>
              <p className="mb-1 font-normal text-gray-900">Designer</p>
            </div>
          </div>

          <div className="max-w-sm bg-black rounded-2xl border shadow-md shadow-gray-300">
            <div className="flex flex-col items-center justify-center p-10">
              <Image src={image2} alt="Floora Sheen" width={80} height={80} className="mb-3 rounded-full shadow-lg" />
              <p className="text-sm text-white text-center mb-10">
                Remarkable impact! Shahrukh transformed our digital presence at Patron. Their strategies were spot-on, driving notable growth. Highly recommended for exceptional digital marketing expertise.
              </p>
              <div className="h-0 w-32 border border-white mb-4"></div>
              <h3 className="mb-1 text-xl font-semibold text-white">Floora Sheen</h3>
              <p className="mb-1 font-normal text-white">Designer</p>
            </div>
          </div>

          <div className="max-w-sm bg-white rounded-2xl border shadow-md shadow-gray-300">
            <div className="flex flex-col items-center justify-center p-10">
              <Image src={image1} alt="Everen Shah" width={80} height={80} className="mb-3 rounded-full shadow-lg"/>
              <p className="text-sm text-gray-900 text-center mb-10">
                Remarkable impact! Shahrukh transformed our digital presence at Patron. Their strategies were spot-on, driving notable growth. Highly recommended for exceptional digital marketing expertise.
              </p>
              <div className="h-0 w-32 border border-black mb-4"></div>
              <h3 className="mb-1 text-xl font-semibold text-gray-900">Everen Shah</h3>
              <p className="mb-1 font-normal text-gray-900">Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
