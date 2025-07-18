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
      price: "4999",
      features: [
        "✔ 10 Matches per month  ",
        "✔ Chat Support",
        "✖ Profile Boost",
         "✖ Personal Coordinator",
      ],
    },
    {
      name: "Premium",
      price: "19999",
      features: [
        "✔ Unlimite Matches",
        "✔ Chat Support",
        "✔ Profile Boost",
        "✔ Personal Coordinator",
      ],
    },
  ];
  return (
    <section className="py-12 bg-pink-100 text-center">
      <h2 className="text-3xl font-bold text-pink-700 mb-8">
        Membership Plans
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {plans.map((plan, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md w-64">
            <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
            <p className="text-pink-600 mt-2">₹{plan.price}</p>
            <ul className="mt-4 text-gray-600 text-sm space-y-2" >
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="mt-4 bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700">
              Register Free
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
