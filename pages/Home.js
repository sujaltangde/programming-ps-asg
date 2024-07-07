"use client"

import { MoveRight } from 'lucide-react'; // Importing the icons from lucide-react
import useThemeStore from '../store/themeStore';
import Carousal from '@/components/Carousal';
import Stats from '@/components/Stats';

const marketingCards = [
  {
    img: "/static/mark1.svg",
    text: "Creating Streamlined Safeguarding Processes with OneRen"
  },
  {
    img: "/static/mark2.svg",
    text: "What are your safeguarding responsibilities and how can you manage them?"
  },
  {
    img: "/static/mark3.svg",
    text: "Revamping the Membership Model with Triathlon Australia"
  }
]

const customersLogos = [
  {
    img: "/static/cust1.svg"
  },
  {
    img: "/static/cust2.svg"
  },
  {
    img: "/static/cust3.svg"
  },
  {
    img: "/static/cust4.svg"
  },
  {
    img: "/static/cust5.svg"
  },
  {
    img: "/static/cust6.svg"
  },
]

const HomePage = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <>
      <div className={`pt-16 min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : ' text-black'}`}>


        <div className={` ${theme === 'light' && "bg-gray-100"} pt-12`}>
          <Carousal />
        </div>


        <div>
          <div className='md:px-20 px-8 py-12'>
            <div className='text-center'>
              <p className='font-semibold text-2xl'>Our Clients</p>
              <p>We have been working with some Fortune 500+ clients</p>
            </div>

            <div className='flex items-center md:gap-24 md:pt-8 pt-10 gap-5 flex-wrap justify-center'>
              {
                [...customersLogos, {
                  img: "/static/cust3.svg"
                }].map((e) => (
                  <img src={e.img} alt={e.img.slice(8)} className='md:w-12 w-10' />
                ))
              }
            </div>
          </div>
        </div>


        <div>
          <div className='py-12'>
            <div className='text-center flex justify-center items-center flex-col'>
              <p className='font-semibold md:text-3xl text-2xl md:w-1/2 md:px-12 px-8'>Manage your entire community in a single system</p>
              <p className='py-6'>Who is Nextcent suitable for?
              </p>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 md:px-32 px-5 md:gap-20 gap-5'>
              <div className='text-center flex flex-col  justify-center items-center gap-2'>
                <img src="/static/orgs.svg" alt="orgs.svg" />
                <p className='font-semibold text-xl'>Membership Organisations</p>
                <p className={`${theme === 'dark' ? "text-white" : "text-gray-500"} text-sm`}>Our membership management software provides full automation of membership renewals and payments</p>
              </div>
              <div className='text-center flex  flex-col justify-center items-center gap-2'>
                <img src="/static/asos.svg" alt="asos.svg" />
                <p className='font-semibold text-xl'>National Associations</p>
                <p className={`${theme === 'dark' ? "text-white" : "text-gray-500"} text-sm`}>Our membership management software provides full automation of membership renewals and payments</p>
              </div>
              <div className='text-center flex flex-col  justify-center items-center gap-2'>
                <img src="/static/groups.svg" alt="groups.svg" />
                <p className='font-semibold text-xl'>Clubs And Groups</p>
                <p className={`${theme === 'dark' ? "text-white" : "text-gray-500"} text-sm`}>Our membership management software provides full automation of membership renewals and payments</p>
              </div>
            </div>
          </div>

        </div>


        <div>
          <div className='flex md:flex-row flex-col items-center md:px-44 w-full py-12'>
            <div className='md:w-1/3 w-full'>
              <img src="/static/rafiki.svg" alt="rafiki.svg" />
            </div>
            <div className='md:w-2/3 w-full flex flex-col gap-3 md:px-12 px-8 md:pt-0 pt-5'>
              <p className='text-3xl font-semibold'>The unseen of spending three years at Pixelgrade</p>
              <p className={`${theme === 'dark' ? "text-white" : "text-gray-500"} text-sm`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
              <div>
                <button className='bg-green-600 px-6 text-white py-2 text-sm'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Stats />
        </div>

        <div>
          <div className='flex md:flex-row flex-col items-center md:px-44 w-full py-12'>
            <div className='md:w-1/3 w-full'>
              <img src="/static/pana.svg" alt="pana.svg" />
            </div>
            <div className='md:w-2/3 w-full flex flex-col gap-3 md:px-12 px-8 md:pt-0 pt-5'>
              <p className='text-3xl font-semibold'>How to design your site footer like we did</p>
              <p className={`${theme === 'dark' ? "text-white" : "text-gray-500"} text-sm`}>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
              <div>
                <button className='bg-green-600 px-6 text-white py-2 text-sm'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={`md:px-20 px-6 py-6 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
            <div className='flex md:flex-row flex-col items-center gap-5'>
              <div className='md:w-1/3'>
                <img src="/static/tesla.svg" alt="tesla.svg" />
              </div>

              <div className='md:w-2/3'>
                <p className={`${theme === 'dark' ? "text-white" : "text-gray-500"}`}>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <div>
                  <p className='text-green-600 text-lg mt-4'>Time Smith</p>
                  <p className='mt-2'>British Dragon Boat Racing Association</p>
                </div>

                <div className='flex md:flex-row flex-col md:gap-8 gap-4 md:items-center'>
                  <div className='flex items-center gap-4 py-3'>
                    {customersLogos.map((e, index) => (
                      <img key={index} src={e.img} alt={e.img.slice(8)} className='md:w-12 w-8 ' />
                    ))}
                  </div>
                  <button className='text-green-600 flex items-center justify-center gap-2'>
                    <span>Meet all customers</span>
                    <MoveRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-3'>
          <div className='flex flex-col justify-center items-center gap-3 py-12'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <p className='text-center text-3xl font-semibold'>Caring is the new marketing</p>
              <p className='text-center md:text-base text-sm w-4/5 md:w-3/6'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 md:px-20 px-5'>
              {marketingCards.map((e, index) => (
                <div key={index} className='flex justify-center items-center flex-col'>
                  <img src={e.img} alt={e.img.slice(8)} className='z-0' />
                  <div className={`flex w-9/12 flex-col items-center justify-center z-10 gap-5 shadow-md ${theme === 'dark' ? 'shadow-gray-700 bg-gray-800' : 'shadow-gray-300 bg-gray-100'} rounded-md p-6 -translate-y-20`}>
                    <p className='text-center md:px-4 px-1'>{e.text}</p>
                    <button className='text-green-600 flex items-center justify-center gap-2'>
                      <span>Read more</span>
                      <MoveRight />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=''>
          <div className={`flex flex-col ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} py-10 gap-5 justify-center items-center`}>
            <p className='md:text-5xl text-3xl md:px-96 px-10 text-center font-semibold'>Pellentesque suscipit fringilla libero eu.</p>
            <button className='flex gap-1 items-center px-6 py-3 text-sm bg-green-600 text-white'>
              <span>Get a Demo</span>
              <MoveRight />
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default HomePage;
