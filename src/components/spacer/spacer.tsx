import styled from 'styled-components'

type spacerProps = {
    space: number;
}

const SpacerStyled = styled.div<spacerProps>`
  ${({ space }) => space && `height: ${space}px;`}
`;

export default function Spacer({space}: spacerProps) {
  return <SpacerStyled space={space}/>
}