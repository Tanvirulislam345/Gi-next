import React from "react";

import { CarouselProvider } from "pure-react-carousel";
import Ocean from "../../assets/phone1.png";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
    Card,
    ButtonContainer,
    SliderContainer,
    StyledSlide,
    StyledSlider,
    BackButton,
    NextButton,
    CardText,
    CardImage,
    CardButton,
    CardButtonBlue
} from "./styles";

const data = [
    {
        title: "Card 1",
        cardText: "here is some random text",
        src: Ocean
    },
    {
        title: "Card 2",
        cardText: "here is some random text"
    },
    {
        title: "Card 3",
        cardText: "here is some random text",
        src: Ocean
    },
    {
        title: "Card 4",
        cardText: "here is some random text"
    },
    {
        title: "Card 5",
        cardText: "here is some random text",
        src: Ocean
    },
    {
        title: "Card 6",
        cardText: "here is some random text"
    },
    {
        title: "Card 7",
        cardText: "here is some random text",
        src: Ocean
    },
    {
        title: "Card 8",
        cardText: "here is some random text"
    },
    {
        title: "Card 9",
        cardText: "here is some random text",
        src: Ocean
    },
    {
        title: "Card 10",
        cardText: "here is some random text"
    }
];

const CardCarousel = () => {
    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={data.length}
            visibleSlides={3}
            step={3}
        >
            <ButtonContainer>
                <BackButton>
                    +
                </BackButton>
                <NextButton>
                    ++
                </NextButton>
            </ButtonContainer>
            <SliderContainer>
                <StyledSlider classNameAnimation="animating">
                    {data.map((item, index) => (
                        <StyledSlide
                            index={index}
                            classNameHidden="hidden"
                            classNameVisible="visible"
                        >
                            <Card>
                                <CardImage backgroundImage={item.src} />
                                <CardText>
                                    <h2>{item.title}</h2>
                                    <h3>{item.cardText}</h3>
                                </CardText>
                                <CardButton />
                                <CardButtonBlue />
                            </Card>
                        </StyledSlide>
                    ))}
                </StyledSlider>
            </SliderContainer>
        </CarouselProvider>
    );
};

export default CardCarousel;
