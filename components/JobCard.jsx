import React from "react";
import Image from "next/image";
import { red } from "@mui/material/colors";

const JobCard = ({ id, company, logo, logoBackground, position, posted, contract, location }) => {
    const style = {
        backgroundColor:red
    }

    return (
        <section className={"h-[228px] w-[350px] desc_card"}>
            <div className={"flex flex-col pl-[32px]"}>
                <div className="relative top-[-20px] w-full">
                    <Image src={logo} alt={`${company}Logo`} width={1} height={1} className=" w-[36px] h-[36px] px-[5px] py-[8px] rounded-[10px]"/>
                </div>

                <div className="pb-[30px] flex flex-col gap-[5px]">
                    <div>
                        <span>{posted}</span>
                        <>{" . "}</>
                        <span>{contract}</span>
                    </div>
                    <b className="text-[20px]">{position}</b>
                    <span >{company}</span>
                </div>

                <strong className="location">{location}</strong>

            </div>
        </section>
    )
}


export default JobCard;