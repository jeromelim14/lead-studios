"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden -mt-32">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4" style={{ fontFamily: "'Castoro', serif" }}>
              Real-Time Expertise at Your
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl font-light mt-1 leading-tight">
                Fingertips While You Teach
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Students and teacher in a classroom setting"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}