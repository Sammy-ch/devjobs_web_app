import React from "react";
import Image from "next/image";
import Link from "next/link";

const JobCard = ({job}) => {

    return (
        <section className={"h-[228px] w-[350px] desc_card"}>
            <div className={"flex flex-col pl-[32px]"}>
                <div className="relative top-[-20px] logo-container w-[36px] h-[36px] rounded-[10px] flex " >
                    <Image src={job.logo} alt={`${job.company}Logo`} width={36} height={36} className="px-[5px] rounded-[10px] object-contain" style={{backgroundColor: `${job.logoBackground}`}}/>
                </div>

                <div className="pb-[30px] flex flex-col gap-[5px]">
                    <div>
                        <span>{job.postedAt}</span>
                        <>{" . "}</>
                        <span>{job.contract}</span>
                    </div>
                    <Link href={`/${job.id}`}><b className="text-[20px]">{job.position}</b></Link>
                    <span >{job.company}</span>
                </div>

                <strong className="location">{job.location}</strong>

            </div>
        </section>
    )
}


export default JobCard;