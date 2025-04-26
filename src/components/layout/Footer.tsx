
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "О компании",
      links: [
        { label: "О нас", url: "#" },
        { label: "Команда", url: "#" },
        { label: "Отзывы", url: "#" },
        { label: "Контакты", url: "#" }
      ]
    },
    {
      title: "Направления",
      links: [
        { label: "Популярные города", url: "#" },
        { label: "Пляжный отдых", url: "#" },
        { label: "Экскурсионные туры", url: "#" },
        { label: "Активный отдых", url: "#" }
      ]
    },
    {
      title: "Поддержка",
      links: [
        { label: "Помощь", url: "#" },
        { label: "FAQ", url: "#" },
        { label: "Политика", url: "#" },
        { label: "Условия", url: "#" }
      ]
    }
  ];

  const socialLinks = [
    { label: "ВКонтакте", url: "#" },
    { label: "Telegram", url: "#" },
    { label: "Instagram", url: "#" },
    { label: "YouTube", url: "#" }
  ];

  return (
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
            {footerLinks.map((column, columnIndex) => (
              <div key={columnIndex}>
                <h3 className="font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.url} className="text-gray-300 hover:text-white">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} РусТур. Все права защищены.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} className="text-gray-400 hover:text-white">{link.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
