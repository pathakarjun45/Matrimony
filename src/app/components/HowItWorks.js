export default function HowItWorks() {
  const steps = [
    { title: "Create Profile", text:"Register for free & put up your Matrimony Profile", icon: "📝" },
    { title: "Connect", text:"Select & Connect with Matches you like", icon: "💌" },
    { title: " Interact", text:"Become a Premium Member & Start a Conversation", icon: "☎️" },
  ];

  return (
    <section className="py-12 bg-pink-100 text-center">
      <h2 className="text-3xl font-bold text-pink-700 mb-8">How MatrimonyHub Works</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md w-64">
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
            <p className="text-s font-normal text-gray-500 ">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
