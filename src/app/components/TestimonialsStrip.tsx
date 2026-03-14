const testimonials = [
  {
    quote:
      "THIS JOLLOF SAUCE IS INCREDIBLE. My dad LOVED the Jollof sauce... it was so delicious.",
    emphasized: "LOVED",
    name: "Kassey Wills",
    context: null,
  },
  {
    quote: "Avaya ate a big bowl in bed while studying.",
    emphasized: "big bowl",
    name: "Alicia",
    context: "I went with gnocchi and rice…",
  },
];

export default function TestimonialsStrip() {
  return (
    <section className="w-full bg-secondary py-12 border-b-2 border-dark">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Mobile: Swipeable Carousel */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 -mx-4 px-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="snap-center shrink-0 w-[80%] bg-white border-2 border-dark shadow-neo p-6 flex flex-col justify-between"
              >
                <p
                  className="text-2xl font-marker mb-4 text-dark"
                  dangerouslySetInnerHTML={{
                    __html: testimonial.quote.replace(
                      testimonial.emphasized,
                      `<b class="text-primary">${testimonial.emphasized}</b>`,
                    ),
                  }}
                />
                <div>
                  <cite className="font-bold text-dark not-italic block">
                    — {testimonial.name}
                  </cite>
                  {testimonial.context && (
                    <span className="text-sm text-gray-600 block">
                      {testimonial.context}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 3-Up Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border-2 border-dark shadow-neo p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <blockquote className="flex flex-col h-full">
                <p
                  className="text-2xl font-marker mb-4 text-dark grow"
                  dangerouslySetInnerHTML={{
                    __html: testimonial.quote.replace(
                      testimonial.emphasized,
                      `<b class="text-primary">${testimonial.emphasized}</b>`,
                    ),
                  }}
                />
                <footer className="mt-4">
                  <cite className="font-bold text-dark not-italic block">
                    — {testimonial.name}
                  </cite>
                  {testimonial.context && (
                    <span className="text-sm text-gray-600 block">
                      {testimonial.context}
                    </span>
                  )}
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        {/*<div className="text-center mt-10">
          <Link href="/#testimonials" className="font-display uppercase tracking-wider text-dark border-b-2 border-primary hover:bg-primary hover:text-white transition-all pb-1">
            See More Praise
          </Link>
        </div>*/}
      </div>
    </section>
  );
}
