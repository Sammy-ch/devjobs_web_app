import "@/styles/globals.scss"
import { useRouter } from 'next/router';
import Image from "next/image";
import Nav from "@/components/Nav";
import Link from "next/link";

export async function getStaticPaths() {
  // Fetch data for all job cards
  const data = await fetch('https://api.npoint.io/07bfa93e6b290eef5805').then((res) => res.json());

  // Return an array of objects with the params key
  return {
    paths: data.map((job) => ({
      params: { id: job.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch data for the specific job card using the id parameter
  const job = await fetch(`https://api.npoint.io/07bfa93e6b290eef5805/${params.id}`).then((res) => res.json());

  return {
    props: {
      job,
    },
  };
}

export default function JobPage({ job }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <section className=''>
        <Nav/>
          <main className=' pb-[80px] xl:px-[40px] px-[355px]'>
              
              <div className='company_header relative top-[-50px] bg-white'>

                    <div className="sm:w-[50px] sm:h-[50px] sm:relative sm:bottom-5 sm:rounded-[10px] " style={{ display: "flex", justifyContent: "center", alignItems: "center" , backgroundColor:`${job.logoBackground}` }}>
                        <Image src={job.logo} width={400} height={400} className='sm: sm:relative w-full sm:w-[50px] px-[5px]'/>
                    </div>
                    
                    <div className='flex text-center sm:flex-col sm:justify-center sm:items-center pt-[42px] sm:pt-[15px] pb-[45px] justify-between px-[40px]'>
                        <div className="sm:pb-[24px]">
                            <h4>{job.company}</h4>
                            <span href={"/"}>{job.website}</span>
                        </div>
                        <button className={"rounded-[5px] h-[48px] w-[147px] company-btn"}><b>Company Site</b></button>
                    </div>
              
              </div>
              
              <section className='job_description px-[45px] mt-[32px] py-[48px] bg-white'>
                  <div className="flex justify-between sm:flex-col sm:gap-[54px]">
                    <div className="flex-col gap-[12px]">
                      <div>
                          <span>{job.postedAt}</span>
                          <span>. {job.contract}</span>
                      </div>
                      <div className='flex justify-between jb-position'>
                          <h1>{job.position}</h1>
                      
                      </div>
                      <div className='location'>
                          {job.location}
                      </div>
                    </div>
                    <Link href={job.apply}><button className={"rounded-[5px] h-[48px] sm:w-full w-[147px] text-white"}><b>Apply Now</b></button></Link>
                  </div>

             
                  <p className='pt-[40px] pb-[40px]'>
                      {job.description}
                  </p>
          
                  <header>Requirements</header>
                  <p className='pt-[28px]'>
                      {job['requirements']['content']}
                  </p>
                  <ul>
                      {
                        job['requirements']['items'].map((item, index) => (
                            <li key={index}>{item}</li>
                        ))

                      }
                  </ul>

          
                  <header className='pt-[48px]'>What You Will Do</header>
                  <p className='pt-[28px]'>
                    {job['role']['content']}
                  </p>
                  <ol>
                        {
                            job['role']['items'].map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                  </ol>
          
              </section>
          </main>
          
          <footer className='flex justify-between sm:justify-center bg-white pt-[23px] pb-[23px] px-[355px] xl:px-[40px]'>
              <div className='sm:hidden '>
                  <h3>{job.position}</h3>
                  <span>{job.company}</span>
              </div>
              <Link href={job.apply} className=""><button className={"rounded-[5px] h-[48px] w-[147px] text-white"}><b>Apply Now</b></button></Link>
            </footer>

      </section>
  );
}