import useCountdown from '~/hooks/useCountdown'
const END_DATE = '2026-01-30T21:00:00.000+00:00'

const Discount = () => {
  const [times, isFinished] = useCountdown({
    end_date: END_DATE
  })

  if (isFinished) {
    return null
  }

  return (
    <div
      flex="~ 1 col"
      max-w="500px"
      position="relative"
      rounded="10px"
      text="center">
      <div
        flex="~ xs:row col xs:items-stretch items-center justify-between"
        gap="xs:0 10">
        <div
          b="2 solid brand xs:rounded-r-0  rounded-xl"
          flex="~ col shrink-0 items-center justify-center"
          max-w="xs:auto 270px"
          p="10px"
          style={{
            background:
              'linear-gradient(90deg, #374151 0%, #232b32 50%, #1f2937 100%)'
          }}
          text="white">
          <div
            b="1 dotted gray-light"
            flex="~ items-center xs:justify-center justify-between"
            gap="10px"
            h="80px"
            p="15px"
            rounded="lg"
            w="full">
            <div bg="gray" h="22px" p="3px" rounded="full" w="22px">
              <div bg="white" h="full" rounded="full" w="full"></div>
            </div>
            <div flex="~ items-center" gap="xs:10px 3px">
              <div font="bold" text="xl:64px xs:48px 36px">
                50
              </div>
              <div flex="~ xs:col row items-center" font="bold" gap="xs:0 10px">
                <p text="xl:32px xs:22px 36px">%</p>
                <p text="xl:16px xs:12px 36px">OFF</p>
              </div>
            </div>
          </div>
        </div>
        <div
          b="2 solid brand xs:rounded-l-0 rounded-xl"
          flex="~ items-center justify-center "
          gap="xl:10px 5px"
          p="x-10px xs:t-10px xs:b-10px t-30px b-20px"
          position="relative"
          select="none"
          w="full">
          {times.map((item: any, index: number) => (
            <>
              {index !== 0 && <div>:</div>}

              <div
                backdrop-blur="10px"
                flex="~ col items-center justify-between"
                gap="5px"
                key={index}>
                <div
                  flex="~ items-center justify-center"
                  font="700"
                  h="18px"
                  style={{
                    fontFamily:
                      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                  }}
                  text="24px brand"
                  w="full"
                  z="1">
                  {item.label === 'Secs' ? (
                    <span
                      animated=" infinite"
                      className="inline-block animate-countdown "
                      font="700">
                      {('0' + item.value).slice(-2)}
                    </span>
                  ) : (
                    <span>{('0' + item.value).slice(-2)}</span>
                  )}
                </div>

                <div w="full">
                  <span font="400" text="14px brand" tracking="1px">
                    {item.label}
                  </span>

                  <div
                    bg-gradient="to-r from-transparent via-gray to-transparent"
                    bg-image=""
                    h="1px"
                    m="t-3px"
                    w="full"
                  />
                </div>
              </div>
            </>
          ))}

          <div
            bg="white"
            font="semibold"
            p="x-15px"
            position="absolute top-[-12px] right-20px"
            text="nowrap">
            <p>Offer ends in...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discount
