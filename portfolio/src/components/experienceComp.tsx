import { Button } from './ui/button';
let experience = [
  {
    date: 'july 2021 -- present',
    title: 'Full Stack Developer',
    company: 'Cognitive Healthcare International',
    worklist: ['Optimized5+backend systems, cutting response time by 20%.', 'Managedproject timelines effectively, delivering 100% of projects on schedule, and showcasing strong', 'Guidedjunior developers on development strategies and innovative techniques.'],
    tags: ['Reactjs', 'Postgres', 'Nest js'],
  },
  {
    date: 'july 2021 -- present',
    title: 'Full Stack Developer',
    company: 'Cognitive Healthcare International',
    worklist: ['Optimized5+backend systems, cutting response time by 20%.', 'Managedproject timelines effectively, delivering 100% of projects on schedule, and showcasing strong', 'Guidedjunior developers on development strategies and innovative techniques.'],
    tags: ['Reactjs', 'Postgres', 'Nest js'],
  },
  {
    date: 'july 2021 -- present',
    title: 'Full Stack Developer',
    company: 'Cognitive Healthcare International',
    worklist: ['Optimized5+backend systems, cutting response time by 20%.', 'Managedproject timelines effectively, delivering 100% of projects on schedule, and showcasing strong', 'Guidedjunior developers on development strategies and innovative techniques.'],
    tags: ['Reactjs', 'Postgres', 'Nest js'],
  },
  {
    date: 'july 2021 -- present',
    title: 'Full Stack Developer',
    company: 'Cognitive Healthcare International',
    worklist: ['Optimized5+backend systems, cutting response time by 20%.', 'Managedproject timelines effectively, delivering 100% of projects on schedule, and showcasing strong', 'Guidedjunior developers on development strategies and innovative techniques.'],
    tags: ['Reactjs', 'Postgres', 'Nest js'],
  },
];

function ExperienceComp() {
  return (
    <>
      {
        experience.map(exp => (
          <div className='flex gap-8 hover:bg-accent/50 p-8 rounded-md'>
            <p className='text-foreground/40'>{exp.date}</p>
            <div>
              <h3>{exp.title}</h3>
              <h5>at<Button variant={'link'}> {exp.company}</Button></h5>
              <div className='flex flex-col gap-4'>
                <ul className='flex gap-2 flex-col'>
                  {
                    exp.worklist.map((list) => (
                      <li className='text-sm text-foreground/60'>{list}</li>
                    ))
                  }
                </ul>
                <div className='flex gap-4 '>
                  {
                    exp.tags.map((tag) => (
                      <p className='px-2 py-1 hover:bg-primary hover:text-white rounded-md text-sm border'>{tag}</p>
                    ))
                  }
                </div>
              </div>

            </div>
          </div>
        ))
      }
    </>
  )
}

export default ExperienceComp;