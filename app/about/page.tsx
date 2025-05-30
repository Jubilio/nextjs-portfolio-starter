import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BsArrowBarLeft } from "react-icons/bs"

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 
                             border rounded-xl border-gray-700/50 p-5 sm:p-10
                             backdrop-blur-xl bg-black/80">
                <Link href="/">
                    <Button variant="ghost" className="hover:bg-black hover:text-white rounded-full duration-300 mb-5 cursor-pointer">
                        Back to Home <BsArrowBarLeft className="ml-2" />
                    </Button>
                </Link>

                <div className="space-y-6">
                    <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r
                                from-emerald-400 via-sky-300 to-blue-500 text-center">About Me</h1>

                    <div className="space-y-4 text-neutral-200 text-pretty tracking-tight">
                        <p className="text-gray-300">
                            Hello! I'm a passionate web developer with a love for creating dynamic and responsive web applications.
                            I enjoy working with the latest technologies and continuously learning new skills to enhance my craft.
                        </p>
                        <p className="text-gray-300">
                            In my free time, I like to explore new frameworks, contribute to open-source projects, and share my knowledge with the community.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r
                                from-emerald-400 to-blue-500 text-center">Education</h2>
                        <div className="space-y-2">
                            <p className="font-medium">Bachelor's Degree in Geographic Information Sciences</p>
                            <p className="text-neutral-500">Eduardo Mondlane University, 2019-2023</p>
                        </div>
                    </div>

                     <div className="space-y-4">
                        <h2 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r
                                from-emerald-400 to-blue-500 text-center">Profissional Experience</h2>
                        <div className="space-y-2">
                            <div>
                                <p className="font-medium">Data and GIS Officer</p>
                                <p className="text-neutral-500">Acted, 2024-Present</p>
                            </div>
                            <div>
                                <p className="font-medium">GIS Intership</p>
                                <p className="text-neutral-500">BioFund, 2024</p>
                            </div>
                            <div>
                                <p className="font-medium">GIS Consultant</p>
                                <p className="text-neutral-500">Delcam Consultoria e Serviço, 2023-2024</p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default page