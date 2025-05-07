import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Building, Home, CreditCard, FileText, TrendingUp, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container py-10">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Tableau de bord</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Revenus du mois</CardTitle>
              <CardDescription>
                <div className="text-2xl font-bold">5 230 €</div>
                <p className="text-xs text-green-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12.5% vs mois précédent
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="h-1 w-full bg-gray-200 rounded-full mt-2">
                <div className="h-1 bg-blue-500 rounded-full w-4/5"></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <div>0 €</div>
                <div>Objectif: 6 000 €</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-sm font-medium">Propriétés</CardTitle>
                <CardDescription className="text-2xl font-bold">8</CardDescription>
              </div>
              <Building className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="pb-4">
              <div className="text-xs text-muted-foreground">
                2 vacantes, 6 occupées
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-sm font-medium">Locataires</CardTitle>
                <CardDescription className="text-2xl font-bold">14</CardDescription>
              </div>
              <Users className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="pb-4">
              <div className="text-xs text-muted-foreground">
                3 nouveaux ce mois-ci
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-sm font-medium">Contrats</CardTitle>
                <CardDescription className="text-2xl font-bold">6</CardDescription>
              </div>
              <FileText className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="pb-4">
              <div className="text-xs text-muted-foreground">
                1 en attente de signature
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-sm font-medium">Paiements en attente</CardTitle>
                <CardDescription className="text-2xl font-bold">2 430 €</CardDescription>
              </div>
              <CreditCard className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="pb-4">
              <div className="text-xs text-muted-foreground">
                3 paiements en retard
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-sm font-medium">Taux d'occupation</CardTitle>
                <CardDescription className="text-2xl font-bold">78%</CardDescription>
              </div>
              <Home className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="pb-4">
              <div className="text-xs text-muted-foreground">
                +5% depuis le trimestre dernier
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Activité récente</h2>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {activityItems.map((item, index) => (
                  <div key={index} className="flex items-center py-4 px-6">
                    <div className={`rounded-full p-2 mr-4 ${item.iconBg}`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

const activityItems = [
  {
    title: "Nouveau contrat signé",
    description: "Appartement 3B - 56 Rue de Paris",
    date: "Aujourd'hui, 14:32",
    icon: <FileText className="h-4 w-4 text-white" />,
    iconBg: "bg-blue-500",
  },
  {
    title: "Paiement reçu",
    description: "1 250 € - Studio 12 - M. Dupont",
    date: "Hier, 09:15",
    icon: <CreditCard className="h-4 w-4 text-white" />,
    iconBg: "bg-green-500",
  },
  {
    title: "Nouvelle propriété ajoutée",
    description: "Maison T4 - 14 Avenue des Fleurs",
    date: "20 mai 2023",
    icon: <Building className="h-4 w-4 text-white" />,
    iconBg: "bg-purple-500",
  },
  {
    title: "Requête de maintenance",
    description: "Problème de plomberie - Appartement 2A",
    date: "19 mai 2023",
    icon: <Home className="h-4 w-4 text-white" />,
    iconBg: "bg-yellow-500",
  },
]; 