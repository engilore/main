import styled from 'styled-components';

const Animation3 = () => {
  return (
    <SvgBackground>
            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <radialGradient id="Gradient1" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(92, 164, 169, 1)" />
                        <stop offset="100%" stopColor="rgba(92, 164, 169, 0)" />
                    </radialGradient>
                    <radialGradient id="Gradient2" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(79, 0, 11, 1)" />
                        <stop offset="100%" stopColor="rgba(79, 0, 11, 0)" />
                    </radialGradient>
                    <radialGradient id="Gradient3" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(237, 240, 218, 1)" />
                        <stop offset="100%" stopColor="rgba(237, 240, 218, 0)" />
                    </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="40" fill="url(#Gradient1)">
                    <animate attributeName="r" dur="30s" values="40;20;40" repeatCount="indefinite" />
                    <animate attributeName="cx" dur="30s" values="50;20;80;50" repeatCount="indefinite" />
                    <animate attributeName="cy" dur="30s" values="50;20;80;50" repeatCount="indefinite" />
                </circle>
                <circle cx="50" cy="50" r="35" fill="url(#Gradient2)">
                    <animate attributeName="r" dur="35s" values="35;10;35" repeatCount="indefinite" />
                    <animate attributeName="cx" dur="35s" values="50;80;20;50" repeatCount="indefinite" />
                    <animate attributeName="cy" dur="35s" values="50;80;20;50" repeatCount="indefinite" />
                </circle>
                <circle cx="50" cy="50" r="30" fill="url(#Gradient3)">
                    <animate attributeName="r" dur="40s" values="30;5;30" repeatCount="indefinite" />
                    <animate attributeName="cx" dur="40s" values="50;10;90;50" repeatCount="indefinite" />
                    <animate attributeName="cy" dur="40s" values="50;10;90;50" repeatCount="indefinite" />
                </circle>
            </svg>
        </SvgBackground>
  )
}

export default Animation3;

const SvgBackground = styled.div`
  background-color: var(--bg-black);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }
`