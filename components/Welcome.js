import siteMetadata from '@/data/siteMetadata'
import Icon from '@/components/social-icons'
import Image from 'next/image'
import Link from 'next/link'

export default function Welcome() {
  return (
    <div className="mb-10 items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
      <div className="flex flex-col items-center space-x-2 pt-8">
        <Image
          src={siteMetadata.image}
          alt="avatar"
          height={250}
          width={250}
          className="rounded-full"
        />
        <div className="flex space-x-3 pt-6 hover:text-primary-600 dark:hover:text-primary-400">
          <Icon kind="instagram" href={siteMetadata.instagram} />
          <Icon kind="github" href={siteMetadata.github} />
        </div>
      </div>
      <div className=" prose pt-8 pb-8 dark:prose-dark xl:col-span-2">
        <h2>Hey, I am Yein</h2>

        <p>
          I am a student in Korea. My <a href="https://www.instagram.com/y2in_oo/">DMs</a> are
          always open.
        </p>
      </div>
    </div>
  )
}
