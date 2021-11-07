import Container from '../components/Container';

export default function Illustration() {
  const Section = ({ children }) => {
    const classes = `mt-12 my-20`;

    return <section className={classes}>{children}</section>;
  };
  const H2 = ({ children }) => {
    return <h2 className='text-3xl sm:text-4xl font-bold mb-6'>{children}</h2>;
  };
  return (
    <Container
      title='Blog – Jérémy Gautrais'
      description='Thoughts programming, tech, and my personal life.'
    >
      <Section>
        <H2>Blog</H2>
      </Section>
    </Container>
  );
}
