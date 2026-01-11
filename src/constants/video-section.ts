export interface VIDEO_CONTENT_TYPE {
  id: string
  title: string
  description: string
  video: string
}

export const VIDEO_CONTENT: VIDEO_CONTENT_TYPE[] = [
  {
    id: '01',
    title: 'Process Failure Mode and Effects Analysis',
    description:
      'Manufacturing and Process Engineers envision a process is free of errors. Unfortunately, errors and especially errors propagated when people are present can be quite catastrophic. Process Failure Mode and Effects Analysis (PFMEA) looks at each process step to identify risks and possible errors from many different sources.',
    video: '/videos/demo.mp4'
  },
  {
    id: '02',
    title: 'Process Failure Mode and Effects Analysis',

    description:
      'Manufacturing and Process Engineers envision a process is free of errors. Unfortunately, errors and especially errors propagated when people are present can be quite catastrophic. Process Failure Mode and Effects Analysis (PFMEA) looks at each process step to identify risks and possible errors from many different sources.',
    video: '/videos/demo.mp4'
  }
]
