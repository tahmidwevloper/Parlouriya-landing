import { Check } from 'lucide-react'

const PricingPlans = () => {

const pricingData = {
        "plans": [
          {
            "id": "essentials",
            "name": "Essentials",
            "price": 165,
            "period": "month",
            "description": "For small teams",
            "color": "purple",
            "features": ["2 to 10 service providers", "Unlimited SMS & email notifications", "Add-on integrations available"],
            "isPopular": false
          },
          {
            "id": "standard",
            "name": "Standard",
            "price": 245,
            "period": "month",
            "description": "For busy salons & spas",
            "color": "pink",
            "features": [
              "Up to 20 service providers",
              "Advanced features: Express Booking™, Virtual Waiting Room, Memberships",
              "Standard integrations included"
            ],
            "isPopular": true
          },
          {
            "id": "unlimited",
            "name": "Unlimited",
            "price": 375,
            "period": "month",
            "description": "For large businesses",
            "color": "orange",
            "features": [
              "Unlimited service providers",
              "All essentials, plus advanced features",
              "Shopify and other integrations included, Custom APIs available"
            ],
            "isPopular": false
          }
        ]
      }

  return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16 lg:px-80">
{pricingData.plans.map((plan) => (
  <div
    key={plan.id}
    className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
  >
    {plan.isPopular && (
      <div className="absolute top-8 left-8/12 transform -translate-x-1/2">
        <span className="bg-gray-100 border border-gray-300 px-2 py-2 rounded-full text-sm font-light">
          MOST POPULAR
        </span>
      </div>
    )}

    <div className="text-start p-6 pb-4">
      <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${
        plan.name === "Essentials" ? "text-purple-700" :
        plan.name === "Standard" ? "text-pink-700" :
        plan.name === "Unlimited" ? "text-orange-700" : "text-gray-700"
      }`}>
        {plan.name}
      </h3>
      <div className="mb-4">
        <span className="text-4xl sm:text-5xl font-bold text-gray-900">${plan.price}</span>
        <span className="text-gray-600 text-lg ml-1">/ {plan.period}</span>
      </div>
      <p className="text-gray-600 text-lg">{plan.description}</p>
    </div>

    <hr className='my-2 mx-8'/>
    
    <div className="px-6 pb-6">
      <ul className="space-y-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={` ${plan?.name == "Essentials" ? "text-purple-800" :
                plan?.name == "Standard" ? "text-pink-700" :
                plan?.name == "Unlimited" ? "text-orange-700" : "text-gray-600"
            } w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0`} />
            <span className="text-gray-700 leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
))}
</div>
)}

export default PricingPlans;
