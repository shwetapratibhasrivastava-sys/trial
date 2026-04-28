export default function Marquee({ items }) {
  return (
    <div className="relative w-full overflow-hidden border-b-2 border-t-2 border-border bg-bw text-text font-base">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="mx-4 text-base">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}