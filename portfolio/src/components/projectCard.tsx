function ProjectCard() {
  return (
    <>
      <div className='flex gap-2 flex-col w-[40%] p-4 rounded-md border-2 border-dotted'>
        <img className='w-full h-auto' src="https://via.placeholder.com/434x244" alt="" />
        <h5>@nextjs</h5>
        <p className='text-foreground/60 text-sm'>The React Framework - bordermaintained by @vercel and maintained by @vercel and maintained by @vercel</p>
        <div className='flex gap-4'>
          <p className='px-2 py-1 hover:bg-secondary rounded-md text-sm border'>React js</p>
          <p className='px-2 py-1 hover:bg-secondary rounded-md text-sm border'>Ruby & rails</p>
          <p className='px-2 py-1 hover:bg-secondary rounded-md text-sm border'>Postgres</p>
        </div>
      </div>
    </>
  )
}

export default ProjectCard;