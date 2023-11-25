import NavbarMenu from "./NavbarMenu";
import TwitterIcon from "@mui/icons-material/Twitter";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import InstagramIcon from "@mui/icons-material/Instagram";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DropDown from "./Dropdown";

const Navbar = () => {
  return (
    <div className="bg-black py-6 text-white px-6 flex justify-between items-center pr-10 ">
      <div className="lg:hidden">
        <DropDown />
      </div>
      <div className="hidden lg:block">
        {" "}
        <NavbarMenu />
      </div>

      <span className="text-3xl">Brava</span>
      <div className="flex gap-2">
        <div className="hidden flex gap-x-4 lg:block">
          <span className="font-bold">become an affiliate</span>
          <span>
            <TwitterIcon />
          </span>
          <span>
            <MusicNoteIcon />
          </span>
          <span>
            <InstagramIcon />
          </span>
        </div>
        <div className="flex gap-x-4 pl-2">
          <span>
            <PermIdentityIcon />
          </span>
          <span>
            <SearchIcon />
          </span>
          <span>
            <ShoppingBagIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
