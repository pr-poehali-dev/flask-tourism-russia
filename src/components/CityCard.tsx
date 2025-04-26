import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CityCardProps {
  imageUrl: string;
  name: string;
  description: string;
  rating: number;
  tags: string[];
}

const CityCard = ({ imageUrl, name, description, rating, tags }: CityCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
          {rating} ★
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-1 mt-auto">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-tourism-lightBlue text-tourism-blue">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CityCard;
