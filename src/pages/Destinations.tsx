
import { useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/destinations/SearchBar";
import RegionTabs, { RegionType } from "@/components/destinations/RegionTabs";
import DestinationsList from "@/components/destinations/DestinationsList";
import TravelFeatures from "@/components/destinations/TravelFeatures";
import Footer from "@/components/layout/Footer";
import { destinations } from "@/types/destination";

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRegion, setActiveRegion] = useState<RegionType>("all");

  const filteredDestinations = destinations.filter(city => {
    const matchesSearch = city.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          city.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          city.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesRegion = activeRegion === "all" || city.region === activeRegion;
    
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <div className="bg-tourism-blue py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Направления</h1>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Исследуйте разнообразные города и регионы России, 
            от исторических памятников до современных мегаполисов и природных чудес
          </p>
          
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <RegionTabs 
          activeRegion={activeRegion} 
          onRegionChange={setActiveRegion}
        >
          <DestinationsList 
            destinations={filteredDestinations}
            activeRegion={activeRegion}
          />
        </RegionTabs>
      </div>
      
      <TravelFeatures />
      <Footer />
    </div>
  );
};

export default Destinations;
