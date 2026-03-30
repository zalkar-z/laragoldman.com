interface ReviewCardProps {
  photo: string;
  quote: string;
  name: string;
  location: string;
}

export default function ReviewCard({ photo, quote, name, location }: ReviewCardProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start p-5 rounded-lg gold-border-glow bg-dark-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo}
        alt={name}
        className="w-20 h-20 rounded-full object-cover shrink-0 border-2 border-gold/30"
      />
      <div>
        <p className="text-gray-300 leading-relaxed">&ldquo;{quote}&rdquo;</p>
        <p className="mt-2 text-sm text-gold-light/60">
          {name}, {location}
        </p>
      </div>
    </div>
  );
}
