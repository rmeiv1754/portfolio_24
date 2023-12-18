import '../styles/menu.css'
import { AnimatePresence, motion } from "framer-motion"

import { Link } from "react-router-dom"
import { routes } from '../routes'


const Menu = ({ handleFourthItemClick }) => {
  const handleItemClick = () => {
    handleFourthItemClick();
  };


  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <section className="main_menu">
          <nav className="navbar_menu">
            <p>Coding With Style</p>
          </nav>

          <section className="two_parts">
            <div className="section_left_menu">
              <div className="box_menu">

                <div className="items_menu item_1" onClick={handleItemClick}>
                  <p className="num_item">01</p>
                  <Link to={routes.home} className="menu_link">
                    <h1 className="name_item">Home</h1>
                  </Link>
                </div>

                <div className="items_menu item_2" onClick={handleItemClick}>
                  <p className="num_item">02</p>
                  <Link to={routes.aboutme} className="menu_link">
                    <h1 className="name_item">About me</h1>
                  </Link>
                </div>

                <div className="items_menu item_3" onClick={handleItemClick}>
                  <p className="num_item">02</p>
                  <Link to={routes.work} className="menu_link">
                    <h1 className="name_item">Work</h1>
                  </Link>
                </div>

                <div className="items_menu item_4" onClick={handleItemClick}>
                  <p className="num_item">03</p>
                  <Link to={routes.contact} className="menu_link">
                    <h1 className="name_item">Contact</h1>
                  </Link>
                </div>


              </div>
            </div>

            <div className="section_right_menu">

              <div className="box_text_right">
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut elementum cursus lectus, et finibus massa posuere efficitur.
                  Nullam mi lectus, ultrices sed magna quis, volutpat dictum turpis
                </p>
                <h3>Subtitle information</h3>
              </div>
            </div>
          </section>
        </section>
      </motion.div>
    </AnimatePresence>
  )
}

export default Menu