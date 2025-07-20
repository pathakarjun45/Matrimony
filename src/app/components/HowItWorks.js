export default function HowItWorks() {
  const steps = [
    {
      title: "Create Profile",
      text: "Register for free & put up your Matrimony Profile",
      icon: "📝",
    },
    {
      title: "Connect",
      text: "Select & Connect with Matches you like",
      icon: "💌",
    },
    {
      title: "Interact",
      text: "Become a Premium Member & Start a Conversation",
      icon: "☎️",
    },
  ];

  return (
    <section className="py-16 px-4 bg-pink-100 text-center">
      <h2 className="text-4xl font-bold text-pink-700 mb-10">
        How MatrimonyHub Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center"
          >
            <div className="text-6xl mb-4 animate-bounce">{step.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {step.title}
            </h3>
            <p className="text-base text-gray-600">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
