import Navbar from "@/components/globals/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const Page = () => {

  const data = [
    {
      title: "Learn NextJS",
      content: "NextJS is a React framework that enables server-side rendering and static site generation for React applications.",
      href: "https://nextjs.org",
      cta: "Get Started"
    },
    {
      title: "Learn Prisma",
      content: "Prisma is a modern database toolkit that makes working with databases easy.",
      href: "https://prisma.io",
      cta: "Get Started"
    },
    {
      title: "Learn Neon",
      content: "Neon is a serverless Postgres platform designed to help you build reliable and scalable applications faster.",
      href: "https://neon.tech/docs/introduction",
      cta: "Get Started"
    },
    {
      title: "Documentation and more starter kits",
      content: "Check out the official documentation and more starter kits on the official website.",
      href: "https://osskit-neon.vercel.app",
      cta: "Documentation"
    }
  ]

  return (
    <main className="flex flex-col h-full py-8">
      <div className="text-center flex flex-col w-full px-8 py-4 md:py-8">
        <h1 className="text-4xl font-bold mb-4">Build your NextJS app at lightning speed!</h1>
        <p className="text-lg">Ship your SaaS faster than ever before 🚀. The boilerplate is ready for you.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 lg:w-3/4 lg:mx-auto">
          {
            data.map((item, index) => (
              <Card key={index}>
                <CardHeader className="px-2">
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {item.content}
                </CardContent>
                <CardFooter className="flex justify-end">
                  <a href={item.href} target="_blank">
                    <Button>{item.cta}</Button>
                  </a>
                </CardFooter>
              </Card>
            ))
          }
        </div>
      </div>
      <footer className="text-center text-gray-500 text-sm mt-4">
        Built with ❤️ by <a href="https://github.com/rohittcodes" target="_blank" className="text-blue-500">RohittCodes</a>
      </footer>
    </main>
  )
}

export default Page;