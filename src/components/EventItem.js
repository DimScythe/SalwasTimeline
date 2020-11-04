import { BoxWrapper } from "../styles";
const EventItem = (props) => {
  return (
    <BoxWrapper>
      <h1>{props.eventObject.name}</h1>
      <p>{props.eventObject.description}</p>
      <img src={props.eventObject.images} />
    </BoxWrapper>
  );
};

export default EventItem;
