import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  color: steelblue;
`;

export const Header = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(() => false);

  return (
    <>
      <div>
        <Button
          onClick={(event) => {
            {
              setHamburgerMenuOpen(!hamburgerMenuOpen);
            }
          }}
        >
          Toggle hamburger
        </Button>

        {Boolean(hamburgerMenuOpen) && (
          <>
            <div>I am hamburger menu</div>
          </>
        )}
      </div>
    </>
  );
}
