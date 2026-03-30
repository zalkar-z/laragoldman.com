import Image from "next/image";

interface ReviewBlockProps {
  photo: string;
  name: string;
  tag: string;
  text: string;
}

export function ReviewBlock({ photo, name, tag, text }: ReviewBlockProps) {
  return (
    <div className="rounded-xl overflow-hidden gold-border-glow bg-dark-card">
      <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
        <Image
          src={photo}
          alt={`Review by ${name}`}
          fill
          sizes="(max-width: 640px) 100vw, 512px"
          className="object-cover"
        />
      </div>
      <div className="px-5 py-5">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[13px] text-gold tracking-wide">★★★★★</div>
          <span className="text-[11px] text-gray-500 border border-gray-700 rounded px-2 py-0.5">
            {tag}
          </span>
        </div>
        <p className="text-[15px] leading-relaxed text-gray-300 mb-4">
          &ldquo;{text}&rdquo;
        </p>
        <p className="text-sm font-medium text-gold-light/80">— {name}</p>
      </div>
    </div>
  );
}
