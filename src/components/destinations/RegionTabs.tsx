
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";

export type RegionType = "all" | "central" | "northwest" | "south" | "volga" | "ural" | "siberia" | "fareast";

interface RegionTabsProps {
  activeRegion: RegionType;
  onRegionChange: (value: RegionType) => void;
  children: ReactNode;
}

const RegionTabs = ({ activeRegion, onRegionChange, children }: RegionTabsProps) => {
  const regions = [
    { value: "all", label: "Все регионы" },
    { value: "central", label: "Центральный" },
    { value: "northwest", label: "Северо-Западный" },
    { value: "south", label: "Южный" },
    { value: "volga", label: "Поволжье" },
    { value: "ural", label: "Урал" },
    { value: "siberia", label: "Сибирь" },
    { value: "fareast", label: "Дальний Восток" }
  ];

  return (
    <Tabs 
      defaultValue="all" 
      value={activeRegion}
      className="w-full mb-12" 
      onValueChange={(value) => onRegionChange(value as RegionType)}
    >
      <div className="flex justify-center mb-8">
        <TabsList className="bg-gray-100">
          {regions.map(region => (
            <TabsTrigger key={region.value} value={region.value}>
              {region.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      
      {children}
    </Tabs>
  );
};

export default RegionTabs;
