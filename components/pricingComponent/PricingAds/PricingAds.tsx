import { CircleDollarSign, MessagesSquare, MoveRight, Notebook } from 'lucide-react'

const PricingAds = () => {
    
const pricingData = {
        "plans": [
          {
            "id": "charting",
            "name": "Forms & Charting",
            "price": 165,
            "period": "month",
            "description": "Collect and organize important client data, treatment notes, and more.",
            "color": "purple",
            "additionalCost" : "$25 per additional location",
            "features": ["2 to 10 service providers", "Unlimited SMS & email notifications", "Add-on integrations available"],
            "isPopular": false
          },
          {
            "id": "texting",
            "name": "Two way texting",
            "price": 245,
            "period": "month",
            "description": "Communicate with clients and manage conversations all in one place.",
            "color": "pink",
            "additionalCost" : "$8 per worker",
            "features": [
              "Up to 20 service providers",
              "Advanced features: Express Booking™, Virtual Waiting Room, Memberships",
              "Standard integrations included"
            ],
            "isPopular": true
          },
          {
            "id": "payroll",
            "name": "Payroll Processing",
            "price": 375,
            "period": "month",
            "description": "Ditch extra systems and make payday easy with built-in payroll processing.",
            "color": "orange",
            "additionalCost" : "$25 per additional location",
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
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-80">
  {pricingData.plans.map((plan) => (
    <div
      key={plan.id}
      className="relative bg-white rounded-2xl shadow-xl hover:shadow-3xl transition-shadow duration-300"
    >
      <div className="text-center p-6">
        <div className="mb-4 flex justify-center items-center">
          {plan?.name === "charting" ? (
            <Notebook className="h-6 w-6 text-purple-600" />
          ) : plan?.name === "texting" ? (
            <MessagesSquare className="h-6 w-6 text-pink-600" />
          ) : plan?.name === "payroll" ? (
            <CircleDollarSign className="h-6 w-6 text-orange-600" />
          ) : null}
        </div>

        <h3
          className={`text-xl sm:text-2xl font-bold mb-2 ${
            plan.name === "Essentials"
              ? "text-purple-700"
              : plan.name === "Standard"
              ? "text-pink-700"
              : plan.name === "Unlimited"
              ? "text-orange-700"
              : "text-gray-700"
          }`}
        >
          {plan.name}
        </h3>

        <p className="text-gray-600 text-base sm:text-lg">{plan.description}</p>

        <div className="flex justify-center items-center text-pink-800 hover:text-purple-800 space-x-1 mt-6 group cursor-pointer">
          <p className="text-sm sm:text-base font-medium">Learn more</p>
          <MoveRight className="transition-transform duration-300 group-hover:translate-x-1 h-5 w-5" />
        </div>
      </div>

      <hr className="my-2 mx-8 border-gray-300" />

      <div className="flex justify-center items-center px-6 pb-6">
        <p className="text-center text-base text-md text-gray-700">
          {`$${plan.price}/${plan.period}`}
        </p>
        &nbsp;
        {plan.additionalCost && (
          <p className="text-center text-md text-gray-500">
            (+{plan.additionalCost})
          </p>
        )}
      </div>
    </div>
  ))}
</div>

  )
}

export default PricingAds
