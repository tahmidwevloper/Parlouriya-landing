"use client"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader"


const PricingTable = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false)

  const sectionHeaderData = {
    sectionHeader: "No header",
    sectionTitle: "Compare plans",
    sectionDescription: "Want to talk to a human about our plans?Start a chat",
    isCentered: true,
  }
  
  const pricingData = {
        plans: [
          {
            id: "essentials",
            name: "Essentials",
            description: "Small businesses",
            price: 165,
            currency: "USD",
            period: "/mo",
          },
          {
            id: "standard",
            name: "Standard",
            description: "Medium businesses",
            price: 245,
            currency: "USD",
            period: "/mo",
          },
          {
            id: "unlimited",
            name: "Unlimited",
            description: "Large businesses",
            price: 375,
            currency: "USD",
            period: "/mo",
          },
        ],
        features: [
          {
            category: "Service Providers",
            items: [
              {
                name: "Service Providers",
                description: "One staff member and classified",
                values: {
                  essentials: "2 to 10",
                  standard: "Up to 20",
                  unlimited: "Unlimited",
                },
              },
            ],
          },
          {
            category: "Additional Locations",
            items: [
              {
                name: "Additional Locations",
                description: "First location included in each plan",
                values: {
                  essentials: "$95/month",
                  standard: "$195/month",
                  unlimited: "$375/month",
                },
              },
            ],
          },
          {
            category: "Features",
            items: [
              {
                name: "Calendar & Scheduling",
                values: {
                  essentials: true,
                  standard: true,
                  unlimited: true,
                },
              },
              {
                name: "Client Management",
                values: {
                  essentials: true,
                  standard: true,
                  unlimited: true,
                },
              },
              {
                name: "Online Booking",
                values: {
                  essentials: true,
                  standard: true,
                  unlimited: true,
                },
              },
              {
                name: "Retail & Inventory",
                values: {
                  essentials: true,
                  standard: true,
                  unlimited: true,
                },
              },
              {
                name: "Staff Management",
                values: {
                  essentials: true,
                  standard: true,
                  unlimited: true,
                },
              },
              {
                name: "Gift Cards",
                values: {
                  essentials: true,
                  standard: true,
                  unlimited: true,
                },
              },
              {
                name: "Mobile Apps",
                values: {
                  essentials: true,
                  standard: true,
                  unlimited: true,
                },
              },
              {
                name: "Reporting",
                values: {
                  essentials: true,
                  standard: true,
                  unlimited: true,
                },
              },
              {
                name: "Multi-Location",
                values: {
                  essentials: true,
                  standard: true,
                  unlimited: true,
                },
              },
              {
                name: "Payments & Point-of-Sale",
                values: {
                  essentials: true,
                  standard: true,
                  unlimited: true,
                },
              },
              {
                name: "Offers & Discounts",
                values: {
                  essentials: true,
                  standard: true,
                  unlimited: true,
                },
              },
              {
                name: "Packages",
                values: {
                  essentials: true,
                  standard: true,
                  unlimited: true,
                },
              },
              {
                name: "Memberships",
                values: {
                  essentials: false,
                  standard: true,
                  unlimited: true,
                },
              },
              {
                name: "Waiting Room",
                values: {
                  essentials: false,
                  standard: true,
                  unlimited: true,
                },
              },
              {
                name: "Express Bookings",
                values: {
                  essentials: false,
                  standard: true,
                  unlimited: true,
                },
              },
              {
                name: "HIPAA Compliance",
                values: {
                  essentials: false,
                  standard: true,
                  unlimited: true,
                },
              },
            ],
          },
          {
            category: "Marketing & Automation",
            items: [
              {
                name: "Email Campaigns",
                description: "Pay as you go (1¢ per marketing credit)",
                values: {
                  essentials: "Pay as you go",
                  standard: "Included",
                  unlimited: "Included",
                },
              },
              {
                name: "Automated Flows",
                values: {
                  essentials: false,
                  standard: true,
                  unlimited: true,
                },
              },
              {
                name: "Payment Processing",
                values: {
                  essentials: false,
                  standard: true,
                  unlimited: true,
                },
              },
            ],
          },
          {
            category: "Transaction Fees",
            items: [
              {
                name: "In-person transactions",
                values: {
                  essentials: "2.6% + 5¢",
                  standard: "2.6% + 5¢",
                  unlimited: "2.6% + 5¢",
                },
              },
              {
                name: "Virtual transactions",
                values: {
                  essentials: "2.9% + 20¢",
                  standard: "2.9% + 20¢",
                  unlimited: "2.9% + 20¢",
                },
              },
              {
                name: "Custom rates",
                description: "Businesses with over $50k/mo in volume may qualify for custom rates",
                values: {
                  essentials: "Custom rates",
                  standard: "Custom rates",
                  unlimited: "Custom rates",
                },
              },
              {
                name: "Bluetooth card reader",
                values: {
                  essentials: "$100/device",
                  standard: "1 included",
                  unlimited: "1 included",
                },
              },
            ],
          },
          {
            category: "Integrations",
            items: [
              {
                name: "Shopify",
                values: {
                  essentials: false,
                  standard: "$50/month",
                  unlimited: true,
                },
              },
              {
                name: "Setup & Onboarding",
                values: {
                  essentials: false,
                  standard: false,
                  unlimited: true,
                },
              },
              {
                name: "One-on-one personalized onboarding",
                description: "Dedicated onboarding manager",
                values: {
                  essentials: false,
                  standard: true,
                  unlimited: true,
                },
              },
            ],
          },
        ],
      }

      useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const screenWidth = window.innerWidth;

          if(screenWidth <768){
            setIsHeaderSticky(false)
          }

          if (scrollTop > 3680) {
            setIsHeaderSticky(false)
          } else if (scrollY > 1580 && screenWidth >= 768) {
            setIsHeaderSticky(true)
          } else {
            setIsHeaderSticky(false);
          }
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [window.scrollY]);

      
      
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
      const renderFeatureValue = (value: any, planId: string) => {
        if (typeof value === "boolean") {
          return value ? (
            <Check className="w-5 h-5 text-purple-600 mx-auto" />
          ) : (
            <span className="text-gray-300 mx-auto block w-5 h-5 text-center">-</span>
          )
        }
    
        if (typeof value === "string") {
          if (value.includes("$")) {
            return <span className="text-sm font-medium text-gray-700">{value}</span>
          }
          return <span className="text-sm text-gray-600">{value}</span>
        }
    
        return <span className="text-sm text-gray-600">{value}</span>
      }
    
  return (
    <div className="my-16">
        <SectionHeader sectionHeaderData={sectionHeaderData} />
        <div className="w-full max-w-6xl mx-auto p-4 pricing-table">
      <div className="overflow-hidden">
        <div
          className={`transition-all duration-300 bg-gradient-to-r from-purple-50 to-pink-50 border-b ${
            isHeaderSticky ? "fixed top-[68px] left-0 right-0 z-50 shadow-lg mx-0 md:mx-90" : ""
          }`}
        >
          <div className={`${isHeaderSticky ? "max-w-6xl mx-auto bg-pink-50" : ""}`}>
            <div className="grid grid-cols-4 gap-4 p-6">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">Features</h3>
              </div>
              {pricingData.plans.map((plan) => (
                <div key={plan.id} className="text-center">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-sm text-gray-600">{plan.description}</p>
                    <div className="text-3xl font-bold text-gray-900">
                      ${plan.price}
                      <span className="text-sm font-normal text-gray-600">{plan.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${isHeaderSticky ? "mt-40" : ""}`}>
          {pricingData.features.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="bg-gray-50 border-b">
                <div className="grid grid-cols-4 gap-4 p-4">
                  <div className="col-span-4">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">{category.category}</h4>
                  </div>
                </div>
              </div>

              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <div className="grid grid-cols-4 gap-4 p-4 items-center">
                    <div className="text-left">
                      <div className="font-medium text-gray-900">{item.name}</div>
                      {item.description && <div className="text-sm text-gray-500 mt-1">{item.description}</div>}
                    </div>
                    {pricingData.plans.map((plan) => (
                      <div key={plan.id} className="text-center">
                        {renderFeatureValue(item.values[plan.id as keyof typeof item.values], plan.id)}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='flex items-center justify-center gap-4 mt-8'>
      <Button variant={"outline"} className='rounded-full text-pink-700 border border-pink-700 hover:bg-pink-700 hover:text-white px-9 py-7'>Book a demo</Button>
      <Button className='rounded-full text-white bg-pink-700 hover:bg-pink-800 px-9 py-7'>Try it now</Button>
    </div>
    </div>
    </div>
  )
}

export default PricingTable;
 


