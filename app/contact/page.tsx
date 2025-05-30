import { Button } from "@/components/ui/button"
import { BiMapPin } from "react-icons/bi"
import { BsArrowBarLeft } from "react-icons/bs"
import { MdMail, MdPhone } from "react-icons/md";
import Link from 'next/link'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 
                             border rounded-xl border-gray-700/50 p-5 sm:p-10
                             backdrop-blur-xl bg-black/80">

        <Link href="/">
          <Button variant="ghost" className="hover:bg-black absolute left-0
                           hover:text-white rounded-full duration-300 mb-5 cursor-pointer">
            Back to Home <BsArrowBarLeft className="ml-2" />
          </Button>
        </Link>

        <div className="space-y-6">
          <h1 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 
                        via-sky-300 to-blue-500 text-center">Get in Touch</h1>

          <div className="space-y-">
            <p className="text-pretty text-neutral-200 tracking-tight">
              Open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out via the contact form below or connect with me on social media.
            </p>

            <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
              <MdMail className="w-5 h-5 text-emerald-400" />
              <div>
                <h3 className="font-medium">Email</h3>
                <a href=""
                  className="text-pretty text-neutral-500 hover:text-emerald-400 transition-colors">
                  jubiliomausse5@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
              <MdPhone className="w-5 h-5 text-emerald-400" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <a href=""
                  className="text-pretty text-neutral-500 hover:text-emerald-400 transition-colors">
                  +258 84 451 8764
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg border border-gray-700/50 bg-black/40">
              <BiMapPin className="w-5 h-5 text-emerald-400" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-pretty text-neutral-500 hover:text-emerald-400 transition-colors">
                  Cidade de Pemba, Cabo Delgado, Mozambique
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Connect with me</h2>

              <form action="" className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="" className="text-sm font-medium">Name</label>
                  <input type="text" id="name" placeholder="Your name" className="w-full p-2 rounded-lg flex items-center
                          gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 
                          transition-all duration-300"/>
                </div>

                <div className="space-y-2">
                  <label htmlFor="" className="text-sm font-medium">E-mail</label>
                  <input type="text" id="email" placeholder="Your Email" className="w-full p-2 rounded-lg flex items-center
                          gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 
                          transition-all duration-300"/>
                </div>

                <div className="space-y-2">
                  <label htmlFor="" className="text-sm font-medium">Message</label>
                  <textarea name="" id="message" rows={5} placeholder="Your Message" className="w-full p-2 rounded-lg flex items-center
                          gap-3 border border-gray-700/50 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 
                          transition-all duration-300"></textarea>
                </div>

                <Button className="w-full text-black bg-emerald-400 hover:bg-emerald-500">Send Message</Button>
              </form>

            </div>

          </div>
        </div>
      </main>

    </div>
  )
}

export default page