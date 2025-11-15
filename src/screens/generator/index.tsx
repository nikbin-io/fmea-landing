import Sidebar from '../guideline/components/Keypoints'

const Generator = () => {
  return (
    <div
      bg="red"
      flex="~"
      h="screen"
      overflow="hidden"
      position="relative"
      w="full">
      <Sidebar />

      <main
        bg="white"
        flex="~ 1"
        h="screen"
        overflow="hidden"
        p="8"
        position="relative"
        z="0">
        <h1 text="4xl font-bold gray-800">Hello World</h1>
      </main>
    </div>
  )
}

export default Generator
