export default function PricingPlans() {
  const plans = [
    {
      name: "Free",
      price: "0",
      features: [
        "✔ Limited Matches",
        "✖ Chat Support",
        "✖ Profile Boost",
        "✖ Personal Coordinator",
      ],
    },
    {
      name: "Basic",
      price: "4,999",
      features: [
        "✔ 10 Matches per month",
        "✔ Chat Support",
        "✖ Profile Boost",
        "✖ Personal Coordinator",
      ],
    },
    {
      name: "Premium",
      price: "19,999",
      features: [
        "✔ Unlimited Matches",
        "✔ Chat Support",
        "✔ Profile Boost",
        "✔ Personal Coordinator",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-pink-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-700 mb-4">
          Membership Plans
        </h2>
        <p className="text-gray-600 mb-10">
          Choose a plan that suits your journey to find the perfect match.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-pink-700 mb-2">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold text-gray-800 mb-4">₹{plan.price}</p>

              <ul className="text-gray-700 text-sm space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <button className="w-full bg-pink-600 text-white py-2 rounded-lg font-medium hover:bg-pink-700 transition-colors">
                Register Free
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
