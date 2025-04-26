import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative hero-pattern min-h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-tourism-darkBlue/70 to-tourism-blue/30"></div>
      <div className="container mx-auto px-4 py-16 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in">
          Откройте для себя красоту России
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
          Исследуйте величественные города, потрясающую природу и богатую культуру нашей необъятной страны
        </p>
        
        <div className="max-w-md mx-auto bg-white p-2 rounded-full shadow-lg flex animate-fade-in">
          <input 
            type="text" 
            placeholder="Куда хотите поехать?" 
            className="flex-grow bg-transparent px-4 py-2 outline-none"
          />
          <Button className="rounded-full bg-tourism-blue hover:bg-tourism-darkBlue">
            <Search className="mr-2" size={16} />
            Найти
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in">
          <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg text-white">
            <div className="font-bold text-2xl">100+</div>
            <div className="text-sm">Городов</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg text-white">
            <div className="font-bold text-2xl">500+</div>
            <div className="text-sm">Туров</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg text-white">
            <div className="font-bold text-2xl">10k+</div>
            <div className="text-sm">Путешественников</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
