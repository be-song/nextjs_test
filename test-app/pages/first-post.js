import Image from 'next/image'
import Head from 'next/head'

function FirstPost() {
  return (
    <>
      <Head>
        <title>First post</title>
      </Head>
      <h1>First Post</h1>
      <Image src="/images/bambie.png" width={400} height={500} alt="bambie" />
    </>
  )
}

export default FirstPost
