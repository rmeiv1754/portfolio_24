import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import "../styles/tabs.css"

const tabs = [
    {
        name: 'tab1',
        label: 'Tab 1',
        render: () => {
            return (
                <div>
                    <h2>Title 0</h2>
                    <p >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt eveniet asperiores beatae cumque quae
                        repudiandae sequi expedita eum architecto hic. Quidem dolores quaerat nemo pariatur modi aspernatur eum
                        blanditiis repellat?
                    </p>
                </div>
            );
        },
    },
    {
        name: 'tab2',
        label: 'Tab 2',
        render: () => {
            return (
                <div>
                    <h2>Title 1</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt eveniet asperiores beatae cumque quae
                        repudiandae sequi expedita eum architecto hic. Quidem dolores quaerat nemo pariatur modi aspernatur eum
                        blanditiis repellat?
                    </p>
                </div>
            );
        },
    },
    {
        name: 'tab3',
        label: 'Tab 3',
        render: () => {
            return (
                <div>
                    <h2>Title 2</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt eveniet asperiores beatae cumque quae
                        repudiandae sequi expedita eum architecto hic. Quidem dolores quaerat nemo pariatur modi aspernatur eum
                        blanditiis repellat?
                    </p>
                </div>
            );
        },
    },
    {
        name: 'tab4',
        label: 'Tab 4',
        render: () => {
            return (
                <div>
                    <h2>Title 3</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt eveniet asperiores beatae cumque quae
                        repudiandae sequi expedita eum architecto hic. Quidem dolores quaerat nemo pariatur modi aspernatur eum
                        blanditiis repellat?
                    </p>
                </div>
            );
        },
    },
];

const tabContentVariants = {
    initial: {
      opacity: 0,
      x: "100%",
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration: .3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: .3,
        ease: "easeInOut",
      },
    },
  };

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const handleClick = (e, tab) => {
        e.preventDefault();
        setActiveTab(tab);
    };

    const isSelected = (tab) => activeTab.name === tab.name;

    return (
        <div className="tab_wrapper">
            <div className="tab_header">
                {tabs.map((tab) => (
                    <div
                        key={tab.name}
                        className={[isSelected(tab) ? "tab_item selected" : "tab_item"].join(' ')}
                    >
                        <a href='#' onClick={(e) => handleClick(e, tab)}>
                            {tab.label}
                        </a>

                        {isSelected(tab) && (
                            <motion.div layoutId='indicator' className="indicator" />
                        )}
                    </div>
                ))}
            </div>

            <div className="tab_content">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeTab.name || 'empty'}
                        variants={tabContentVariants}
                        initial='initial'
                        animate='enter'
                        exit='exit'
                    >
                        {activeTab && activeTab.render()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Tabs;
