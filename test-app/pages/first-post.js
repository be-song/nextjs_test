import Image from 'next/image'

function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <Image src="/images/bambie.png" width={400} height={500} alt="bambie" />
    </>
  )
}

export default FirstPost
