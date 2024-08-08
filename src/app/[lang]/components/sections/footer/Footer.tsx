import { Facebook, InstagramIcon, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="flex flex-col gap-4 items-center justify-center bg-black text-white p-4 h-[50vh]">
      <div className="flex items-center justify-center space-x-4">
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61563395220882">
          <Facebook className="text-white h-6 w-6" />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/aricocaveexperience/">
          <InstagramIcon className="text-white h-6 w-6" />
        </a>

        <a target="_blank" rel="noopener noreferrer" href="mailto:arlet@aricocave.com">
          <Mail className="text-white h-6 w-6" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="tel:+34 672 10 44 21">
          <Phone className="text-white h-6 w-6" />
        </a>
      </div>
      <div className="flex flex-col items-center">
        <a
          className="flex items-center hover:underline underline-offset-2 gap-2"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/profile.php?id=61563395220882"
        >
          <MapPin className="text-white h-6 w-6" />
          <span className="font-light text-xs"> Morra del Pino N°9, El Bueno, Arico, Canarias, Spain</span>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aricocave.com">
          aricocave.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
