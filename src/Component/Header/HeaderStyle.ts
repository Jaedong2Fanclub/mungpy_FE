import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.nav)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  z-index: 1;
`;

export const NavBar = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: #fef7ff;
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
  height: 20px;
  flex: 1;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 50px;
  height: 50px;
  background: transparent;
`;
