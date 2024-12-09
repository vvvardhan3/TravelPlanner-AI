import { Button } from "../button";

function Header() {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center">
      <h1 className="text-3xl font-bold tracking-tighter px-2 text-[#0866ff] cursor-pointer">
        Planopedia
      </h1>
      <div className="px-2">
        <Button>Sign In</Button>
      </div>
    </div>
  );
}

export default Header;
