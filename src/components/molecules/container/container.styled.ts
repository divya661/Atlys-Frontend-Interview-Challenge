import styled from "@emotion/styled";

import { ContainerProps } from "./Container";

const StyledContainer =
  styled.div <
  Required <
  ContainerProps >>
    `
  box-sizing: border-box;
  display: ${({ display }) => display};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : "white")};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
  margin-top: ${({ marginY }) => marginY};
  margin-bottom: ${({ marginY }) => marginY};
  margin-bottom: ${({ marginY }) => marginY};
  margin-left: ${({ marginX }) => marginX};
  margin-right: ${({ marginX }) => marginX};

  ${({ display, flexDirection, justifyContent, alignItems }) =>
    display === "flex" &&
    `
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-shrink: 0;
  `}
`;

export { StyledContainer };
