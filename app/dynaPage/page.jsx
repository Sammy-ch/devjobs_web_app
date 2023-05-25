import Link from 'next/link'
import React from 'react'
import scootLogo from 'public/assets/logos/scoot.svg'
import Image from 'next/image'

const DynamicPage = () => {
  return (
      <section className=''>
          <main className=' pb-[80px] px-[355px]'>
              <div className='company_header relative top-[-50px] bg-white'>
                  <Image src={scootLogo} className='bg-black h-[140px] w-full px-[30px] py-[58px]'/>
                  <div className='flex pt-[42px] pb-[45px] justify-between px-[40px]'>
                      <div>
                          <h4>Scoot</h4>
                          <span href={"/"}>scoot.com</span>
                      </div>
                      <button className={"rounded-[5px] h-[48px] w-[147px] company-btn"}><b>Company Site</b></button>
                  </div>
              </div>
              <section className='job_description px-[45px] mt-[32px] py-[48px] bg-white'>
                  <div>
                      <span>1w ago </span>
                      <span>. Part Time</span>
                  </div>
          
                  <div className='flex justify-between jb-position'>
                      <h1>Senior Software Engineer</h1>
                      <button className={"rounded-[5px] h-[48px] w-[147px] text-white"}><b>Apply Now</b></button>
                  </div>
                  <div className='location'>
                      United Kingdom
                  </div>
                  <p className='pt-[40px] pb-[40px]'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, distinctio! Nisi laborum molestiae recusandae natus rem reiciendis provident doloremque, deserunt rerum magni odit tempore, veniam tenetur excepturi fuga, ratione illum non libero atque dolores sed aliquam totam vel porro. Ab eius in qui nesciunt debitis suscipit, tempora aliquid. Cumque molestiae veniam nobis possimus? Veniam, repellendus! Numquam eveniet ex officia sunt inventore provident error architecto aliquid asperiores! Eum libero aut sequi error voluptates provident, blanditiis rerum nesciunt! Ad optio, eligendi sed illo vero sit aliquid animi aperiam aspernatur, assumenda consectetur reprehenderit deleniti unde perferendis! Quia aliquid magnam totam, sed distinctio quaerat.
                  </p>
          
                  <header>Requirements</header>
                  <p className='pt-[28px]'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatibus et quasi, minima ratione rem quo velit dolorum, similique illo vel quis praesentium atque impedit facere! Quis nihil iure rerum delectus dolore! Adipisci ipsam incidunt aliquam numquam tempora ducimus a consequuntur itaque aperiam fugit velit pariatur, soluta praesentium, porro quas.
                  </p>
                  <ul>
                      <li>hey</li>
                      <li>hey</li>
                  </ul>
          
          
                  <header className='pt-[48px]'>What You Will Do</header>
                  <p className='pt-[28px]'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro vero fuga quod repellendus unde saepe non blanditiis veniam, sunt aut voluptas deleniti dignissimos tenetur, adipisci, dolorum ullam! A, quas? Id.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro vero fuga quod repellendus unde saepe non blanditiis veniam, sunt aut voluptas deleniti dignissimos tenetur, adipisci, dolorum ullam! A, quas? Id.
                  </p>
                  <ol>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                      <li>Lorem, ipsum dolor.</li>
                      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ipsam.</li>
                  </ol>
          
              </section>
          </main>
          
          <footer className='flex justify-between  bg-white pt-[23px] pb-[23px] px-[355px]'>
              <div className=''>
                  <h3>Senior Software Engineer</h3>
                  <span>So Digital Inc</span>
              </div>
                <button className={"px-[27.5px] py-[12px] w-[141px] h-[48px] rounded-[5px] text-white"}><b>Apply Now</b></button>
            </footer>

      </section>
  )
}

export default DynamicPage