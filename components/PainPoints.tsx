const painPoints = [
  "You've worked hard your whole life. But privately, you're not sure your family is actually going to be okay long term.",
  "Your partner and you have never really talked about money. Not properly. Not honestly.",
  "You know there's a playbook wealthy families follow. You've just never had access to it.",
];

export default function PainPoints() {
  return (
    <section className="bg-dark py-20 px-6">
      <div className="max-w-2xl mx-auto space-y-12">
        {painPoints.map((point, i) => (
          <p
            key={i}
            className="font-serif text-xl sm:text-2xl leading-relaxed text-gray-400 text-center"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            &ldquo;{point}&rdquo;
          </p>
        ))}
      </div>
    </section>
  );
}
