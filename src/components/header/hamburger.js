export default function HamburgerMenu({ isOpen }) {
  return (
    <>
      <div className="hamburger place-content-around flex md:hidden w-7 h-7 my-2 pl-2 z-10">
        <div className="burger flex-nowrap w-7 h-1 bg-black" />
        <div className="burger flex-nowrap w-7 h-1 bg-black" />
        <div className="burger flex-nowrap w-7 h-1 bg-black" />
      </div>

      <style jsx>{`
        .hamburger {
          flex-flow: column nowrap;
        }
      `}</style>
    </>
  );
}
