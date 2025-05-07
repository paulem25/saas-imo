import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'
import { Building, ShieldCheck, LineChart, Zap, Users, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800" />
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/20 [mask-image:linear-gradient(to_bottom,transparent,black)]" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="block">Gérez votre patrimoine immobilier</span>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              avec simplicité et efficacité
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400 mb-10">
            La solution complète pour les propriétaires et gestionnaires immobiliers. 
            Optimisez vos revenus, simplifiez vos démarches et gagnez du temps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="premium" size="xl" rounded="full">
              <Link href="/dashboard">
                Essayer gratuitement
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl" rounded="full">
              <Link href="#features">
                En savoir plus
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section id="features" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Toutes les fonctionnalités dont vous avez besoin
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Building className="h-8 w-8 text-blue-500" />}
              title="Gestion complète des biens"
              description="Centralisez toutes les informations de vos propriétés dans une interface intuitive et accessible."
            />
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-blue-500" />}
              title="Suivi des locataires"
              description="Gérez les profils de vos locataires, leurs contrats et l'historique des communications."
            />
            <FeatureCard 
              icon={<LineChart className="h-8 w-8 text-blue-500" />}
              title="Suivi financier"
              description="Visualisez vos revenus locatifs, suivez les paiements et générez des rapports détaillés."
            />
            <FeatureCard 
              icon={<ShieldCheck className="h-8 w-8 text-blue-500" />}
              title="Documents sécurisés"
              description="Stockez et gérez tous vos documents légaux avec signature électronique certifiée."
            />
            <FeatureCard 
              icon={<Zap className="h-8 w-8 text-blue-500" />}
              title="Automatisation intelligente"
              description="Automatisez les rappels, les quittances et les processus répétitifs pour gagner du temps."
            />
            <FeatureCard 
              icon={<ArrowRight className="h-8 w-8 text-blue-500" />}
              title="Et bien plus encore"
              description="Découvrez toutes les fonctionnalités avancées conçues pour les professionnels de l'immobilier."
            />
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à révolutionner votre gestion immobilière ?
          </h2>
          <p className="max-w-xl mx-auto mb-10 opacity-90">
            Rejoignez des milliers de propriétaires qui optimisent déjà leur gestion locative grâce à notre plateforme.
          </p>
          <Button asChild variant="tesla" size="xl" rounded="full" className="border-white text-white hover:bg-white hover:text-blue-600">
            <Link href="/dashboard">
              Commencer maintenant
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center space-x-2">
                <Building className="h-6 w-6 text-blue-600" />
                <span className="font-bold text-xl">ImmoPro</span>
              </Link>
              <p className="text-sm text-gray-500 mt-2">
                © 2023 ImmoPro. Tous droits réservés.
              </p>
            </div>
            <div className="flex gap-8">
              <FooterLink href="/about">À propos</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/privacy">Confidentialité</FooterLink>
              <FooterLink href="/terms">Conditions</FooterLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-md transition-all duration-200">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
      {children}
    </Link>
  )
} 