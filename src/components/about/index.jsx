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
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/57348183_1259549730864782_44313960731639808_n.jpg?_nc_cat=104&ccb=2&_nc_sid=e3f864&_nc_ohc=7N-1iSUj5BUAX_tp6Rw&_nc_oc=AQkb1gmOdF9TljnmNNlSQoZY58q9QMYiloD7akq_ASKsHlbP7qsqP-PD1scfjqHk9jY&_nc_ht=scontent.fsgn5-5.fna&oh=d9e836ef7ae389518601b8c0b6065455&oe=5FF5EFD3"
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
              <Text> behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </Text>
              <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
