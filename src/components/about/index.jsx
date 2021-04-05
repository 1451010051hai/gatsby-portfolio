import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/57348183_1259549730864782_44313960731639808_n.jpg?_nc_cat=104&ccb=2&_nc_sid=e3f864&_nc_ohc=7N-1iSUj5BUAX_tp6Rw&_nc_oc=AQkb1gmOdF9TljnmNNlSQoZY58q9QMYiloD7akq_ASKsHlbP7qsqP-PD1scfjqHk9jY&_nc_ht=scontent.fsgn5-5.fna&oh=d9e836ef7ae389518601b8c0b6065455&oe=5FF5EFD3" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              {/* <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" /> */}
              <img 
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/57348183_1259549730864782_44313960731639808_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=e3f864&_nc_ohc=1xecqertnT0AX9uGdPC&_nc_oc=AQnI09YgqVuVDH-Zxbzsvt6sXE_ULeAqSA4XIKQf2_-GdBiD5Tc0EfKA_E3eFhhIs7M&_nc_ht=scontent.fsgn2-5.fna&oh=0b572e8780d3293bef841b58b55b196a&oe=608ED961"
               alt="user photo" 
               maxWidth="500" 
               height="600" 
               style={{borderRadius:5}}/>
               
              <SubTitle> Mobile Developer</SubTitle>
            </div> 
            <div>
              <Title> Hello, I’m Hai </Title>
              <Text> I'm a Mobile Developer from <b className="text-primary lined-link">Hồ Chí Minh</b> living in 11 district. </Text>
              <Text> I love working with modern technologies, building and designing awesome projects. I prefer minimalistic & clean designs with strong user experience.</Text>
              <Text>I always try my best and focus on the products I make. I've always been proud of that ("Children born of code"). Be positive, be happy every day that will create success for the future.
              </Text>
              <ResumeButton href="Vo-Thanh-Hai.pdf" target="_blank"> Download CV </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
