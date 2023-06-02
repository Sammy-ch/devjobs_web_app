"use client";
import React from "react";
import Image from "next/image";
import devLogo from "public/assets/desktop/logo.svg"
import AntSwitch from "@/components/AntSwitch";
import MoonIcon from "public/assets/desktop/icon-moon.svg"
import SunIcon from "public/assets/desktop/icon-sun.svg"


const Nav = () => {
  return (
      <nav className={"px-[165px] sm:px-[24px] pt-[45px] w-full header h-[162px] rounded-bl-[100px]"}>
            <div className={"flex flex-row text-3xl justify-between w-full"}>
                    <Image src={devLogo} alt={"dev_logo"} className={"h-[32px] w-[115px]"}/>
                  <div className="flex justify-center">
                      <Image src={SunIcon} alt={"SunIco"} className={"h-[17px] w-[20px] mr-1"}/>
                      <AntSwitch />
                      <Image src={MoonIcon} alt={"MoonIco"} className={"h-[12px] w-[12px] ml-2 relative top-[0.15rem]"}/>        
        </div>
            </div>
    
      </nav>
  )
}

export default Nav;