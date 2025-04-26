
export interface Destination {
  name: string;
  imageUrl: string;
  description: string;
  rating: number;
  tags: string[];
  region: string;
}

export const destinations: Destination[] = [
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
