import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.nav)<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  z-index: 1;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
`;

export const NavBar = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: #fff8f3;
`;

export const MenuToggleWrapp = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2; // ✅ Nav보다 위에 있어야 함
`;

export const Ul = styled(motion.ul)`
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;
`;

export const Li = styled(motion.li)`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Text = styled.div`
  border-radius: 5px;
  width: 200px;
  height: 30px;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 15px;
  height: 40px;
  background: transparent;
`;
