import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/carousel.css';

import c1_img1 from "../assets/img/carousel_img/img_1.jpg"
import c1_img2 from "../assets/img/carousel_img/img_2.jpg"

const cardsData = [
    {
        id: 1,
        title_1: "Trabajo 1",
        subtitle_1: "SubTitulo 1",
        img_1: c1_img1,

        img_2: c1_img2,
        title_2: "Titulo 2",
        subtitle_2: "SubTitulo 2",

        title_3: "Titulo 3",
        text: "Texto que ira dentro del cuadrado blanco"
    },
    {
        id: 2,
        title_1: "Trabajo 2",
        subtitle_1: "SubTitulo 1",
        img_1: c1_img1,

        img_2: c1_img2,
        title_2: "Titulo 2",
        subtitle_2: "SubTitulo 2",

        title_3: "Titulo 3",
        text: "Texto que ira dentro del cuadrado blanco"
    },
    {
        id: 3,
        title_1: "Trabajo 3",
        subtitle_1: "SubTitulo 1",
        img_1: c1_img1,

        img_2: c1_img2,
        title_2: "Titulo 2",
        subtitle_2: "SubTitulo 2",

        title_3: "Titulo 3",
        text: "Texto que ira dentro del cuadrado blanco"
    },
];

const Carousel = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handleNext = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    };

    const cardsToShow = [...cardsData.slice(currentCardIndex), ...cardsData.slice(0, currentCardIndex)];

    return (
        <div className="carousel_page">
            <div className="carousel_box">
                {cardsToShow.map((card, index) => (
                    <AnimatePresence key={index}>
                        <motion.div
                            className='card'
                            className={`card ${index === 0 ? 'main_card' : 'preview_card'}`}
                            initial={{ opacity: 0, x: index === 0 ? '0%' : '100%' }}
                            animate={{ opacity: 1, x: '0%' }}
                            exit={{ opacity: 0, x: index === 0 ? '100%' : '-100%' }}
                            transition={{ duration: 0.5 }}
                            key={currentCardIndex}
                        >
                            {index === 0 ? (
                                <motion.div
                                    className="card_box"
                                    
                                >
                                    <section className="card_left">
                                        <div className="img2_box">
                                            <img src={card.img_2} className="img_2" />
                                        </div>
                                        <div className="title_left_box">
                                            <h2 className="title_left tl_1">{card.title_2}</h2>
                                            <h2 className="title_left tl_2">{card.subtitle_2}</h2>
                                        </div>
                                    </section>
                                    <section className="card_middle">
                                        <div className="titles_box">
                                            <h1 className="title_middle">{card.title_1}</h1>
                                            <h1 className="title_middle">{card.subtitle_1}</h1>
                                        </div>
                                        <div className="img1_box">
                                            <img src={card.img_1} className="img_1" />
                                        </div>
                                    </section>
                                    <section className="card_right">
                                        <button onClick={handleNext}
                                            className="next_button"
                                        >--></button>
                                        <h1 className="title_card_right">{card.title_3}</h1>
                                        <div className="text_box">
                                            <p>{card.text}</p>
                                        </div>
                                    </section>
                                </motion.div>
                            ) : (
                                <motion.div
                                    
                                >
                                    <div className="titles_box">
                                        <h1 className="title_middle">{card.title_1}</h1>
                                        <h1 className="title_middle">{card.subtitle_1}</h1>
                                    </div>
                                    <div className="img1_box">
                                        <img
                                            src={card.img_1}
                                            className='img_1'
                                            alt="card"
                                        />
                                    </div>

                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                ))}
            </div>

        </div>
    );
};

export default Carousel;