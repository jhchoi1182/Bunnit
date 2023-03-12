import { CalenderHeader } from "./HeaderParts/HeaderParts";

const Header = () => {
  return (
    <CalenderHeader>
      <CalenderHeader.SpaceBetween>
        <CalenderHeader.prevMonth />
        <CalenderHeader.DateText />
        <CalenderHeader.nextMonth />
      </CalenderHeader.SpaceBetween>
    </CalenderHeader>
  );
};

export default Header;
