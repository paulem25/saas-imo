import React from 'react';
import Link from 'next/link';
import { ModeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { UserNav } from '@/components/layout/user-nav';
import { Logo } from '@/components/layout/logo';
import { Building, Home, FileText, CreditCard, Settings } from 'lucide-react';

type NavigationItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const mainNavigation: NavigationItem[] = [
  { name: 'Tableau de bord', href: '/dashboard', icon: <Home className="mr-2 h-4 w-4" /> },
  { name: 'Propriétés', href: '/properties', icon: <Building className="mr-2 h-4 w-4" /> },
  { name: 'Documents', href: '/documents', icon: <FileText className="mr-2 h-4 w-4" /> },
  { name: 'Paiements', href: '/payments', icon: <CreditCard className="mr-2 h-4 w-4" /> },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Logo />
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {mainNavigation.map((item) => (
              <Button key={item.name} variant="ghost" asChild>
                <Link 
                  href={item.href}
                  className="flex items-center text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.icon}
                  {item.name}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" size="icon" asChild>
            <Link href="/settings">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Paramètres</span>
            </Link>
          </Button>
          <UserNav />
        </div>
      </div>
    </header>
  );
} 