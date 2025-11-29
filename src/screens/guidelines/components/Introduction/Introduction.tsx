import Image from 'next/image'
import img01 from '~/assets/guideline01.jpg'
import img02 from '~/assets/guideline02.jpg'

const Introduction = () => {
  return (
    <div
      className="[&_p]:text-base [&_p]:mb-4 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mb-2"
      h="full">
      <h2 id="introduction" m="t-8 b-2" text="2xl font-semibold">
        Introduction
      </h2>

      <p>
        This is a long dummy documentation meant to showcase headings,
        subheadings, and scrolling behavior. It contains multiple sections and
        nested subsections so that the Keypoints component can generate a
        meaningful outline and enable smooth navigation across the content.
      </p>

      <h3 id="purpose" scroll-m="t-20px">
        Purpose
      </h3>

      <p>
        The purpose of this guide is to provide placeholder text and structure
        for a comprehensive document. It demonstrates consistent heading
        hierarchy, paragraph spacing, and section grouping for clarity.
      </p>

      <h3 id="scope" scroll-m="t-20px">
        Scope
      </h3>

      <p>
        The scope covers setup, concepts, workflows, best practices, examples,
        and appendices. Each section uses short, readable paragraphs to ensure
        the page is scrollable and easy to scan.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
        voluptatum numquam laboriosam nobis velit vitae libero officiis deleniti
        repellendus! Perferendis nisi soluta nam dolorem consectetur inventore
        accusantium omnis alias nobis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Corrupti omnis voluptatibus illo voluptates temporibus
        unde laboriosam dicta quia, facilis perspiciatis. Aliquid cupiditate
        dolorum eius, expedita veritatis deleniti recusandae provident iure.
        Quidem dolorem expedita a, eligendi nulla earum temporibus quae nemo
        asperiores dolores quam eaque cupiditate modi, sequi aliquid accusamus,
        repellat consectetur iste. Sit neque natus consequuntur tempora, alias
        voluptates sint. Atque officiis ullam dolores? Tempora id animi sit
        illum cum porro? Harum, illum. Numquam vel quaerat doloribus placeat
        delectus, facilis minus, dolores culpa ut veritatis dolorum repudiandae
        iste temporibus quis? Laboriosam, molestias, ratione non quasi nisi,
        cupiditate aliquam excepturi doloremque aspernatur deleniti vel illum
        est! Vel culpa saepe nisi voluptatem, voluptatum quae odit animi ullam
        reiciendis. Expedita corrupti eaque mollitia? Provident dolores ratione,
        accusamus, dignissimos repellat vero, est praesentium rerum aspernatur
        cum placeat voluptate molestiae illo. Suscipit, perferendis deleniti
        perspiciatis labore quidem sed iste nesciunt voluptas porro nemo
        voluptates velit.
      </p>

      <div m="b-4" w="full">
        <Image
          alt="Guideline Image 02"
          b="rounded-xl"
          h="auto"
          src={img02}
          w="full"
        />
      </div>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores in
        provident cum minima repudiandae quaerat reiciendis ipsam. Sed, suscipit
        earum dolor assumenda rerum quaerat ab tempora natus non libero officia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id libero iste
        quidem laborum, praesentium vero. Voluptates, doloremque! Sunt
        distinctio quasi voluptatem tempora beatae suscipit laborum. Harum quam
        magnam quibusdam facere!
      </p>

      <h3 id="models" scroll-m="t-20px">
        Models
      </h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        voluptatum, cumque, asperiores, facilis laboriosam incidunt quisquam
        doloremque magnam alias sed unde. Quasi, voluptates! Doloremque
        accusantium cumque nobis, voluptatibus sapiente.
      </p>

      <div m="b-4" w="full">
        <Image
          alt="Guideline Image 01"
          b="rounded-xl"
          h="auto"
          src={img01}
          w="full"
        />
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minima
        rem blanditiis nemo praesentium odit dolor modi fuga molestiae, magnam
        eius cupiditate repellat et consequuntur aliquid soluta illum cum quae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        quibusdam non nihil dicta labore, amet blanditiis quae quas similique
        itaque vitae assumenda repudiandae hic facilis quasi reprehenderit
        mollitia impedit dolor.
      </p>
    </div>
  )
}

export default Introduction
