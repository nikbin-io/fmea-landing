interface VideoWrapperProps {
  video: string
  color: 'blue' | 'green'
}

const VideoWrapper = ({ video, color = 'blue' }: VideoWrapperProps) => {
  return (
    <div overflow="visible" position="relative">
      <div
        aspect-ratio="16/9"
        flex="~ col"
        max-w="1000px"
        mx="auto"
        overflow="hidden"
        position="relative"
        style={{
          clipPath: 'url(#mainVideoClip)',
          WebkitClipPath: 'url(#mainVideoClip)'
        }}
        text="center"
        w="full">
        <svg
          aria-hidden="true"
          className="glowing-box-shadow"
          focusable="false"
          height="0"
          style={{ position: 'absolute' }}
          width="0">
          <defs>
            <clipPath clipPathUnits="objectBoundingBox" id="mainVideoClip">
              <path
                d="M1147.69,1079c-6.33,0-12.52-2.2-17.42-6.19l-3.65-2.97c-5.26-4.28-11.9-6.64-18.69-6.64h-305.91c-6.79,0-13.42,2.36-18.69,6.64l-3.65,2.96c-4.91,3.99-11.09,6.19-17.42,6.19H28.59c-15.22,0-27.59-12.38-27.59-27.59v-261.16c0-5.49,1.61-10.8,4.67-15.36l4.62-6.89c3.28-4.89,5.01-10.59,5.01-16.48v-423.2c0-5.89-1.73-11.59-5.01-16.48l-4.62-6.89c-3.06-4.56-4.67-9.87-4.67-15.36V28.59C1,13.38,13.38,1,28.59,1h733.68c6.33,0,12.52,2.2,17.42,6.19l3.65,2.97c5.26,4.28,11.9,6.64,18.68,6.64h305.91c6.79,0,13.42-2.36,18.68-6.64l3.65-2.97c4.91-3.99,11.09-6.19,17.42-6.19h743.71c15.22,0,27.59,12.38,27.59,27.59v261c0,5.49-1.62,10.8-4.67,15.36l-4.53,6.76s-.07.08-.1.13c-3.28,4.89-5.01,10.59-5.01,16.48v423.2c0,5.89,1.73,11.59,5.01,16.48l4.62,6.89c3.06,4.56,4.67,9.87,4.67,15.36v261.16c0,15.22-12.38,27.59-27.59,27.59h-743.71Z"
                transform="scale(0.000520833, 0.000925925)"
              />
            </clipPath>
          </defs>
        </svg>
        <video
          autoPlay
          h="full"
          loop
          muted
          overflow="hidden"
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          w="full">
          <source src={video} type="video/mp4" />
        </video>
        <svg
          aria-hidden="true"
          focusable="false"
          h="full"
          left="0"
          pointer="events-none"
          position="absolute"
          preserveAspectRatio="xMidYMid meet"
          top="0"
          viewBox="0 0 1920 1080"
          w="full"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1147.69,1079c-6.33,0-12.52-2.2-17.42-6.19l-3.65-2.97c-5.26-4.28-11.9-6.64-18.69-6.64h-305.91c-6.79,0-13.42,2.36-18.69,6.64l-3.65,2.96c-4.91,3.99-11.09,6.19-17.42,6.19H28.59c-15.22,0-27.59-12.38-27.59-27.59v-261.16c0-5.49,1.61-10.8,4.67-15.36l4.62-6.89c3.28-4.89,5.01-10.59,5.01-16.48v-423.2c0-5.89-1.73-11.59-5.01-16.48l-4.62-6.89c-3.06-4.56-4.67-9.87-4.67-15.36V28.59C1,13.38,13.38,1,28.59,1h733.68c6.33,0,12.52,2.2,17.42,6.19l3.65,2.97c5.26,4.28,11.9,6.64,18.68,6.64h305.91c6.79,0,13.42-2.36,18.68-6.64l3.65-2.97c4.91-3.99,11.09-6.19,17.42-6.19h743.71c15.22,0,27.59,12.38,27.59,27.59v261c0,5.49-1.62,10.8-4.67,15.36l-4.53,6.76s-.07.08-.1.13c-3.28,4.89-5.01,10.59-5.01,16.48v423.2c0,5.89,1.73,11.59,5.01,16.48l4.62,6.89c3.06,4.56,4.67,9.87,4.67,15.36v261.16c0,15.22-12.38,27.59-27.59,27.59h-743.71Z"
            fill="none"
            stroke={
              color === 'blue'
                ? '#374c9280'
                : color === 'green'
                  ? '#25869180'
                  : '#374c9280'
            }
            strokeWidth="18"
          />
        </svg>
      </div>
      <div
        className={`${color} glowing-box-shadow`}
        position="absolute top-5 bottom-5 right-5 left-5"
        rounded="xl"
        z="-1"></div>
    </div>
  )
}

export default VideoWrapper
