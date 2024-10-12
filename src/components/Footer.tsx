import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { RiVkLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="min-h-[420px] bg-gradient-to-b from-background-lightest to-background-light px-16 py-36">
      <div className="flex justify-between">
        <div className="flex flex-col gap-28">
          <div className="flex flex-col gap-8">
            <h3 className="text-4xl font-serif text-heading-dark tracking-widest">
              Мы в соцсетях
            </h3>
            <div className="flex gap-2 text-heading-dark items-center *:hover:*:opacity-90">
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
          <div className="text-heading-dark">
            <h4 className="mb-4 font-sans-light">
              Подписывайтесь и получайте скидки и бонусы
            </h4>
            <form className="flex gap-4 items-center">
              <input
                type="email"
                placeholder="E-mail"
                className="rounded-[14px] py-2 px-4 border border-heading-dark focus:outline-none 
                placeholder:text-heading-dark text-heading-dark
                  font-sans-light"
              />
              <button
                className="rounded-[14px] bg-button text-heading-dark
               uppercase font-sans-light tracking-widest border border-heading-dark
               hover:bg-button-hover
                hover:shadow-[inset_0_0_3px_3px_rgba(43,230,96,0.36),0_0_7px_4px_rgba(43,230,96,0.36)]
                px-6 py-2"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-4xl font-serif text-heading-dark tracking-widest">
            Магазин
          </h3>
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
          <h3 className="text-4xl font-serif text-heading-dark tracking-widest">
            Инфо
          </h3>
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
    </footer>
  );
};

export default Footer;
