import Image from 'next/image'

const CustomerExp = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Rated #1 for customer experience</h2>

        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Salons and spas rave about our white-glove approach to customer onboarding and support. Making the switch has
          never been easier.
        </p>

        <div className="flex justify-center">
          {/* Warning because of no image finding here */}
          <Image
            src="/awards-badges.png"
            alt="Awards and recognition badges including G2 Easiest To Use 2024, Software Advice Front Runners 2024, GetApp Category Leaders 2024, Capterra Best Value 2024, Capterra Shortlist 2024, and G2 Best Support 2024"
            width={1200}
            height={200}
            className="max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default CustomerExp
