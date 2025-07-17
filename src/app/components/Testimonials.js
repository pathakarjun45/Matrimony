export default function Testimonials() {
  return (
    <section className="py-12 bg-pink-50 text-center">
      <h2 className="text-3xl font-bold text-pink-700 mb-8">Happy Couples</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {["Rahul & Priya", "Amit & Neha", "Sagar & Riya"].map((name, i) => (
          <div key={i} className="p-6 border rounded-lg shadow w-72">
            <p className="text-gray-700 italic">
              “Thanks to MatrimonyHub, I met the love of my life!”
            </p>
            <h4 className="mt-4 font-bold text-pink-600">{name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
