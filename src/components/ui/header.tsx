"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

function Header1() {
    const navigationItems = [
        {
            title: "Home",
            href: "/",
            description: "",
        },
        {
            title: "Features",
            description: "Discover our AI-powered tutoring capabilities",
            items: [
                {
                    title: "Real-Time Assistance",
                    href: "/features/real-time",
                },
                {
                    title: "Progress Tracking",
                    href: "/features/progress",
                },
                {
                    title: "Content Library",
                    href: "/features/content",
                },
                {
                    title: "Analytics Dashboard",
                    href: "/features/analytics",
                },
            ],
        },
        {
            title: "Resources",
            description: "Learn more about effective tutoring with AI",
            items: [
                {
                    title: "Getting Started",
                    href: "/resources/getting-started",
                },
                {
                    title: "Best Practices",
                    href: "/resources/best-practices",
                },
                {
                    title: "Case Studies",
                    href: "/resources/case-studies",
                },
                {
                    title: "Support Center",
                    href: "/support",
                },
            ],
        },
        {
            title: "Pricing",
            href: "/pricing",
            description: "",
        },
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-black/80 backdrop-blur-md border-b border-gray-800">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <>
                                            <NavigationMenuLink>
                                                <Button variant="ghost" className="text-white hover:text-yellow-300 hover:bg-gray-800" style={{ fontFamily: "'Castoro', serif" }}>
                                                    {item.title}
                                                </Button>
                                            </NavigationMenuLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-medium text-sm text-white hover:text-yellow-300 hover:bg-gray-800" style={{ fontFamily: "'Castoro', serif" }}>
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4 bg-gray-900 border-gray-700">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base text-white" style={{ fontFamily: "'Castoro', serif" }}>{item.title}</p>
                                                            <p className="text-gray-400 text-sm" style={{ fontFamily: "'Castoro', serif" }}>
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Button size="sm" className="mt-10 bg-yellow-300 text-black hover:bg-yellow-400" style={{ fontFamily: "'Castoro', serif" }}>
                                                            Start Free Trial
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                href={subItem.href}
                                                                key={subItem.title}
                                                                className="flex flex-row justify-between items-center hover:bg-gray-800 py-2 px-4 rounded text-gray-300 hover:text-white"
                                                                style={{ fontFamily: "'Castoro', serif" }}
                                                            >
                                                                <span>{subItem.title}</span>
                                                                <MoveRight className="w-4 h-4 text-gray-500" />
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center">
                    <p className="font-semibold text-white text-xl" style={{ fontFamily: "'Castoro', serif" }}>Eduly.ai</p>
                </div>
                <div className="flex justify-end w-full gap-4">
                    <Button variant="ghost" className="hidden md:inline text-white hover:text-yellow-300 hover:bg-gray-800" style={{ fontFamily: "'Castoro', serif" }}>
                        Request Demo
                    </Button>
                    <div className="border-r border-gray-700 hidden md:inline"></div>
                    <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800" style={{ fontFamily: "'Castoro', serif" }}>
                        Sign in
                    </Button>
                    <Button className="bg-yellow-300 text-black hover:bg-yellow-400" style={{ fontFamily: "'Castoro', serif" }}>
                        Get started
                    </Button>
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)} className="text-white hover:bg-gray-800">
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t border-gray-800 flex flex-col w-full right-0 bg-gray-900 shadow-lg py-4 container gap-8">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="flex justify-between items-center text-white"
                                                style={{ fontFamily: "'Castoro', serif" }}
                                            >
                                                <span className="text-lg">{item.title}</span>
                                                <MoveRight className="w-4 h-4 stroke-1 text-gray-400" />
                                            </Link>
                                        ) : (
                                            <p className="text-lg text-white" style={{ fontFamily: "'Castoro', serif" }}>{item.title}</p>
                                        )}
                                        {item.items &&
                                            item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className="flex justify-between items-center text-gray-300"
                                                    style={{ fontFamily: "'Castoro', serif" }}
                                                >
                                                    <span>
                                                        {subItem.title}
                                                    </span>
                                                    <MoveRight className="w-4 h-4 stroke-1" />
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header1 };