import { useCycle} from 'framer-motion';
import { Navigation } from './nav';
import { MenuToggle } from './toggle';
import { Nav, NavBar } from './headerStyle';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 40px) 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export default function HambugerBar() {
  const [isOpen, toggleOpen] = useCycle(false,true);

  return(
    <>
      <Nav
      initial={false}
      animate={isOpen ? "open" :"closed"}
      custom="100%"
      >
        <NavBar variants={sidebar}/>
        <Navigation/>
        <MenuToggle toggle={() => toggleOpen()}/>
      </Nav>
    </>
  );
}