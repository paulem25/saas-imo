import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, SlidersHorizontal, MapPin, Home, Building, Users, Square, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

type Property = {
  id: string;
  title: string;
  address: string;
  type: string;
  surface: number;
  rooms: number;
  rent: number;
  isOccupied: boolean;
  imageUrl: string;
};

const properties: Property[] = [
  {
    id: "prop1",
    title: "Appartement T3 Lumineux",
    address: "15 Rue Victor Hugo, Paris 75016",
    type: "Appartement",
    surface: 65,
    rooms: 3,
    rent: 1200,
    isOccupied: true,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: "prop2",
    title: "Studio Centre-Ville",
    address: "8 Avenue des Champs-Élysées, Paris 75008",
    type: "Studio",
    surface: 30,
    rooms: 1,
    rent: 850,
    isOccupied: true,
    imageUrl: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: "prop3",
    title: "Maison avec Jardin",
    address: "45 Rue des Lilas, Lyon 69003",
    type: "Maison",
    surface: 120,
    rooms: 5,
    rent: 1600,
    isOccupied: false,
    imageUrl: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: "prop4",
    title: "Loft Design",
    address: "12 Quai de la Tournelle, Paris 75005",
    type: "Loft",
    surface: 85,
    rooms: 2,
    rent: 1400,
    isOccupied: true,
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: "prop5",
    title: "Duplex Moderne",
    address: "7 Place Bellecour, Lyon 69002",
    type: "Duplex",
    surface: 95,
    rooms: 4,
    rent: 1350,
    isOccupied: false,
    imageUrl: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: "prop6",
    title: "T2 Rénové",
    address: "3 Rue de la République, Marseille 13001",
    type: "Appartement",
    surface: 45,
    rooms: 2,
    rent: 680,
    isOccupied: true,
    imageUrl: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
];

export default function PropertiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container py-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Mes Propriétés</h1>
          <Button size="lg" className="gap-2" asChild>
            <Link href="/properties/add">
              <Plus className="h-4 w-4" />
              Ajouter une propriété
            </Link>
          </Button>
        </div>
        
        <div className="flex gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Rechercher une propriété..." 
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Filtres
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <Link key={property.id} href={`/properties/${property.id}`}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-200">
                <div className="relative h-48 w-full">
                  <img 
                    src={property.imageUrl} 
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      property.isOccupied 
                        ? "bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-500" 
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500"
                    }`}>
                      {property.isOccupied ? "Occupé" : "Vacant"}
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h2 className="text-xl font-semibold mb-2 line-clamp-1">{property.title}</h2>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                    <span className="truncate">{property.address}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Home className="h-4 w-4 text-muted-foreground" />
                      <span>{property.type}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Square className="h-4 w-4 text-muted-foreground" />
                      <span>{property.surface} m²</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{property.rooms} pièce{property.rooms > 1 ? "s" : ""}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium text-primary">
                      <span>{property.rent} €/mois</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
} 