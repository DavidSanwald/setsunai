import Pad from './Pad'
import styled , { css } from "styled-components"

const colours = {
    0: '#FF5335',
    1: '#B29C85',
    2: '#306E73',
    3: '#3B424C',
    4: '#1D181F'
}

const KlingPad = styled(Pad)`
  background-color: ${props.theme[kling]};
`;

export default KlingPad;
