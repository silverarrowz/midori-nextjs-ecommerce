const FeaturedSection = () => {
  return (
    <section
      className="bg-white mt-16 sm:mt-28 md:mt-48 
    lg:mt-4 
    pt-8 pb-8 
    relative overflow-hidden"
    >
      <h2
        className="z-50 text-3xl md:text-4xl lg:text-5xl transition-all 
      text-center font-serif"
      >
        Новинки
      </h2>
      <div
        className="grid grid-cols-1 gap-y-20 sm:grid-cols-3 max-w-[94%] text-center 
      mx-auto py-16"
      >
        <div className="flex flex-col gap-6 items-center z-10">
          <div className="max-w-[18rem] h-64 sm:max-w-none sm:h-32 lg:h-48  transition-transform duration-300 hover:scale-105 ">
            <img
              src="/images/mochi-mandarin.png"
              alt="мандариновый моти"
              className="object-cover max-h-full w-full
              transition-transform duration-300 hover:scale-105 cursor-pointer
              "
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl leading-none tracking-widest font-serif-bold">
              «Мандарин»
            </h3>
            <p className="font-sans-light">220 руб.</p>
            <button
              className="rounded-2xl border border-foreground
              bg-transparent
              hover:shadow-[inset_0_0_4px_2px_rgba(43,230,96,0.36),0_0_6px_2px_rgba(43,230,96,0.36)]
              px-9 py-1 uppercase font-sans-light"
            >
              В корзину
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center z-10">
          <div className="max-w-[18rem] h-64 sm:max-w-none sm:h-32 lg:h-48">
            <img
              src="/images/mochi-pineapple.png"
              alt="ананасовый моти"
              className="object-cover max-h-full w-full
              transition-transform duration-300 hover:scale-105 cursor-pointer
              "
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl leading-none tracking-widest font-serif-bold">
              «Пина Колада»
            </h3>
            <p className="font-sans-light">220 руб.</p>
            <button
              className="rounded-2xl border border-foreground
              bg-transparent
              hover:shadow-[inset_0_0_4px_2px_rgba(43,230,96,0.36),0_0_6px_2px_rgba(43,230,96,0.36)]
              px-9 py-1 uppercase font-sans-light"
            >
              В корзину
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center z-10">
          <div className="max-w-[18rem] h-64 sm:max-w-none sm:h-32 lg:h-48">
            <img
              src="/images/mochi-pineapple.png"
              alt="ананасовый моти"
              className="object-cover max-h-full w-full
              transition-transform duration-300 hover:scale-105 cursor-pointer
              "
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl leading-none tracking-widest font-serif-bold">
              «Пина Колада»
            </h3>
            <p className="font-sans-light">220 руб.</p>
            <button
              className="rounded-2xl border border-foreground
              bg-transparent
              hover:shadow-[inset_0_0_4px_2px_rgba(43,230,96,0.36),0_0_6px_2px_rgba(43,230,96,0.36)]
              px-9 py-1 uppercase font-sans-light"
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
      {/*      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 2400 800"
        className="absolute -bottom-10 sm:-bottom-12 md:-bottom-20
         lg:-bottom-32 xl:-bottom-36 w-[120%]"
      >
        <g
          fill="hsl(149 64% 89%)"
          transform="matrix(1,0,0,1,7.6488037109375,82.3149642944336)"
        >
          <path
            d="M-10,10C54.58333333333333,15.625,172.91666666666666,42.833333333333336,300,37C427.08333333333337,31.166666666666664,475,-20.5,600,-18C725,-15.5,775,46.291666666666664,900,49C1025,51.708333333333336,1075,-4.791666666666667,1200,-5C1325,-5.208333333333333,1375,48.416666666666664,1500,48C1625,47.583333333333336,1675,-4.5,1800,-7C1925,-9.5,1975,43.5,2100,36C2225,28.5,2285.4166666666665,-118.83333333333333,2400,-43C2514.5833333333335,32.83333333333333,3254.1666666666665,203.54166666666669,2650,400C2045.8333333333335,596.4583333333333,156.25,795.8333333333334,-500,900"
            transform="matrix(1,0,0,1,0,100)"
            opacity="0.15"
          ></path>
          <path
            d="M-10,10C54.58333333333333,15.625,172.91666666666666,42.833333333333336,300,37C427.08333333333337,31.166666666666664,475,-20.5,600,-18C725,-15.5,775,46.291666666666664,900,49C1025,51.708333333333336,1075,-4.791666666666667,1200,-5C1325,-5.208333333333333,1375,48.416666666666664,1500,48C1625,47.583333333333336,1675,-4.5,1800,-7C1925,-9.5,1975,43.5,2100,36C2225,28.5,2285.4166666666665,-118.83333333333333,2400,-43C2514.5833333333335,32.83333333333333,3254.1666666666665,203.54166666666669,2650,400C2045.8333333333335,596.4583333333333,156.25,795.8333333333334,-500,900"
            transform="matrix(1,0,0,1,0,200)"
            opacity="0.29"
          ></path>
          <path
            d="M-10,10C54.58333333333333,15.625,172.91666666666666,42.833333333333336,300,37C427.08333333333337,31.166666666666664,475,-20.5,600,-18C725,-15.5,775,46.291666666666664,900,49C1025,51.708333333333336,1075,-4.791666666666667,1200,-5C1325,-5.208333333333333,1375,48.416666666666664,1500,48C1625,47.583333333333336,1675,-4.5,1800,-7C1925,-9.5,1975,43.5,2100,36C2225,28.5,2285.4166666666665,-118.83333333333333,2400,-43C2514.5833333333335,32.83333333333333,3254.1666666666665,203.54166666666669,2650,400C2045.8333333333335,596.4583333333333,156.25,795.8333333333334,-500,900"
            transform="matrix(1,0,0,1,0,300)"
            opacity="0.53"
          ></path>
          <path
            d="M-10,10C54.58333333333333,15.625,172.91666666666666,42.833333333333336,300,37C427.08333333333337,31.166666666666664,475,-20.5,600,-18C725,-15.5,775,46.291666666666664,900,49C1025,51.708333333333336,1075,-4.791666666666667,1200,-5C1325,-5.208333333333333,1375,48.416666666666664,1500,48C1625,47.583333333333336,1675,-4.5,1800,-7C1925,-9.5,1975,43.5,2100,36C2225,28.5,2285.4166666666665,-118.83333333333333,2400,-43C2514.5833333333335,32.83333333333333,3254.1666666666665,203.54166666666669,2650,400C2045.8333333333335,596.4583333333333,156.25,795.8333333333334,-500,900"
            transform="matrix(1,0,0,1,0,400)"
            opacity="0.82"
          ></path>
          <path
            d="M-10,10C54.58333333333333,15.625,172.91666666666666,42.833333333333336,300,37C427.08333333333337,31.166666666666664,475,-20.5,600,-18C725,-15.5,775,46.291666666666664,900,49C1025,51.708333333333336,1075,-4.791666666666667,1200,-5C1325,-5.208333333333333,1375,48.416666666666664,1500,48C1625,47.583333333333336,1675,-4.5,1800,-7C1925,-9.5,1975,43.5,2100,36C2225,28.5,2285.4166666666665,-118.83333333333333,2400,-43C2514.5833333333335,32.83333333333333,3254.1666666666665,203.54166666666669,2650,400C2045.8333333333335,596.4583333333333,156.25,795.8333333333334,-500,900"
            transform="matrix(1,0,0,1,0,500)"
            opacity="1.00"
          ></path>
        </g>
      </svg> */}
    </section>
  );
};

export default FeaturedSection;
