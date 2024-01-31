import ProjectCard from '@/components/projectCard';
import SocialMedia from '@/components/socialMedia';

function Projects() {
  return (
    <>
      <div className='flex flex-row px-24'>
        <SocialMedia></SocialMedia>
        <div className='flex flex-1 items-center justify-center'>
          <ProjectCard />
        </div>
      </div>
    </>
  )
}

export default Projects;