import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Filter, Plus, ArrowUp, ArrowDown, Clock, ChevronDown, Calendar, Building, CreditCard, Users, AlertCircle } from "lucide-react";
import Link from "next/link";

type Payment = {
  id: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  property: string;
  tenant?: string;
  date: string;
  status: "completed" | "pending" | "failed";
};

const payments: Payment[] = [
  {
    id: "pay1",
    amount: 1200,
    type: "income",
    category: "Loyer",
    property: "Appartement T3 Lumineux",
    tenant: "M. et Mme Dupont",
    date: "02/05/2023",
    status: "completed",
  },
  {
    id: "pay2",
    amount: 850,
    type: "income",
    category: "Loyer",
    property: "Studio Centre-Ville",
    tenant: "Mlle Martin",
    date: "03/05/2023",
    status: "completed",
  },
  {
    id: "pay3",
    amount: 350,
    type: "expense",
    category: "Travaux",
    property: "Maison avec Jardin",
    date: "15/04/2023",
    status: "completed",
  },
  {
    id: "pay4",
    amount: 1400,
    type: "income",
    category: "Loyer",
    property: "Loft Design",
    tenant: "M. Lambert",
    date: "10/05/2023",
    status: "pending",
  },
  {
    id: "pay5",
    amount: 1350,
    type: "income",
    category: "Loyer",
    property: "Duplex Moderne",
    tenant: "Mme Rousseau",
    date: "01/05/2023",
    status: "failed",
  },
  {
    id: "pay6",
    amount: 120,
    type: "expense",
    category: "Maintenance",
    property: "T2 Rénové",
    date: "20/04/2023",
    status: "completed",
  },
  {
    id: "pay7",
    amount: 680,
    type: "income",
    category: "Loyer",
    property: "T2 Rénové",
    tenant: "M. Bernard",
    date: "05/05/2023",
    status: "completed",
  },
];

export default function PaymentsPage() {
  // Calculs pour les statistiques
  const totalIncome = payments
    .filter((p) => p.type === "income" && p.status === "completed")
    .reduce((sum, payment) => sum + payment.amount, 0);
  
  const totalExpense = payments
    .filter((p) => p.type === "expense" && p.status === "completed")
    .reduce((sum, payment) => sum + payment.amount, 0);
  
  const pendingAmount = payments
    .filter((p) => p.status === "pending")
    .reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container py-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Paiements</h1>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              Mai 2023
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button size="lg" className="gap-2" asChild>
              <Link href="/payments/new">
                <Plus className="h-4 w-4" />
                Nouveau paiement
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Aperçu financier */}
        <div className="grid gap-6 mb-8 md:grid-cols-3">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-100 dark:border-green-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-700 dark:text-green-400">Revenus du mois</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700 dark:text-green-400">{totalIncome} €</div>
              <div className="flex items-center text-xs text-green-600 dark:text-green-400 mt-1">
                <ArrowUp className="h-3 w-3 mr-1" />
                <span>+12.5% par rapport au mois dernier</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-100 dark:border-red-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-red-700 dark:text-red-400">Dépenses du mois</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-700 dark:text-red-400">{totalExpense} €</div>
              <div className="flex items-center text-xs text-red-600 dark:text-red-400 mt-1">
                <ArrowDown className="h-3 w-3 mr-1" />
                <span>-8.3% par rapport au mois dernier</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-100 dark:border-blue-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-400">En attente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">{pendingAmount} €</div>
              <div className="flex items-center text-xs text-blue-600 dark:text-blue-400 mt-1">
                <Clock className="h-3 w-3 mr-1" />
                <span>{payments.filter(p => p.status === "pending").length} paiements en attente</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Filtres et recherche */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Rechercher un paiement..." 
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtres
          </Button>
        </div>
        
        {/* Tableau des paiements */}
        <div className="bg-white dark:bg-gray-950 rounded-xl border shadow-sm overflow-hidden">
          <div className="grid grid-cols-7 gap-4 p-4 border-b text-sm font-medium text-muted-foreground">
            <div className="col-span-2">Détails</div>
            <div className="col-span-1">Montant</div>
            <div className="col-span-1">Propriété</div>
            <div className="col-span-1">Locataire</div>
            <div className="col-span-1">Date</div>
            <div className="col-span-1">Statut</div>
          </div>
          
          <div className="divide-y">
            {payments.map((payment) => (
              <div key={payment.id} className="grid grid-cols-7 gap-4 p-4 items-center hover:bg-muted/50 transition-colors">
                <div className="col-span-2 flex items-center gap-3">
                  <PaymentIcon type={payment.type} />
                  <div>
                    <p className="font-medium">{payment.category}</p>
                    <p className="text-xs text-muted-foreground">
                      {payment.type === "income" ? "Revenu" : "Dépense"}
                    </p>
                  </div>
                </div>
                <div className={`col-span-1 font-medium ${payment.type === "income" ? "text-green-600" : "text-red-600"}`}>
                  {payment.type === "income" ? "+" : "-"}{payment.amount} €
                </div>
                <div className="col-span-1 text-sm flex items-center gap-1.5">
                  <Building className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="truncate">{payment.property}</span>
                </div>
                <div className="col-span-1 text-sm truncate">
                  {payment.tenant ? (
                    <div className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="truncate">{payment.tenant}</span>
                    </div>
                  ) : "-"}
                </div>
                <div className="col-span-1 text-sm">{payment.date}</div>
                <div className="col-span-1">
                  <PaymentStatusBadge status={payment.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function PaymentIcon({ type }: { type: Payment["type"] }) {
  if (type === "income") {
    return (
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
        <ArrowDown className="h-5 w-5" />
      </div>
    );
  }
  
  return (
    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
      <ArrowUp className="h-5 w-5" />
    </div>
  );
}

function PaymentStatusBadge({ status }: { status: Payment["status"] }) {
  if (status === "completed") {
    return (
      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-800/30 dark:text-green-500">
        Effectué
      </span>
    );
  }
  
  if (status === "pending") {
    return (
      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 dark:bg-yellow-800/30 dark:text-yellow-500">
        <Clock className="mr-1 h-3 w-3" />
        En attente
      </span>
    );
  }
  
  return (
    <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-red-100 text-red-700 dark:bg-red-800/30 dark:text-red-500">
      <AlertCircle className="mr-1 h-3 w-3" />
      Échec
    </span>
  );
} 