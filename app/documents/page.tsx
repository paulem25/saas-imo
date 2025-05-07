import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, FileText, File, Calendar, Check, X, Download, Eye } from "lucide-react";
import Link from "next/link";

type Document = {
  id: string;
  title: string;
  type: "lease" | "invoice" | "receipt" | "insurance" | "other";
  property: string;
  date: string;
  status: "signed" | "pending" | "expired";
  fileSize: string;
};

const documents: Document[] = [
  {
    id: "doc1",
    title: "Contrat de bail - Appartement T3 Lumineux",
    type: "lease",
    property: "Appartement T3 Lumineux",
    date: "15/01/2023",
    status: "signed",
    fileSize: "2.4 MB",
  },
  {
    id: "doc2",
    title: "Assurance habitation - Studio Centre-Ville",
    type: "insurance",
    property: "Studio Centre-Ville",
    date: "03/02/2023",
    status: "signed",
    fileSize: "1.8 MB",
  },
  {
    id: "doc3",
    title: "Quittance Avril 2023 - Loft Design",
    type: "receipt",
    property: "Loft Design",
    date: "01/04/2023",
    status: "signed",
    fileSize: "540 KB",
  },
  {
    id: "doc4",
    title: "Contrat de bail - Duplex Moderne",
    type: "lease",
    property: "Duplex Moderne",
    date: "22/04/2023",
    status: "pending",
    fileSize: "2.2 MB",
  },
  {
    id: "doc5",
    title: "Facture réparation - Maison avec Jardin",
    type: "invoice",
    property: "Maison avec Jardin",
    date: "10/05/2023",
    status: "signed",
    fileSize: "820 KB",
  },
  {
    id: "doc6",
    title: "État des lieux - T2 Rénové",
    type: "other",
    property: "T2 Rénové",
    date: "05/03/2023",
    status: "signed",
    fileSize: "3.1 MB",
  },
];

export default function DocumentsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container py-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Documents</h1>
          <Button size="lg" className="gap-2" asChild>
            <Link href="/documents/upload">
              <Plus className="h-4 w-4" />
              Ajouter un document
            </Link>
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Rechercher un document..." 
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtres
          </Button>
        </div>
        
        <div className="bg-white dark:bg-gray-950 rounded-xl border shadow-sm overflow-hidden">
          <div className="grid grid-cols-8 gap-4 p-4 border-b text-sm font-medium text-muted-foreground">
            <div className="col-span-3">Document</div>
            <div className="col-span-2">Propriété</div>
            <div className="col-span-1">Date</div>
            <div className="col-span-1">Statut</div>
            <div className="col-span-1 text-right">Actions</div>
          </div>
          
          <div className="divide-y">
            {documents.map((document) => (
              <div key={document.id} className="grid grid-cols-8 gap-4 p-4 items-center hover:bg-muted/50 transition-colors">
                <div className="col-span-3 flex items-center gap-3">
                  <DocumentIcon type={document.type} />
                  <div>
                    <p className="font-medium">{document.title}</p>
                    <p className="text-xs text-muted-foreground">{document.fileSize}</p>
                  </div>
                </div>
                <div className="col-span-2 text-sm">{document.property}</div>
                <div className="col-span-1 text-sm">{document.date}</div>
                <div className="col-span-1">
                  <StatusBadge status={document.status} />
                </div>
                <div className="col-span-1 flex justify-end gap-2">
                  <Button variant="ghost" size="icon" title="Visualiser">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="Télécharger">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function DocumentIcon({ type }: { type: Document["type"] }) {
  const iconColor = {
    lease: "text-blue-500",
    invoice: "text-yellow-500",
    receipt: "text-green-500",
    insurance: "text-purple-500",
    other: "text-gray-500",
  }[type];

  return <FileText className={`h-10 w-10 ${iconColor}`} />;
}

function StatusBadge({ status }: { status: Document["status"] }) {
  if (status === "signed") {
    return (
      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-800/30 dark:text-green-500">
        <Check className="mr-1 h-3 w-3" />
        Signé
      </span>
    );
  }
  
  if (status === "pending") {
    return (
      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 dark:bg-yellow-800/30 dark:text-yellow-500">
        <Calendar className="mr-1 h-3 w-3" />
        En attente
      </span>
    );
  }
  
  return (
    <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-red-100 text-red-700 dark:bg-red-800/30 dark:text-red-500">
      <X className="mr-1 h-3 w-3" />
      Expiré
    </span>
  );
} 