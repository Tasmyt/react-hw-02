import { SectionBox, Title } from './Section.styled'

export const Section = ({ title, children }) => (  
    <SectionBox>
        <Title> {title} </Title>
        <>{ children}</>
    </SectionBox>  
);