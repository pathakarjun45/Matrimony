export default function PricingPlans() {
  return (
    <section className="py-12 bg-pink-100 text-center">
      <h2 className="text-3xl font-bold text-pink-700 mb-8">Membership Plans</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {["Free", "Premium", "Elite"].map((plan, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md w-64">
            <h3 className="text-xl font-semibold text-gray-800">{plan}</h3>
            <p className="text-pink-600 mt-2">₹{i * 999 + 0}</p>
            <ul className="mt-4 text-gray-600 text-sm space-y-2">
              <li>✔ 10 Matches</li>
              <li>✔ Chat Support</li>
              <li>✔ Profile Boost</li>
            </ul>
            <button className="mt-4 bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
