import Image from "next/image";
import image from '../../../public/assets/fotterlogo.png';

const Footer = () => {
  return (
    <div className="bg-black text-white p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src={image}
            alt="Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="text-xl font-bold">Personal</span>
        </div>
        <div className="text-center">
          <p>&copy; 2019-2023 Personal</p>
          <p>Made in Figma</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
