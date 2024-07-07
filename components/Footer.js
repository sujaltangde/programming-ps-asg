"use client"

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-24">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        {/* Logo and Company Info */}
        <div className="flex flex-col gap-4 md:mr-10">
          <div className="flex items-center gap-1">
            <img src="/static/Icon2.svg" className="text-white pb-2 h-6" alt="Icon.svg" />
            <span className="p-2 text-white font-bold text-lg">Nexcent</span>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <p>Copyright &copy; 2024 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>
          <div className="flex gap-4">
            <img src="/static/insta.svg" alt="insta.svg" className="h-6" />
            <img src="/static/ball.svg" alt="ball.svg" className="h-6" />
            <img src="/static/x.svg" alt="x.svg" className="h-6" />
            <img src="/static/yt.svg" alt="yt.svg" className="h-6" />
          </div>
        </div>

        {/* Company Links (Desktop) */}
        <div className="hidden md:flex flex-col gap-4">
          <p className="font-semibold">Company</p>
          <div className="flex flex-col gap-3 text-sm text-gray-300">
            <Link href="/">About us</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Contact us</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">Testimonials</Link>
          </div>
        </div>

        {/* Support Links (Desktop) */}
        <div className="hidden md:flex flex-col gap-4">
          <p className="font-semibold">Support</p>
          <div className="flex flex-col gap-3 text-sm text-gray-300">
            <Link href="/">Help center</Link>
            <Link href="/">Terms of service</Link>
            <Link href="/">Legal</Link>
            <Link href="/">Privacy policy</Link>
            <Link href="/">Status</Link>
          </div>
        </div>

        {/* Mobile Links (Stacked on Mobile) */}
        <div className="md:hidden flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Company</p>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <Link href="/">About us</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact us</Link>
              <Link href="/">Pricing</Link>
              <Link href="/">Testimonials</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Support</p>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <Link href="/">Help center</Link>
              <Link href="/">Terms of service</Link>
              <Link href="/">Legal</Link>
              <Link href="/">Privacy policy</Link>
              <Link href="/">Status</Link>
            </div>
          </div>
        </div>

        {/* Stay Up to Date Section */}
        <div className="md:pb-28">
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Stay up to date</p>
            <div className="flex items-center gap-3 px-3 md:w-full py-2 rounded-md text-sm text-gray-300 bg-gray-600">
              <input type="text" placeholder="Your email address" className="bg-gray-600 outline-none placeholder-slate-300 w-full" />
              <img src="/static/send.svg" alt="send.svg" className="h-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
