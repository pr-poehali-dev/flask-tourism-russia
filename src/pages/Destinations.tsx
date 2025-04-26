
import { useState } from "react";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CityCard from "@/components/CityCard";

type RegionType = "all" | "central" | "northwest" | "south" | "volga" | "ural" | "siberia" | "fareast";

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRegion, setActiveRegion] = useState<RegionType>("all");

  const destinations = [
    {
      name: "Москва",
      imageUrl: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=800",
      description: "Столица России, город с богатой историей, культурой и архитектурой. Посетите Красную площадь, Кремль и множество музеев.",
      rating: 4.8,
      tags: ["Культура", "История", "Мегаполис"],
      region: "central"
    },
    {
      name: "Санкт-Петербург",
      imageUrl: "https://images.unsplash.com/photo-1556610961-2fecc5927173?auto=format&fit=crop&q=80&w=800",
      description: "Культурная столица России с великолепной архитектурой, музеями мирового класса и романтическими каналами.",
      rating: 4.9,
      tags: ["Культура", "Архитектура", "Музеи"],
      region: "northwest"
    },
    {
      name: "Сочи",
      imageUrl: "https://images.unsplash.com/photo-1624624127218-0ec3a05efe9a?auto=format&fit=crop&q=80&w=800",
      description: "Курортный город на Черном море, известный своими пляжами, горнолыжными курортами и субтропическим климатом.",
      rating: 4.7,
      tags: ["Море", "Горы", "Курорт"],
      region: "south"
    },
    {
      name: "Казань",
      imageUrl: "https://images.unsplash.com/photo-1600421546262-7100a350e9fc?auto=format&fit=crop&q=80&w=800",
      description: "Столица Татарстана, где гармонично сочетаются исламская и православная культуры, современность и история.",
      rating: 4.6,
      tags: ["Культура", "История", "Гастрономия"],
      region: "volga"
    },
    {
      name: "Калининград",
      imageUrl: "https://images.unsplash.com/photo-1652200969557-8cfb8c14dd4f?auto=format&fit=crop&q=80&w=800",
      description: "Самый западный город России с европейской атмосферой, янтарными пляжами и уникальной историей.",
      rating: 4.5,
      tags: ["Европа", "Балтика", "Янтарь"],
      region: "northwest"
    },
    {
      name: "Владивосток",
      imageUrl: "https://images.unsplash.com/photo-1628383367850-afdf204c2d77?auto=format&fit=crop&q=80&w=800",
      description: "Город у моря на Дальнем Востоке с потрясающими видами, мостами и свежайшими морепродуктами.",
      rating: 4.7,
      tags: ["Тихий океан", "Морепродукты", "Природа"],
      region: "fareast"
    },
    {
      name: "Екатеринбург",
      imageUrl: "https://images.unsplash.com/photo-1631189416014-46f8056f4707?auto=format&fit=crop&q=80&w=800",
      description: "Крупный промышленный и культурный центр Урала с богатой историей и современной архитектурой.",
      rating: 4.4,
      tags: ["Урал", "История", "Культура"],
      region: "ural"
    },
    {
      name: "Новосибирск",
      imageUrl: "https://images.unsplash.com/photo-1604147319109-4de3039545c1?auto=format&fit=crop&q=80&w=800",
      description: "Крупнейший город Сибири, научный и культурный центр с театрами, музеями и уникальной природой вокруг.",
      rating: 4.3,
      tags: ["Сибирь", "Наука", "Культура"],
      region: "siberia"
    },
    {
      name: "Ялта",
      imageUrl: "https://images.unsplash.com/photo-1586969164412-aeadc99dcdce?auto=format&fit=crop&q=80&w=800",
      description: "Курортный город на южном берегу Крыма с прекрасным климатом, пляжами и дворцами.",
      rating: 4.6,
      tags: ["Море", "Курорт", "История"],
      region: "south"
    }
  ];

  const filteredDestinations = destinations.filter(city => {
    const matchesSearch = city.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          city.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          city.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesRegion = activeRegion === "all" || city.region === activeRegion;
    
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-tourism-blue py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Направления</h1>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Исследуйте разнообразные города и регионы России, 
            от исторических памятников до современных мегаполисов и природных чудес
          </p>
          
          <div className="max-w-md mx-auto bg-white p-2 rounded-full shadow-lg flex">
            <input 
              type="text" 
              placeholder="Поиск по городам, регионам или интересам" 
              className="flex-grow bg-transparent px-4 py-2 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="rounded-full bg-tourism-blue hover:bg-tourism-darkBlue">
              <Search className="mr-2" size={16} />
              Найти
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="w-full mb-12" onValueChange={(value) => setActiveRegion(value as RegionType)}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="all">Все регионы</TabsTrigger>
              <TabsTrigger value="central">Центральный</TabsTrigger>
              <TabsTrigger value="northwest">Северо-Западный</TabsTrigger>
              <TabsTrigger value="south">Южный</TabsTrigger>
              <TabsTrigger value="volga">Поволжье</TabsTrigger>
              <TabsTrigger value="ural">Урал</TabsTrigger>
              <TabsTrigger value="siberia">Сибирь</TabsTrigger>
              <TabsTrigger value="fareast">Дальний Восток</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.map((city, index) => (
                <CityCard key={index} {...city} />
              ))}
            </div>
          </TabsContent>
          
          {["central", "northwest", "south", "volga", "ural", "siberia", "fareast"].map((region) => (
            <TabsContent key={region} value={region} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((city, index) => (
                  <CityCard key={index} {...city} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {filteredDestinations.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Ничего не найдено</h3>
            <p className="text-gray-500">
              Попробуйте изменить параметры поиска или выбрать другой регион
            </p>
          </div>
        )}
      </div>
      
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Путешествуйте по России с комфортом</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем комплексный подход к организации путешествий, 
              чтобы вы могли наслаждаться красотой России без лишних хлопот
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-tourism-blue">🏨</div>
              <h3 className="text-xl font-semibold mb-2">Проживание</h3>
              <p className="text-gray-600">
                От люксовых отелей до аутентичных гостевых домов - 
                мы предлагаем варианты размещения на любой вкус и бюджет
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-tourism-blue">🚂</div>
              <h3 className="text-xl font-semibold mb-2">Транспорт</h3>
              <p className="text-gray-600">
                Удобные варианты перемещения между городами и внутри них, 
                включая авиаперелеты, ЖД билеты и трансферы
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-tourism-blue">👩‍🏫</div>
              <h3 className="text-xl font-semibold mb-2">Экскурсии</h3>
              <p className="text-gray-600">
                Групповые и индивидуальные экскурсии с профессиональными гидами, 
                которые раскроют все секреты посещаемых мест
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-tourism-darkBlue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-white text-3xl">✈️</span>
                <span className="font-bold text-2xl">РусТур</span>
              </div>
              <p className="text-gray-300 max-w-xs">
                Открывайте красоту России вместе с нами. Путешествия, которые останутся в памяти навсегда.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">О компании</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">О нас</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Команда</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Отзывы</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Контакты</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Направления</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">Популярные города</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Пляжный отдых</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Экскурсионные туры</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Активный отдых</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Поддержка</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">Помощь</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Политика</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Условия</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 РусТур. Все права защищены.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">ВКонтакте</a>
              <a href="#" className="text-gray-400 hover:text-white">Telegram</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Destinations;
