import Link from 'next/link'
import { Button } from '@/components/ui/button';
import { BsArrowBarLeft } from 'react-icons/bs';
import skillsData from '../data/skills.json';

const page = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <main className='max-w-4xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl
                       border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-gray/80'>
        
         <Link href="/">
            <Button variant="ghost" className="hover:bg-black absolute left-0
                           hover:text-white rounded-full duration-300 mb-5 cursor-pointer">
              Back to Home <BsArrowBarLeft className="ml-2" />
            </Button>
          </Link>

          <div className='space-y-6'>
              <h1 className='text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400
                          via-sky-300 to-blue-500 text-center'>
                Technical Skills
              </h1>

              <div className='space-y-8'>
                {skillsData.categories.map((category) => (
                  <div key=" category.name" className='space-y-4'>
                    <h2 className='text-2xl'>{category.name}</h2>
                    <div className='grid grid-cols-2 gap-4'>
                      {category.skills.map((skill) => (
                        <div key={skill.name} className='p-4 rounded-lg border border-gray-700/50 bg-black/40'>
                          <h3 className='font-medium mb-2'>{skill.name}</h3>
                          <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                            <div className='bg-emerald-400 h-2.5 rounded-full' style={{width: `${skill.level}`}}></div>
                          </div>
                        </div>
                    ))}
                    </div>
                  </div>
                ))}
              </div>
          </div>

      </main>
    </div>
  )
}

export default page