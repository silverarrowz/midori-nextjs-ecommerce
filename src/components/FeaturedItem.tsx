interface FeaturedItemProps {
  title: string;
  price: number;
  image: string;
  amount?: string;
}

const FeaturedItem = ({ image, price, title, amount }: FeaturedItemProps) => {
  return (
    <div className="flex flex-col gap-6 sm:max-w-48 md:max-w-none items-center z-10">
      <div
        className="max-w-[14rem] xs:max-w-[20rem] 
       h-64 sm:max-w-none sm:h-32 lg:h-48
        transition-transform duration-300 hover:scale-105 "
      >
        <img
          src={image}
          alt={title}
          className="object-cover max-h-full w-full
            transition-transform duration-300 hover:scale-105 cursor-pointer
            "
        />
      </div>

      <div className="flex flex-col items-center gap-4">
        <h3 className="text-2xl sm:text-xl md:text-2xl leading-none tracking-widest font-serif-bold">
          {title}
        </h3>
        {amount && (
          <p className="font-sans-light text-sm opacity-70">{amount}</p>
        )}
        <p className="font-sans-light">{price} руб.</p>
        <button
          className="rounded- border border-foreground
            bg-transparent hover:bg-button/40
            hover:shadow-[inset_0_0_4px_2px_rgba(43,230,96,0.36),0_0_6px_2px_rgba(43,230,96,0.36)]
            px-9 sm:px-6 md:px-12 py-2 mb-2 uppercase font-sans-light tracking-widest"
        >
          В корзину
        </button>
      </div>
    </div>
  );
};

export default FeaturedItem;
