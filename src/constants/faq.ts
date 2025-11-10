import { JSX } from 'react'

export interface FaqType {
  question: string
  answer: JSX.Element
  hash?: string
}

export const FAQ = [
  {
    question: 'How can I purchase the products?',
    answer:
      'To purchase our products, you need to sign up on our website and create an account. Then, you can choose the desired products and make a purchase using our credit or subscription system.'
  },
  {
    question: "How can I download the products I've purchased?",
    answer:
      'The download links for your purchased products are automatically added to your account. By logging into your account, you can access the download links and other content you&apos;ve purchased.'
  },
  {
    question: 'In which file formats are your products provided?',
    answer:
      'Our products are usually provided in commonly used file formats. These formats may include object files (.obj or.fbx), textures (.png or .jpeg), materials (.sbsrar , .jpeg or .png), vfx files (.unitypackage or .uasset), and sounds (.mp3 or .wav). You can check the available file formats on the product pages.'
  },
  {
    question: 'How can I add Unreal Asset to my project ?',
    answer:
      'Extract the zip that you have downloaded from Cosmos. Under the Unreal folder there will be a Rocket folder. Copy and paste the Rocket folder to your Content.'
  },
  {
    question: 'Can I use the purchased products in my commercial projects?',
    answer:
      'Yes, you can use the purchased products in your commercial projects. However, it is important to review the usage rights and license terms. Some products may have specific usage restrictions, so we recommend carefully reading the license terms provided on the product page.'
  },
  {
    question: 'What is your refund or return policy for the products?',
    answer:
      'A refund will only be granted if 48 hours have elapsed since the purchase, the product has not been used for any purpose and you have a justifiable reason. Otherwise we reserve the right not to refund. However, in exceptional cases such as quality issues or download problems, you can contact our support team.',
    hash: 'dummy-hash'
  },
  {
    question: 'What does No AI mean?',
    answer:
      'We have a curated marketplace in Cosmos, and we believe AI should not take over artists&apos; works for commercial purposes without their permits. We value artists&apos; works, and as artists, we know how hard it is to reach that point to create high-quality works. That is why we do not use AI in our models and textures in Cosmos. We also try to eliminate the works made by different publishers using AI in the approval process.'
  },
  {
    question:
      'If I cancel my premium subscription, will I keep the free products I received with my premium subscription?',
    answer:
      'Yes, You will continue to have these products even after your subscription ends.'
  }
]
