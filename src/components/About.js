import React from 'react';
import styled from 'styled-components';
import pic from '../assets/images/sasanda.jpg';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: left;
`;


const Heading = styled.h1`
  font-size: 28px;
  margin-bottom: 15px;
`;

const SubHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const ContactInfo = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
`;

const RoundedImage = styled.img`
  border-radius: 50%;
  max-width: 150px;
  margin-top: 20px;
`;

const About = () => {
  return (
    <AboutContainer>
      <Heading>About the Company</Heading>
      <Paragraph>
        At SS Tours, we are passionate about travel and exploration. Our mission is to connect travelers with unique experiences and unforgettable adventures in the beautiful island of Sri Lanka. Whether you’re looking for pristine beaches, ancient temples, lush tea plantations, or thrilling wildlife encounters, we’ve got you covered. Our platform serves as a bridge between travelers and our esteemed partners. We believe in fostering a mutually beneficial relationship where everyone can thrive.
      </Paragraph>

      <SubHeading>Our Mission</SubHeading>
      <Paragraph>
        "To be the leading online platform that connects travelers with a diverse network of tour guides, providing exceptional and personalized travel experiences that enrich and inspire the wanderlust of our customers."
      </Paragraph>

      <SubHeading>Our Vision</SubHeading>
      <Paragraph>
        At SS Tours, our mission is to revolutionize the way travelers explore destinations by seamlessly connecting them with local hospitality, expertise, and services. We are committed to empowering travelers to create unforgettable memories, promoting sustainable tourism practices, and supporting the growth and success of local businesses and communities. Through our user-friendly website and innovative technology, we strive to be the go-to platform for travelers seeking authentic, immersive, and tailor-made experiences that unlock the true essence of every destination.
      </Paragraph>

      <SubHeading>Contact</SubHeading>
      <RoundedImage src={pic} alt="Sasanda Manahara" />
      <ContactInfo>
        
     
        Sasanda Manahara<br />
        Contact : <Link href="mailto:sasanda@sstours.lk">sasanda@sstours.lk</Link>
      </ContactInfo>
      
    </AboutContainer>
  );
}

export default About;
