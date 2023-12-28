import InternalThinkHeader from "./think";

const InternalHeader = () => {
  return <div />;
};

const Header = InternalHeader as typeof InternalHeader & {
  Think: typeof InternalThinkHeader;
};
Header.Think = InternalThinkHeader;

export default Header;
