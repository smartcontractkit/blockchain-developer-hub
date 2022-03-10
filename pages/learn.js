import LearnCrypto from '@/sections/LearnCrypto';
import LearnHero from '@/sections/LearnHero';
import learnData from '@/data/learn.yaml';

function Learn() {
  const { resources } = learnData;
  // const { id, name, logo, courses, tutorials } = resources[0];

  return (
    <div>
      <LearnHero />
      {resources.map(({ id, name, logo, courses, tutorials }) => (
        <LearnCrypto
          key={id}
          id={id}
          name={name}
          logo={logo}
          logoAlt={name + ' Logo'}
          courses={courses}
          tutorials={tutorials}
        />
      ))}
      {/* <LearnCrypto id={id} name={name} logo={logo} logoAlt={name + ' Logo'} courses={courses} tutorials={tutorials} /> */}
    </div>
  );
}

export default Learn;
