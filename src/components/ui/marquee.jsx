export default function Marquee({
  items
}) {
  return (
    <div
      className="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-bw text-text font-base">
      <div className="animate-marquee whitespace-nowrap">
        {items?.map((item) => {
          return (
            <span key={item} className="mx-4 text-base">
              {item}
            </span>
          );
        })}
      </div>
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap text-base">
        {items?.map((item) => {
          return (
            <span key={item} className="mx-4 text-base">
              {item}
            </span>
          );
        })}
      </div>
      
      {/* must have both of these in order to work */}
    </div>
  );
}