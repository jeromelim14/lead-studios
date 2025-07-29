"use client";

import { Cpu, Lightbulb, Users, Mail } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavBarDemo() {
  const navItems = [
    { name: 'Platform', url: '/', icon: Cpu },
    { name: 'Solutions', url: '/solutions', icon: Lightbulb },
    { name: 'About', url: '/about', icon: Users },
    { name: 'Waitlist', url: '/waitlist', icon: Mail }
  ];

  return <NavBar items={navItems} />;
}