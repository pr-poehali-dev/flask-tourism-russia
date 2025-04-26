
const TravelFeatures = () => {
  const features = [
    {
      icon: "🏨",
      title: "Проживание",
      description: "От люксовых отелей до аутентичных гостевых домов - мы предлагаем варианты размещения на любой вкус и бюджет"
    },
    {
      icon: "🚂",
      title: "Транспорт",
      description: "Удобные варианты перемещения между городами и внутри них, включая авиаперелеты, ЖД билеты и трансферы"
    },
    {
      icon: "👩‍🏫",
      title: "Экскурсии",
      description: "Групповые и индивидуальные экскурсии с профессиональными гидами, которые раскроют все секреты посещаемых мест"
    }
  ];

  return (
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
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-tourism-blue">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelFeatures;
