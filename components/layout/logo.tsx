import Link from "next/link";
import { Building } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Building className="h-6 w-6 text-primary" />
      <span className="inline-block font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        ImmoPro
      </span>
    </Link>
  );
} 