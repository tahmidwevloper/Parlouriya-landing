import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#12153C] dark:bg-pink-50 text-white dark:text-[#12153C] py-10 px-4 sm:px-6 md:px-16 rounded-[64px] mx-4 sm:mx-4 md:mx-6 lg:mx-12 xl:mx-16 2xl:mx-48">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white dark:text-[#12153C]">
          mangomint
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {/* Column 1 */}
        <div className="p-4 rounded-2xl bg-white/10 dark:bg-black/5 shadow-md backdrop-blur-sm border border-white/10 dark:border-black/10">
          <h3 className="text-sm font-medium mb-2 uppercase bg-gradient-to-r from-purple-800 to-orange-300 bg-clip-text text-transparent">
            Platform
          </h3>
          <ul className="space-y-1 text-sm text-white/80 dark:text-[#12153C]/80">
            <li>Why We&#39;re Different</li>
            <li>Pricing</li>
            <li>Watch a video tour</li>
            <li>Book a live demo</li>
            <li>Try it now</li>
            <li>Log in</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="p-4 rounded-2xl bg-white/10 dark:bg-black/5 shadow-md backdrop-blur-sm border border-white/10 dark:border-black/10">
          <h3 className="text-sm font-medium mb-2 uppercase bg-gradient-to-r from-purple-800 to-orange-300 bg-clip-text text-transparent">
            Business Types
          </h3>
          <ul className="space-y-1 text-sm text-white/80 dark:text-[#12153C]/80 max-h-52 overflow-hidden">
            <li>Hair Salons</li>
            <li>Med Spas</li>
            <li>IV Therapy</li>
            <li>Skincare Studios</li>
            <li>Beauty Studios</li>
            <li>Massage Studios</li>
            <li>Hair Removal Studios</li>
            <li>Tattoo & Piercing</li>
            <li>Nail salons</li>
            <li>Barbershops</li>
            <li>Wellness Centers</li>
            <li>Spas</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="p-4 rounded-2xl bg-white/10 dark:bg-black/5 shadow-md backdrop-blur-sm border border-white/10 dark:border-black/10">
          <h3 className="text-sm font-medium mb-2 uppercase bg-gradient-to-r from-purple-800 to-orange-300 bg-clip-text text-transparent">
            Features
          </h3>
          <ul className="space-y-1 text-sm text-white/80 dark:text-[#12153C]/80 max-h-52 overflow-hidden">
            <li>Calendar & Scheduling</li>
            <li>Payments & Point-of-Sale</li>
            <li>Online Booking</li>
            <li>Express Booking™</li>
            <li>Mobile Apps</li>
            <li>Client Management</li>
            <li>Two-Way Texting</li>
            <li>Memberships & Packages</li>
            <li>Forms & Charting</li>
            <li>Gift Cards</li>
            <li>Automated Flows</li>
            <li>Campaigns</li>
            <li>Offers & Discounts</li>
            <li>Virtual Waiting Room</li>
            <li>Retail & Inventory</li>
            <li>Staff Management</li>
            <li>Reporting</li>
            <li>Multi-Location</li>
            <li>Payroll Processing</li>
            <li>Integrations</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="p-4 rounded-2xl bg-white/10 dark:bg-black/5 shadow-md backdrop-blur-sm border border-white/10 dark:border-black/10">
          <h3 className="text-sm font-medium mb-2 uppercase bg-gradient-to-r from-purple-800 to-orange-300 bg-clip-text text-transparent">
            Resources
          </h3>
          <ul className="space-y-1 text-sm text-white/80 dark:text-[#12153C]/80">
            <li>Blog</li>
            <li>Video Library</li>
            <li>Learning Center</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="p-4 rounded-2xl bg-white/10 dark:bg-black/5 shadow-md backdrop-blur-sm border border-white/10 dark:border-black/10">
          <h3 className="text-sm font-medium mb-2 uppercase bg-gradient-to-r from-purple-800 to-orange-300 bg-clip-text text-transparent">
            Follow Us
          </h3>
          <ul className="space-y-1 text-sm text-white/80 dark:text-[#12153C]/80">
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-xs text-white/50 dark:text-[#12153C]/60 flex flex-col md:flex-row justify-between gap-4">
        <p>© Mangomint, Inc. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <span>Legal</span>
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
