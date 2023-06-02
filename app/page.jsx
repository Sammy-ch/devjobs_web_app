"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import JobCard from "@/components/JobCard";

import SearchIcon from "public/assets/desktop/icon-search.svg";
import iconLocation from "public/assets/desktop/icon-location.svg";
import filterIcon from "public/assets/mobile/icon-filter.svg";
import searchIconLight from "public/assets/desktop/icon-search-light.svg";
import { motion } from "framer-motion";

const Home = () => {
const [data, setData] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [searchLocation, setSearchLocation] = useState("");
const [isFullTime, setIsFullTime] = useState(false);
const [searchClicked, setSearchClicked] = useState(false);
const [filterClick, setFilterClick] = useState(false)
const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.npoint.io/07bfa93e6b290eef5805");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);


  const handleSearch = (e) => {
    e.preventDefault();
    setSearchClicked(true);
    setFilterClick(false)

    
  const filteredData = data.filter((job) => {
    const titleMatch = job.position.toLowerCase().includes(searchTerm.toLowerCase());
    const locationMatch = job.location.toLowerCase().includes(searchLocation.toLowerCase());
    const fullTimeMatch = !isFullTime || job.contract === "Full Time";
    return titleMatch && locationMatch && fullTimeMatch;
  });

  setFilteredData(filteredData);
   
  }

  const handleFilterClick = () => {
    setFilterClick(!filterClick);
  }


    return (
      <section className={"px-[40px]"}>

          <form className={"grid sm:hidden grid-cols-3 justify-items-center items-center rounded-[6px] relative top-[-50px] mx-[130px] sm:mx-0 md:mx-0 lg:mx-0 h-[80px] bg-white"}>
                <div className={"flex gap-[16px] pl-[53%] ml-0"}>
                    <Image src={SearchIcon} alt={"searchIcon"}/>
                        <input
                        type={"text"}
                        placeholder={"Filter by title..."}
                        value={searchTerm}
                        onChange={(e) =>{setSearchTerm(e.target.value)}}
                    />
                </div>
                    <div className={"flex gap-[16px] border-l-[1px] pl-[23px]"}>
                            <Image src={iconLocation} alt={"iconLocation"}/>
                        <input
                            type={"text"}
                            placeholder={"Filter by Location..."}
                            value={searchLocation}
                            onChange={(e) =>{setSearchLocation(e.target.value)}}
                            
                        />
                    </div>
                <div className={'flex search-btn items-center border-l-[1px] pl-[23px]'}>
                        <input 
                        type={"checkbox"}
                        checked={isFullTime}
                        onChange={(e) =>{setIsFullTime(e.target.checked)}}
                        className={"mr-[16px]"}/>

                      <b className={"mr-[26px]"}>Full Time </b>
                        <button onClick={handleSearch} className={"px-[35px] md:px-[14px] lg:px-[14px] py-[16px] rounded-[5px] text-white"}><b>Search</b></button>

                </div>

            </form>

              {/* Mobile Navbar  */}
            <form className="hidden sm:flex top-[-50px] h-[80px] relative justify-center items-center bg-white rounded-md">
                <div className={"flex "}>
                    
                            <input
                            type={"text"}
                            placeholder={"Filter by title..."}
                            value={searchTerm}
                            onChange={(e) =>{setSearchTerm(e.target.value)}}
                            className="pl-[24px]"
                        />

                        <div className="flex gap-[25px]">
                              
                              <Image onClick={handleFilterClick}  src={filterIcon} alt={"filterIcon"} className="w-[20px] h-[20px] relative top-3"/>

                          <button className="w-[48px] h-[48px] rounded-md mr-[16px]">
                            <Image src={searchIconLight} alt={"searchIcon"} className="relative left-3"/>
                          </button>
                        </div>
                        
                    </div>

            </form>


          {filterClick ? (
             <motion.div
             initial={{ scale: 0, opacity: 1, x: '-50%', y: '-50%' }}
             animate={{ scale: 1, opacity: 1 }}
             className='w-[80vw] flex flex-col justify-between fixed top-[425px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75
          rounded-lg bg-[#cfd3ff] py-[32px]'
           >
            <div className="flex ml-[25px] pb-[50px] gap-[16px]">
             
                 <Image src={iconLocation} alt={"iconLocation"}/>
                 <input
                            type={"text"}
                            placeholder={"Filter by Location..."}
                            value={searchLocation}
                            onChange={(e) =>{setSearchLocation(e.target.value)}}
                            
                        />
           </div>
                  
                  <div className={'flex text-left pb-[25px]  search-btn '}>
                          <input 
                          type={"checkbox"}
                          checked={isFullTime}
                          onChange={(e) =>{setIsFullTime(e.target.checked)}}
                          className={"mr-[16px] ml-[25px]"}/>
  
                        <b className={"text-white"}>Full Time Only </b>
                        
  
                  </div>
                  
                  <button onClick={handleSearch} className={" py-[16px] mx-[25px] rounded-md text-white"}><b>Search</b></button>
  
           </motion.div>
          ) : null}
           

        
          <Box sx={{ flexGrow:1 }} className={"pb-[56px]"}>
          <Grid container columnGap={5} rowGap={8} justifyContent={"space-around"} >
            
                
        { searchClicked ? (
          filteredData.map((item) => (
                     <Grid  key={item.id}>
                        <JobCard job={item}/>
                    </Grid>        
            ))
        ) :
          data.map((item) => (         
                  <Grid key={item.id}>
                      <JobCard job={item}/>
                  </Grid>

            ))
        }

              </Grid>
        </Box>

            </section>
    )
}
export default Home;

