import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    color:${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
}
`;

const Title = styled.h1`
  text-align: center;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const AudioContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const BoxWrapper = styled.div`
  margin: 10px;
  border-style: solid;
  border-width: 5px;
  border-color: ${(props) => props.theme.itemBorder};
  border-radius: 5px;
  background-image: url("https://static.vecteezy.com/system/resources/previews/000/274/805/non_2x/awesome-ocean-background-vector.jpg");

  width: 490px;
  height: 490px;
  margin-bottom: 100px;
  img {
    width: 280px;
    height: 260px;
    border-radius: 200px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
  }
  h1 {
    margin-top: 40px;
    text-align: center;
    color: ${(props) => props.theme.dark};
  }

  p {
    margin-top: 30px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 22px;

    font-weight: 600;
    text-align: center;
    color: ${(props) => props.theme.dark};
  }
`;
const SlideShowContainer = styled.div`
  max-width: 518px;
  position: relative;
  margin: auto;

  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const MySlides = styled.div`
  /* display: none; */
`;

export {
  GlobalStyle,
  Title,
  BoxWrapper,
  ListWrapper,
  SlideShowContainer,
  MySlides,
  AudioContainer,
};
