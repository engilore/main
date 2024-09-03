import styled from 'styled-components';

const Animation2 = () => {
  return (
    <SvgBackground>
            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <radialGradient id="Gradient1" cx="50%" cy="50%" r="50%">
                        <animate attributeName="r" dur="35s" values="50%;0%;50%" repeatCount="indefinite" />
                        <stop offset="0%" stopColor="rgba(92, 164, 169, 1)" />
                        <stop offset="100%" stopColor="rgba(92, 164, 169, 0)" />
                    </radialGradient>
                    <radialGradient id="Gradient2" cx="50%" cy="50%" r="50%">
                        <animate attributeName="r" dur="28s" values="0%;50%;0%" repeatCount="indefinite" />
                        <stop offset="0%" stopColor="rgba(79, 0, 11, 1)" />
                        <stop offset="100%" stopColor="rgba(79, 0, 11, 0)" />
                    </radialGradient>
                    <radialGradient id="Gradient3" cx="50%" cy="50%" r="50%">
                        <animate attributeName="r" dur="32s" values="25%;0%;25%" repeatCount="indefinite" />
                        <stop offset="0%" stopColor="rgba(237, 240, 218, 1)" />
                        <stop offset="100%" stopColor="rgba(237, 240, 218, 0)" />
                    </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="40" fill="url(#Gradient1)">
                    <animate attributeName="cx" dur="30s" values="50;20;50" repeatCount="indefinite" />
                    <animate attributeName="cy" dur="30s" values="50;80;50" repeatCount="indefinite" />
                </circle>
                <circle cx="50" cy="50" r="40" fill="url(#Gradient2)">
                    <animate attributeName="cx" dur="25s" values="50;80;50" repeatCount="indefinite" />
                    <animate attributeName="cy" dur="25s" values="50;20;50" repeatCount="indefinite" />
                </circle>
                <rect x="10" y="10" width="80" height="80" fill="url(#Gradient3)">
                    <animate attributeName="x" dur="28s" values="10;40;10" repeatCount="indefinite" />
                    <animate attributeName="y" dur="28s" values="10;60;10" repeatCount="indefinite" />
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="28s" repeatCount="indefinite" />
                </rect>
            </svg>
        </SvgBackground>
  )
}

export default Animation2;

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