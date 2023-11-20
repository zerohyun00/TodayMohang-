import Icon from "../assets/images/logos.png";
import Title from "../components/Title";

function Layout({ children, title }) {
  return (
    <section className="flex flex-col px-[22px] py-4 h-[100vh]">
      <img
        src={Icon}
        alt="logo"
        className=" object-cover w-[30px] h-[30px] mt-[10px]"
      />
      <Title title={title} />
      {children}
    </section>
  );
}

export default Layout;
