// src/components/layout/Header.tsx

import Link from 'next/link';
import React from 'react';
import { Menu, Star, Code, MessageSquare, Briefcase } from 'lucide-react';

export function Header() {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    // 'fixed top-0 z-50 w-full' makes the menubar floating and sticky at the top.
    // backdrop-blur provides a nice transparent effect over content when scrolling.
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200">
      <nav className="container mx-auto max-w-7xl p-4 flex justify-between items-center h-16">
        
        {/* Logo/Name */}
        <Link href="#home" className="text-2xl font-extrabold text-indigo-700 hover:text-indigo-900 transition duration-300">
          G. Pandian
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="flex md:flex space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="group flex items-center text-sm font-medium text-gray-600 hover:text-indigo-600 transition duration-150 relative"
            >
              {/* <item.icon className="w-4 h-4 mr-1 transition-transform group-hover:scale-110" /> */}
              {item.name}
              {/* Underline hover effect */}
              <span className="absolute bottom-[-5px] left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button (Placeholder - you'll need state for this later) */}
        <button className="md:hidden p-2 text-gray-600 hover:text-indigo-600 rounded-lg transition duration-150">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
    </header>
  );
}