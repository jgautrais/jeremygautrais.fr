import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  const { t } = useTranslation('home');
  const projects = t('projectItems', {}, { returnObjects: true });

  const H3 = ({ children }) => {
    return (
      <h3 className='text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mt-0'>
        {children}
      </h3>
    );
  };

  const Br = (props) => <br {...props} />;

  const ProjectTech = ({ tech }) => {
    let name = null;
    let color = null;
    let bgColor = tech;

    switch (tech) {
      case 'html':
        name = 'HTML';
        color = 'text-color-html';
        break;
      case 'css':
        name = 'CSS';
        color = 'text-color-css';
        break;
      case 'js':
        name = 'JS';
        color = 'text-color-js';
        break;
      case 'sass':
        name = 'Sass';
        color = 'text-color-sass';
        break;
      case 'react':
        name = 'React';
        color = 'text-color-react';
        break;
      case 'nodejs':
        name = 'Node.js';
        color = 'text-color-nodejs';
        break;
      case 'mongo':
        name = 'mongoDB';
        color = 'text-color-mongo';
        break;
      case 'nextjs':
        name = 'Next.js';
        break;
      case 'tailwind':
        name = 'Tailwind';
        color = 'text-color-tailwind';
        break;
      case 'i18n':
        name = 'i18n';
        color = 'text-color-i18n';
        break;
    }

    return (
      <span
        className={`px-2 py-1 mt-2 text-xs font-semibold mr-2 rounded-md border bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${color}`}
      >
        {name}
      </span>
    );
  };

  const ProjectLink = React.forwardRef(({ children, href }, ref) => (
    <a
      ref={ref}
      href={href}
      className='block font-medium text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-200 inline-block w-min mt-2 first:mr-20 first:sm:mr-32'
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  ));
  ProjectLink.displayName = 'ProjectLink';

  return (
    <div className='lg:grid lg:grid-cols-2 lg:gap-16 lg:auto-rows-min'>
      {projects.map((project, i) => {
        return (
          <div key={i}>
            <article
              key={i}
              className={`project__container border-2 ${
                project.live
                  ? 'border-gray-100 dark:border-gray-500'
                  : 'border-gray-300 dark:border-gray-100'
              } dark:border-opacity-25 py-4 md:py-6 px-8 mb-12 rounded-xl`}
            >
              <H3>{project.title}</H3>
              <div className='flex flex-wrap'>
                {project.stack.split(',').map((tech, i) => {
                  return <ProjectTech tech={tech} key={i}></ProjectTech>;
                })}
              </div>
              <div className='flex flex-col md:flex-row lg:flex-col mt-6'>
                {project.img ? (
                  <Link href={project.live} passHref>
                    <a
                      className='block mx-auto md:mx-0 lg:mx-auto h-full'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <div
                        className='project__img relative mx-auto md:mx-0 lg:mx-auto flex-grow md:mr-8 lg:mr-0'
                        style={{
                          width: '16rem',
                          maxWidth: '55vw',
                          height: '13rem',
                        }}
                      >
                        <Image
                          alt='Project Illustration'
                          src={project.img}
                          layout='fill'
                          objectFit='cover'
                        />
                      </div>
                    </a>
                  </Link>
                ) : (
                  ''
                )}
                <Trans
                  i18nKey={`home:projectItems.${i}.description`}
                  components={[
                    <p
                      key='0'
                      className='font-medium text-gray-500 dark:text-gray-400 mt-4 md:mt-0 lg:ml-0 lg:mt-4'
                    />,
                    <br key='1' />,
                    <strong
                      key='2'
                      className='text-gray-800 dark:text-gray-200'
                    />,
                  ]}
                />
              </div>

              <div className='mt-4 md:mt-6'>
                <Link href={project.github} passHref>
                  <ProjectLink>Github</ProjectLink>
                </Link>
                {project.live ? (
                  <Link href={project.live} passHref>
                    <ProjectLink>Live&nbsp;Demo</ProjectLink>
                  </Link>
                ) : (
                  ''
                )}
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
