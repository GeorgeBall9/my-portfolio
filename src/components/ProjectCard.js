import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.padding};
  margin: ${({ theme }) => theme.spacing.margin};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectCard = ({ title, description, image }) => (
  <Card whileHover={{ scale: 1.05 }}>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </Card>
);

export default ProjectCard;
