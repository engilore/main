import { useState } from 'react'
import { FaGithub, FaYoutube, FaStackOverflow } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import badge from '../../../../../../assets/coat/badge.svg'
import lalo from '../../../../../../assets/lalo.jpg'

import {
    Socials,
    SocialLink,
    Photo,
    ProfileImage,
    Badge,
    ActivityStatus,
    Title,
    Description,
    Section,
    ProfileCard,
    Name,
    Pronunciation,
    DetailsCard,
    List,
    ListItem
} from './heroStyle'


const SocialIcons = ({ username }) => (
  <Socials>
    <SocialLink href='https://github.com/' target="_blank">
      <FaGithub size={25} />
    </SocialLink>
    <SocialLink href='https://stackoverflow.com/users/' target="_blank">
      <FaStackOverflow size={25} />
    </SocialLink>
    <SocialLink href='https://youtube.com/' target="_blank">
      <FaYoutube size={25} />
    </SocialLink>
    <SocialLink href='https://twitter.com/' target="_blank">
      <FaXTwitter size={25} />
    </SocialLink>
  </Socials>
)

const Profile = ({ isActive }) => {
  const [loadCompleted, setLoadCompleted] = useState(false);

  return (
    <Photo>
      <ProfileImage
        src={lalo}
        alt="Lalo Blanc"
        onLoad={() => setLoadCompleted(true)}
        $loadCompleted={loadCompleted}
      />
      <Badge src={badge} alt="Engilore Coat of Arms" />
      <ActivityStatus $isActive={isActive} />
    </Photo>
  )
}

const InfoSection = ({ title, description, listItems }) => (
  <div>
    <Title>{title}</Title>
    <Description>{description}</Description>
    {listItems && (
      <List>
        {listItems.map(item => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
    )}
  </div>
)

const Hero = () => {
  const isActive = true;
  const researchTopics = [
    "Electromagnetism",
    "Optical Physics",
    "Photonics",
    "Aerospace",
    "Robotics",
    "Philosophical Methodologies",
    "Epistemology",
  ]
  const hobbies = [
    "Carpentry",
    "Gardening",
    "Sculpting",
    "Calisthenics"
  ]
  const tools = [
    "C/C++",
    "Python",
    "OOP",
    "Embedded Systems",
    "Data Analytics",
    "Simulation",
    "ML & AI",
    "Mathematics"
  ]
  const languages = [
    "English | Native",
    "Spanish | Fluent",
    "Russian | Conversational",
    "French | Comprehension"
  ]

  return (
    <Section>

      <ProfileCard>
        <Profile isActive={isActive} />
        <Name>Lalo Blanc</Name>
        <Pronunciation>(Pronunciation: Lah-lo Blah-nk)</Pronunciation>
        <SocialIcons />
      </ProfileCard>

      <DetailsCard>
        <InfoSection title="Research" 
        description="My research endeavors are primarily anchored in the domains of Physics, Engineering, Philosophy & Literature, with a 
        keen interest in exploring their theoretical underpinnings and practical applications. At the core of my investigations 
        is the ambition to bridge the gap between abstract theoretical concepts and tangibility."
        listItems={researchTopics} 
        />
        <InfoSection title="Hobbies"
        description="Due to my youth, my range of interests is continually expanding, a trend I anticipate will persist. At the core, these 
        various activities connect back to my fundamental passions for physics and philosophy—I suppose everything relates to these central 
        themes, though for me it is probably more acutely apparent."
        listItems={hobbies}
        />
        <InfoSection title="My Business"
        description="I'm currently working on establishing my business, Nebulei, which initially focuses on innovative sensory integration 
        solutions. At Nebulei, I am dedicated to pioneering advanced technologies that seamlessly integrate sensory data across various 
        applications, from IoT to robotics. While sensory integration forms our starting point, my vision extends to a 
        broad spectrum of applications, aiming to transform a diverse array of industries. My mission is to create a robust platform that 
        not only enhances device interoperability and performance but also sets the stage for future expansions into other sophisticated 
        technological domains. As we lay the groundwork with our core sensory technologies, I am committed to fostering a community 
        around our open-source framework, encouraging collaboration and innovation to explore and realize the vast potential of integrated 
        systems."
        listItems={tools} 
        />
        <InfoSection title="Languages"
        listItems={languages} 
        />
      </DetailsCard>

    </Section>
  )
}

export default Hero