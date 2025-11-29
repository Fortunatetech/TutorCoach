export default function TrustRow() {
  const stats = [
    { icon: '📚', value: '8+', label: 'Years Teaching' },
    { icon: '🎓', value: '1,200+', label: 'Students Taught' },
    { icon: '⭐', value: '95%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className="py-12 px-4 bg-white border-y border-neutral-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-brand-teal-50 rounded-xl flex items-center justify-center text-3xl">
                {stat.icon}
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-navy-900">{stat.value}</p>
                <p className="text-neutral-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-neutral-600">
          Trusted by 1,000+ learners — avg rating <span className="font-bold text-brand-teal-600">4.9/5</span>
        </p>
      </div>
    </section>
  );
}