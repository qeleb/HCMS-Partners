import styles from '@/components/Sections/Sections.module.scss';
import { IconEarth } from '@/icons/IconEarth';
import { IconMapPin } from '@/icons/IconMapPin';
import { IconReticle } from '@/icons/IconReticle';
import { IconTools } from '@/icons/IconTools';

export const SectionWeProvide = () => (
  <section class={styles.section}>
    <h2>What We Provide Our Clients</h2>
    <div class={styles.provide}>
      <div>
        <IconReticle />
        <h3>Referenceability</h3>
        <p>
          We have a 100% referenceable client base. Our clients range in size from $300M to $24B in revenue, with
          employee populations ranging from 3,000 to over 100,000.
        </p>
      </div>
      <div>
        <IconMapPin />
        <h3>On-Site & On-Shore Development</h3>
        <p>
          Our developers are all based in the U.S. and are available during clients’ business hours. Our experience has
          shown consultants on-shore are actually more effective and often at a lower cost than many offshore solutions.
        </p>
      </div>
      <div>
        <IconEarth />
        <h3>World Class Talent</h3>
        <p>
          We live by the philosophy that <i>“our product is our people”</i>. We have the best and the brightest people
          to serve our clients. We carefully select and provide the right skill sets to meet the project needs. Our
          Oracle practice is very experienced with consultants having an average of 20 years of Oracle Experience.
        </p>
      </div>
      <div>
        <IconTools />
        <h3>Value Added Tools</h3>
        <ul>
          <li>Smart Loader</li>
          <li>Mass Salary ADI</li>
          <li>Mass Costing ADI</li>
          <li>Assignment Set Builder</li>
          <li>Responsibility Activation / Deactivation Program</li>
          <li>Self-Service Report Packet</li>
        </ul>
      </div>
    </div>
  </section>
);
