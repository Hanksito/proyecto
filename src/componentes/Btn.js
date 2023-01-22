import { Link } from "react-router-dom";
import styled from "styled-components";

const Btn = ({ pathname, children, to }) => {
  const active = pathname === to ? "on" : "off";

  return (
    <LinkBtn status={active} to={to}>
      {children}
    </LinkBtn>
  );
};
const LinkBtn = styled(Link)`
  color: ${(props) => (props.status === "on" ? "#fff" : "#919191")};
  background-color: transparent;
  font-family: azonix, sans-serif;
  text-decoration: none;
`;
export default Btn;
