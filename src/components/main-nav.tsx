"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  
  const routes = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/gallary", label: "Gallery" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav className="flex items-center justify-between w-full py-4 px-6 md:px-12">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-xl font-bold">
          Portfolio
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link 
              key={route.href} 
              href={route.href}
              className="text-sm font-medium relative px-2 py-1 transition-colors hover:text-primary focus:text-primary group"
              style={{ overflow: 'hidden' }}
            >
              <span className="z-10 relative">{route.label}</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-accent-400 to-primary-500 scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <button aria-label="Open menu" className="p-2">
              <Menu className="h-5 w-5" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Navigation</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {routes.map((route) => (
              <DropdownMenuItem key={route.href} asChild>
                <Link href={route.href}><span className="z-10 relative">{route.label}</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-accent-400 to-primary-500 scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span></Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}