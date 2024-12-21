const painPoints = [
  {
    number: "01",
    title: "Administrative Overload",
    description: "Reduce time spent on routine inquiries and paperwork."
  },
  {
    number: "02",
    title: "Patient Communication",
    description: "Provide instant responses to common patient questions."
  },
  {
    number: "03",
    title: "Staff Burnout",
    description: "Automate repetitive tasks to free up your staff."
  }
];

const PainPoints = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Common Challenges We Solve
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our AI assistant addresses key pain points in modern healthcare practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg border border-slate-200"
            >
              <div className="text-4xl font-bold text-sky-600 mb-4">
                {point.number}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {point.title}
              </h3>
              <p className="text-slate-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;