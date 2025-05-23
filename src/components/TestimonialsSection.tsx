import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Frontend Developer",
    company: "TechCorp",
    quote: "PicoAI helped me identify the exact skills I needed to highlight for my dream role. I had 3 interviews within a week!",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "InnovateCo",
    quote: "The insights from PicoAI were invaluable. I optimized my resume based on their analysis and landed a job with a 30% salary increase.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Data Scientist",
    company: "AnalyticaLabs",
    quote: "After months of searching, PicoAI helped me understand what hiring managers were really looking for in my field. Game changer!",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Hear from our users</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Job seekers are seeing real results with our AI-powered research team.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-sm shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <Quote className="absolute top-0 right-0 w-8 h-8 text-blue-500/20" />
              </div>
              
              <blockquote className="text-gray-700 mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;