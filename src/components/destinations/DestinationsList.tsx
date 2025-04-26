
import CityCard from "@/components/CityCard";
import { Destination } from "@/types/destination";
import { TabsContent } from "@/components/ui/tabs";
import { RegionType } from "./RegionTabs";

interface DestinationsListProps {
  destinations: Destination[];
  activeRegion: RegionType;
}

const DestinationsList = ({ destinations, activeRegion }: DestinationsListProps) => {
  if (destinations.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">Ничего не найдено</h3>
        <p className="text-gray-500">
          Попробуйте изменить параметры поиска или выбрать другой регион
        </p>
      </div>
    );
  }

  return (
    <>
      <TabsContent value="all" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((city, index) => (
            <CityCard key={index} {...city} />
          ))}
        </div>
      </TabsContent>
      
      {["central", "northwest", "south", "volga", "ural", "siberia", "fareast"].map((region) => (
        <TabsContent key={region} value={region} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((city, index) => (
              <CityCard key={index} {...city} />
            ))}
          </div>
        </TabsContent>
      ))}
    </>
  );
};

export default DestinationsList;
