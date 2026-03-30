"use client";

export default function AnnouncementBar() {
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 2);
  const formatted = deadline.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className=" text-white text-center py-1.5 px-3 text-[11px] font-medium tracking-wide leading-tight"
      style={{
        background:
          "linear-gradient(180deg, #e74c3c 0%, #8b1a1a 40%, #a52a2a 60%, #c0392b 80%, #e74c3c 100%)",
        boxShadow: "0 2px 8px rgba(139, 26, 26, 0.5)",
      }}
    >
      <div>2026 Limited Series launched.</div>
      <div>Available until {formatted}</div>
    </div>
  );
}
