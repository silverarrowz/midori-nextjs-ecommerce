import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { RiVkLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="min-h-[420px] bg-gradient-to-b from-background-lightest via-buttons to-button-hover px-4 py-8 sm:px-16 sm:py-36">
      <div className="flex flex-col gap-y-20 sm:flex-row justify-between">
        <div className="flex flex-col gap-16 sm:gap-28">
          <div className="flex flex-col gap-8">
            <h3 className="text-3xl sm:text-4xl tracking-widest">
              Мы в соцсетях
            </h3>
            <div className="flex gap-2 items-center *:hover:*:opacity-70">
              <Link href={"/"}>
                <FaInstagram size={28} />
              </Link>
              <Link href={"/"}>
                <RiVkLine size={30} />
              </Link>
              <Link href={"/"}>
                <FaSquareTwitter size={28} />
              </Link>
            </div>
          </div>
          <div className="">
            <h4 className="mb-4 font-sans-light">
              Подписывайтесь и получайте скидки и бонусы
            </h4>
            <form className="flex flex-col sm:flex-row gap-2 items-stretch">
              <input
                type="email"
                placeholder="E-mail"
                className="rounded-[14px] py-2 px-4 border border-foreground 
                 placeholder:text-foreground
                focus:outline-none 
              
                  font-sans-light"
              />
              <button
                className="rounded-[14px] bg-button 
             tracking-widest border border-foreground
               hover:bg-transparent hover:italic
                hover:shadow-[inset_0_0_3px_3px_rgba(43,230,96,0.36),0_0_7px_4px_rgba(43,230,96,0.36)]
                px-6 py-2"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>
        <div className="flex  sm:gap-14 justify-between">
          <div className="flex flex-col gap-8">
            <h3 className="text-3xl sm:text-4xl  tracking-widest">Магазин</h3>
            <ul className="flex flex-col gap-2 *:hover:*:opacity-60">
              <li>
                <Link href={"/"}>Моти</Link>
              </li>
              <li>
                <Link href={"/about"}>Матча</Link>
              </li>
              <li>
                <Link href={"/blog"}>Наборы</Link>
              </li>
              <li>
                <Link href={"/contacts"}>Новинки</Link>
              </li>
              <li>
                <Link href={"/contacts"}>Скидки и акции</Link>
              </li>
              <li>
                <Link href={"/contacts"}>Все продукты</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-3xl sm:text-4xl tracking-widest">Инфо</h3>
            <ul className="gap-2 flex flex-col *:hover:*:opacity-60">
              <li>
                <Link href={"/"}>Контакты</Link>
              </li>
              <li>
                <Link href={"/"}>FAQ</Link>
              </li>
              <li>
                <Link href={"/"}>Доставка и возврат</Link>
              </li>
              <li>
                <Link href={"/"}>Политика конфиденциальности</Link>
              </li>
              <li>
                <Link href={"/"}>Работа у нас</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-16">
        &copy; 2024 MiDori. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
