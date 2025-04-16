
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  name: string;
  title?: string;
  avatar?: string;
  className?: string;
}

const Testimonial = ({
  quote,
  name,
  title,
  avatar,
  className,
}: TestimonialProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg",
      className
    )}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-water-light mr-3">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-water text-white text-lg font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          {title && <p className="text-neutral-dark text-sm">{title}</p>}
        </div>
      </div>
      <blockquote className="italic text-gray-600">"{quote}"</blockquote>
    </div>
  );
};

export default Testimonial;
