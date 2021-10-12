import styles from './about.module.scss';

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {

  const contents = [
    { name: "About", description: "The principles about our toolkits"},
    { name: "Color", description: "Name and usage rules for applying it across the systems"},
    { name: "components", description: "Components we've built and are working on"},
    { name: "help", description: "Have a question or something to contribute? Let us know!"}
  ]
  return (
    <div>
      <h1>About</h1>
      <hr/>
      <div className={styles.content}>
        {contents.map((x) => (
          <div className={styles.card}>
            <h3>{x.name}</h3>
            <p>{x.description}</p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default About;
