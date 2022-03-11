import LearnHero from '@/sections/LearnHero';
import data from '@/data/learn.yaml';
import LearnCrypto from '@/sections/LearnCrypto';

function Learn() {
  const { resources } = data;
  return (
    <div>
      <LearnHero />
      <section>
        {resources.map(({ id, name, logo, courses, tutorials }) => (
          <LearnCrypto
            key={id}
            id={id}
            name={name}
            logo={logo}
            logoAlt={`${name} Logo`}
            courses={courses}
            tutorials={tutorials}
          />
        ))}
      </section>
    </div>
  );
}

export default Learn;
