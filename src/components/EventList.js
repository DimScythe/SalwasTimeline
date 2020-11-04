import { useState } from "react";
import events from "../events";
import { ListWrapper, SlideShowContainer, MySlides } from "../styles";
import EventItem from "./EventItem";

const EventList = () => {
  const [slide, setSlide] = useState(0);

  const back = () => {
    if (slide === 0) setSlide(events.length - 1);
    else setSlide(slide - 1);
  };

  const next = () => {
    if (slide === events.length - 1) setSlide(0);
    else setSlide(slide + 1);
  };

  return (
    <SlideShowContainer>
      <a class="prev" onClick={back}>
        &#10094;
      </a>

      <EventItem eventObject={events[slide]} />

      <a class="next" onClick={next}>
        &#10095;
      </a>
    </SlideShowContainer>
  );
  // style={styles.ListWrapper}
};

export default EventList;
