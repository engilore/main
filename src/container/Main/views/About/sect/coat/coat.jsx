import {
    Section,
    Header,
    Title,
    Subtitle,
    CoatBackground,
    Contain,
    CoatLabels,
    CoatLabel
} from './coatStyle'

import skylabel from '../../../../../../assets/coat/sky.svg'
import groundlabel from '../../../../../../assets/coat/ground.svg'
import pillarlabel from '../../../../../../assets/coat/pillar.svg'
import starlabel from '../../../../../../assets/coat/star.svg'


const Coat = () => {
  return (
    <>
      <Header>
        <Title>The Aegis of the Noble Will</Title>
        <Subtitle>
          Behold the emblem that mirrors the path to the life of highest aspiration. The pale expanse above speaks of the force of sincerity and the untouched virtue, 
          serving as the bedrock of our deeds and the compass when we seek to join ourselves with a woman, a thought, a craft, or a quest. The field of deep red tells 
          of the necessary offerings, the blood-price of victory, victories won only through sacrifices that bear worth. Two pillars rise—emblems of the dual paths 
          we tread, a testament to the idiosyncratic journey we must navigate. They remind us to cast aside contrition when the threshold is crossed, and to stand 
          firm in defiance, upholding the essence of who we are. At the center, a star burns bright, the symbol of our unyielding search for knowledge and the flame 
          of passion that drives us. This is the voice that urges us to live with intent, with honor, and with an unshakeable will.
        </Subtitle>
      </Header>
      <Section>
        <CoatBackground />
        <Contain>
          <CoatLabels>
            <CoatLabel src={skylabel} alt="Sky Label" />
            <CoatLabel src={groundlabel} alt="Ground Label" />
            <CoatLabel src={pillarlabel} alt="Pillar Label" />
            <CoatLabel src={starlabel} alt="Star Label" />
          </CoatLabels>
        </Contain>
      </Section>
    </>
  )
}

export default Coat