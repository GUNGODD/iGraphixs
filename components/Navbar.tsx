/* eslint-disable react/jsx-no-undef */
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";


  
export function NavbarDemo() {
  return (
    <div className="relative flex items-center justify-center w-full">
   
     
   
     
      <Navbar className="ml-4 top-2" />
      
     
    </div>
  );
}

function Navbar({ className }: { className?: string } ) {
  const [active, setActive] = useState<string | null>(null);
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }
  return (
    <>


      <Menu setActive={setActive}>






<MenuItem setActive={setActive} active={active} item="Services">


  <div className="flex flex-col space-y-4 text-sm">

  
    <HoveredLink href="/web-dev">Web Development</HoveredLink>
    <HoveredLink href="/interface-design">Interface Design</HoveredLink>
    <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
    <HoveredLink href="/branding">Branding</HoveredLink>
  </div>
</MenuItem>
<MenuItem setActive={setActive} active={active} item="Products">
  <div className="grid grid-cols-2 gap-10 p-4 text-sm ">
    <ProductItem
      title="Algochurn"
      href="https://algochurn.com"
      src="https://assets.aceternity.com/demos/algochurn.webp"
      description="Prepare for tech interviews like never before." />
    <ProductItem
      title="Tailwind Master Kit"
      href="https://tailwindmasterkit.com"
      src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
      description="Production ready Tailwind css components for your next project" />
    <ProductItem
      title="Moonbeam"
      href="https://gomoonbeam.com"
      src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
      description="Never write from scratch again. Go from idea to blog in minutes." />
    <ProductItem
      title="Rogue"
      href="https://userogue.com"
      src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
      description="Respond to government RFPs, RFIs and RFQs 10x faster using AI" />
  </div>
</MenuItem>
<MenuItem setActive={setActive} active={active} item="Pricing">
  <div className="flex flex-col space-y-4 text-sm">
    <HoveredLink href="/hobby">Hobby</HoveredLink>
    <HoveredLink href="/individual">Individual</HoveredLink>
    <HoveredLink href="/team">Team</HoveredLink>
    <HoveredLink href="/enterprise">Enterprise</HoveredLink>
  </div>
</MenuItem>
</Menu>


        
   
       
      </>
  );
}
