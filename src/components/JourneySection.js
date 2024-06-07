import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.padding};
`;

const JourneySection = () => (
  <Element name="journey">
    <Section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>My Journey</h2>
        {/* Add your project cards or content here */}
      </motion.div>
    </Section>
  </Element>
);

export default JourneySection;
