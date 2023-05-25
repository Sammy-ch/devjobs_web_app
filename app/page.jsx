"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import JobCard from "@/components/JobCard";

import SearchIcon from "public/assets/desktop/icon-search.svg";
import iconLocation from "public/assets/desktop/icon-location.svg";




const Home = () => {
const [data, setData] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [searchLocation, setSearchLocation] = useState("");
const [isFullTime, setIsFullTime] = useState(false);
const [searchClicked, setSearchClicked] = useState(false);
const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    };

    fetchData();
  }, []);


  const handleSearch = (e) => {
    e.preventDefault();
    setSearchClicked(true);

    
  const filteredData = data.filter((job) => {
    const titleMatch = job.position.toLowerCase().includes(searchTerm.toLowerCase());
    const locationMatch = job.location.toLowerCase().includes(searchLocation.toLowerCase());
    const fullTimeMatch = !isFullTime || job.contract === "Full Time";
    return titleMatch && locationMatch && fullTimeMatch;
  });

  setFilteredData(filteredData);
   
  }

    return (
      <section className={"px-[40px]"}>

          <form className={"grid grid-cols-3 justify-items-center items-center rounded-[6px] relative top-[-50px] mx-[130px] h-[80px] bg-white"}>
                <div className={"flex gap-[16px] ml-0"}>
                    <Image src={SearchIcon} alt={"searchIcon"}/>
                        <input
                        type={"text"}
                        placeholder={"Filter by title, companies, expertise…"}
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

                      <b className={"mr-[26px]"}>Full Time Only</b>
                        <button onClick={handleSearch} className={"px-[35px] py-[16px] rounded-[5px] text-white"}><b>Search</b></button>

                </div>

            </form>

        
          <Box sx={{ flexGrow:1 }} className={"pb-[56px]"}>
          <Grid container columnGap={5} rowGap={8} justifyContent={"space-around"} >

           { searchClicked ? (
            filteredData.map((item) => (
                  <Grid>
                     <JobCard key={item.id} posted={item.postedAt} company={item.company} location={item.location} position={item.position} contract={item.contract} logo={item.logo} />
                  </Grid>
              ))
           ) :
            data.map((item) => (
                  <Grid>
                      <JobCard key={item.id} posted={item.postedAt} company={item.company} location={item.location} position={item.position} contract={item.contract} logo={item.logo} />
                  </Grid>
              ))
           }
           
              </Grid>
        </Box>
    
            <button className={"px-[35px] py-[16px] relative left-[43%] top-0 rounded-[5px] mb-[100px] text-white"}><b>Load More</b></button>
            </section>
    )
}
export default Home;
