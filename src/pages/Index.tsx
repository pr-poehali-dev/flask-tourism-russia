import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CityCard from "@/components/CityCard";

const Index = () => {
  const popularCities = [
    {
      name: "Москва",
      imageUrl: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=800",
      description: "Столица России, город с богатой историей, культурой и архитектурой. Посетите Красную площадь, Кремль и множество музеев.",
      rating: 4.8,
      tags: ["Культура", "История", "Мегаполис"]
    },
    {
      name: "Санкт-Петербург",
      imageUrl: "https://images.unsplash.com/photo-1556610961-2fecc5927173?auto=format&fit=crop&q=80&w=800",
      description: "Культурная столица России с великолепной архитектурой, музеями мирового класса и романтическими каналами.",
      rating: 4.9,
      tags: ["Культура", "Архитектура", "Музеи"]
    },
    {
      name: "Сочи",
      imageUrl: "https://images.unsplash.com/photo-1624624127218-0ec3a05efe9a?auto=format&fit=crop&q=80&w=800",
      description: "Курортный город на Черном море, известный своими пляжами, горнолыжными курортами и субтропическим климатом.",
      rating: 4.7,
      tags: ["Море", "Горы", "Курорт"]
    }
  ];

  const recommendedCities = [
    {
      name: "Казань",
      imageUrl: "https://images.unsplash.com/photo-1600421546262-7100a350e9fc?auto=format&fit=crop&q=80&w=800",
      description: "Столица Татарстана, где гармонично сочетаются исламская и православная культуры, современность и история.",
      rating: 4.6,
      tags: ["Культура", "История", "Гастрономия"]
    },
    {
      name: "Калининград",
      imageUrl: "https://images.unsplash.com/photo-1652200969557-8cfb8c14dd4f?auto=format&fit=crop&q=80&w=800",
      description: "Самый западный город России с европейской атмосферой, янтарными пляжами и уникальной историей.",
      rating: 4.5,
      tags: ["Европа", "Балтика", "Янтарь"]
    },
    {
      name: "Владивосток",
      imageUrl: "https://images.unsplash.com/photo-1628383367850-afdf204c2d77?auto=format&fit=crop&q=80&w=800",
      description: "Город у моря на Дальнем Востоке с потрясающими видами, мостами и свежайшими морепродуктами.",
      rating: 4.7,
      tags: ["Тихий океан", "Морепродукты", "Природа"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Популярные направления</h2>
          <Button variant="link" className="flex items-center text-tourism-blue">
            Все направления <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCities.map((city, index) => (
            <CityCard key={index} {...city} />
          ))}
        </div>
      </section>
      
      <section className="bg-tourism-lightBlue/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Рекомендуем посетить</h2>
            <Button variant="link" className="flex items-center text-tourism-blue">
              Все города <ArrowRight size={16} className="ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedCities.map((city, index) => (
              <CityCard key={index} {...city} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-tourism-blue font-semibold mb-4">Почему РусТур?</span>
              <h2 className="text-3xl font-bold mb-6">Исследуйте Россию с профессионалами</h2>
              <p className="text-gray-600 mb-6">
                Мы предлагаем уникальные туристические маршруты, которые помогут вам увидеть самые удивительные места нашей страны. От исторических городов до удивительных природных ландшафтов — мы знаем всё о путешествиях по России.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="mr-2 text-tourism-blue">✓</span>
                  <span>Индивидуальный подход к планированию путешествий</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-tourism-blue">✓</span>
                  <span>Опытные гиды с глубоким знанием местной культуры</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-tourism-blue">✓</span>
                  <span>Безопасность и комфорт в каждой поездке</span>
                </li>
              </ul>
              <Button className="w-full md:w-auto bg-tourism-blue hover:bg-tourism-darkBlue">
                Узнать больше
              </Button>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto bg-tourism-blue">
              <img 
                src="https://images.unsplash.com/photo-1553546895-531931aa1aa8?auto=format&fit=crop&q=80&w=800"
                alt="Путешествие по России" 
                className="w-full h-full object-cover"
              />
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

export default Index;
