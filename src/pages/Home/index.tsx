import { A } from '@solidjs/router';
import bannerNY from '@/assets/bannerNY.jpg';
import ctaBG from '@/assets/cta_bg.jpg';
import iconOracle from '@/assets/oracle.png';
import { LabeledBanner } from '@/components/LabeledBanner';
import styles from '@/pages/Home/Home.module.scss';
import { setPageTitle } from '@/utils/pageTitle';

export const Home = () => {
  setPageTitle('Home');

  return (
    <div class={styles.Home}>
      <LabeledBanner bannerImgUrl={bannerNY} label="NEW YORK CITY, USA" />
      <section>
        <h2>About Us</h2>
        <div>
          HCMS Partners is a consultancy that specializes exclusively on the implementation, upgrades, optimizations and
          custom development of the Human Capital Management (HCM) modules of the Oracle HCM Suite (Cloud and
          E-Business).
        </div>
        <div>
          Our consulting team members are all Senior Level resources, considered experts in their respective fields, and
          all have practical business experience, which allows HCMS Partners to immediately understand our clients
          business requirements and pain points. Our consultants have an industry high average of 20+ years of Oracle
          HCM experience and come prepared with tools and solutions that allow HCMS Partners to rapidly implement and
          return a quick ROI for our clients.
        </div>
      </section>
      <section class={styles.services}>
        <h2>Our Services</h2>
        <div>
          <A href="services">
            {/*TODO: Finalize services link */}
            <svg viewBox="0 0 59 53">
              <g fill="#FFF" fill-rule="evenodd">
                <path d="M50.4 16.9A17.2 17.2 0 0 0 33 0c-8 0-15 5.3-16.9 12.8a10.8 10.8 0 0 0-9 11.9c0 .3.1.6.4.8.4.5 1.2.5 1.7 0a1.2 1.2 0 0 0 .4-1l-.1-1.2c0-4.2 3.4-7.8 7.7-8.2.6 0 1-.4 1.2-1A14.9 14.9 0 0 1 33 2.5C41.2 2.4 48 9 48 17l-.1 1.1c0 .4 0 .7.4 1 .2.2.6.3 1 .3h.2l.7-.1c3.5 0 6.3 2.8 6.3 6.2a6 6 0 0 1-5.6 6c-.7.1-1.2.7-1 1.4a1.2 1.2 0 0 0 1.3 1 8.6 8.6 0 0 0 7.8-8.4c0-4.7-3.9-8.6-8.6-8.6Z" />
                <path d="M8.8 53H41c6 0 11-4.8 11-10.7 0-5.2-4-9.6-9.1-10.5-2-7.5-9-12.8-16.9-12.8-9.5 0-17.3 7.5-17.4 16.8A8.7 8.7 0 0 0 0 44.4C0 49.2 4 53 8.8 53Zm0-14.7h1c.3.1.7 0 1-.3.2-.2.4-.6.3-1v-1c0-8 6.7-14.6 14.9-14.6 7 0 13.2 5 14.6 11.8.1.5.6.9 1.1 1 4.4.3 7.8 3.9 7.8 8.1 0 4.6-3.8 8.3-8.4 8.3H8.8a6.2 6.2 0 0 1-6.3-6.2c0-3.4 2.8-6.1 6.3-6.1Z" />
              </g>
            </svg>
            Oracle HCM Cloud & EBS Services
          </A>
          <A href="services">
            {/*TODO: Finalize services link */}
            <svg viewBox="0 0 54 52">
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#E2E2E2"
                  d="M19 11.3c.6 0 1.1-.5 1.1-1.1V9.1h1.1a1.1 1.1 0 0 0 0-2.2H19c-.6 0-1.1.5-1.1 1v2.3c0 .6.5 1.1 1.1 1.1Zm6.7 0c.6 0 1.1-.5 1.1-1.1V9.1h1.1a1.1 1.1 0 0 0 0-2.2h-2.2c-.6 0-1.1.5-1.1 1v2.3c0 .6.5 1.1 1 1.1Zm6.7 0c.6 0 1-.5 1-1.1V9.1h1.2a1.1 1.1 0 0 0 0-2.2h-2.2c-.6 0-1.1.5-1.1 1v2.3c0 .6.5 1.1 1 1.1ZM19 18c.6 0 1.1-.5 1.1-1.1v-1.1h1.1a1.1 1.1 0 0 0 0-2.3H19c-.6 0-1.1.5-1.1 1.1V17c0 .6.5 1 1.1 1Zm6.7 0c.6 0 1.1-.5 1.1-1.1v-1.1h1.1a1.1 1.1 0 0 0 0-2.3h-2.2c-.6 0-1.1.5-1.1 1.1V17c0 .6.5 1 1 1Zm6.7 0c.6 0 1-.5 1-1.1v-1.1h1.2a1.1 1.1 0 0 0 0-2.3h-2.2c-.6 0-1.1.5-1.1 1.1V17c0 .6.5 1 1 1ZM19 24.7c.6 0 1.1-.5 1.1-1.2v-1h1.1a1.1 1.1 0 0 0 0-2.3H19c-.6 0-1.1.5-1.1 1.1v2.2c0 .7.5 1.2 1.1 1.2Zm6.7 0c.6 0 1.1-.5 1.1-1.2v-1h1.1a1.1 1.1 0 0 0 0-2.3h-2.2c-.6 0-1.1.5-1.1 1.1v2.2c0 .7.5 1.2 1 1.2Zm6.7 0c.6 0 1-.5 1-1.2v-1h1.2a1.1 1.1 0 0 0 0-2.3h-2.2c-.6 0-1.1.5-1.1 1.1v2.2c0 .7.5 1.2 1 1.2ZM19 31.3c.6 0 1.1-.5 1.1-1V29h1.1a1.1 1.1 0 0 0 0-2.2H19c-.6 0-1.1.5-1.1 1.1v2.2c0 .6.5 1.1 1.1 1.1Zm6.7 0c.6 0 1.1-.5 1.1-1V29h1.1a1.1 1.1 0 0 0 0-2.2h-2.2c-.6 0-1.1.5-1.1 1.1v2.2c0 .6.5 1.1 1 1.1Zm6.7 0c.6 0 1-.5 1-1V29h1.2a1.1 1.1 0 0 0 0-2.2h-2.2c-.6 0-1.1.5-1.1 1.1v2.2c0 .6.5 1.1 1 1.1ZM19 38c.6 0 1.1-.5 1.1-1.1v-1.1h1.1a1.1 1.1 0 0 0 0-2.2H19c-.6 0-1.1.5-1.1 1V37c0 .6.5 1.1 1.1 1.1Zm6.7 0c.6 0 1.1-.5 1.1-1.1v-1.1h1.1a1.1 1.1 0 0 0 0-2.2h-2.2c-.6 0-1.1.5-1.1 1V37c0 .6.5 1.1 1 1.1Zm6.7 0c.6 0 1-.5 1-1.1v-1.1h1.2a1.1 1.1 0 0 0 0-2.2h-2.2c-.6 0-1.1.5-1.1 1V37c0 .6.5 1.1 1 1.1ZM19 44.7c.6 0 1.1-.5 1.1-1.1v-1.1h1.1a1.1 1.1 0 0 0 0-2.3H19c-.6 0-1.1.5-1.1 1.2v2.2c0 .6.5 1 1.1 1Zm6.7 0c.6 0 1.1-.5 1.1-1.1v-1.1h1.1a1.1 1.1 0 0 0 0-2.3h-2.2c-.6 0-1.1.5-1.1 1.2v2.2c0 .6.5 1 1 1Zm6.7 0c.6 0 1-.5 1-1.1v-1.1h1.2a1.1 1.1 0 0 0 0-2.3h-2.2c-.6 0-1.1.5-1.1 1.2v2.2c0 .6.5 1 1 1Zm-22.3-4.5H8c-.6 0-1.1.5-1.1 1.2v2.2a1.1 1.1 0 0 0 2.2 0v-1.1h1.1a1.1 1.1 0 0 0 0-2.3Zm0-6.6H8c-.6 0-1.1.5-1.1 1V37a1.1 1.1 0 0 0 2.2 0v-1.1h1.1a1.1 1.1 0 0 0 0-2.2Zm-2.2-2.3c.6 0 1.1-.5 1.1-1V29h1.1a1.1 1.1 0 0 0 0-2.2H8c-.6 0-1.1.5-1.1 1.1v2.2c0 .6.5 1.1 1 1.1Zm35.6 13.4c.6 0 1.1-.5 1.1-1.1v-1.1h1.1a1.1 1.1 0 0 0 0-2.3h-2.2c-.6 0-1.1.5-1.1 1.2v2.2c0 .6.5 1 1 1Zm0-6.7c.6 0 1.1-.5 1.1-1.1v-1.1h1.1a1.1 1.1 0 0 0 0-2.2h-2.2c-.6 0-1.1.5-1.1 1V37c0 .6.5 1.1 1 1.1Zm0-6.7c.6 0 1.1-.5 1.1-1V29h1.1a1.1 1.1 0 0 0 0-2.2h-2.2c-.6 0-1.1.5-1.1 1.1v2.2c0 .6.5 1.1 1 1.1Z"
                />
                <path
                  fill="#FFF"
                  d="M1.2 51.4h51.2a1.1 1.1 0 0 0 0-2.3h-1.1V21.3c0-.6-.5-1-1.1-1h-10v-19c0-.6-.5-1.1-1.2-1.1H14.6c-.6 0-1.1.5-1.1 1.1v19h-10c-.7 0-1.2.4-1.2 1v27.8h-1a1.1 1.1 0 0 0 0 2.3Zm47.9-29v26.7h-9V22.4h9Zm-33.4-20h22.2v46.7H15.7V2.4Zm-11.1 20h8.9v26.7h-9V22.4Z"
                />
              </g>
            </svg>
            Development & Integration Services
          </A>
          <A href="services">
            {/*TODO: Finalize services link */}
            <svg viewBox="0 0 54 54">
              <g fill="#FFF" fill-rule="evenodd">
                <path d="M52.2 32.2H48a12.2 12.2 0 0 0-.2-.4l3-3a1.1 1.1 0 0 0 0-1.6L46 22.5a1.1 1.1 0 0 0-1.6 0l-3 3-.4-.2v-4.2a1.1 1.1 0 0 0-1-1.1h-6.7a1.1 1.1 0 0 0-1 1.1v4.2l-.5.2-3-3a1.1 1.1 0 0 0-1.6 0l-4.7 4.7a1.1 1.1 0 0 0 0 1.6l3 3-.2.4h-4.2c-.6 0-1.1.5-1.1 1.1V40c0 .6.5 1 1.1 1h4.2l.2.5-3 3a1.1 1.1 0 0 0 0 1.6l4.7 4.7a1.1 1.1 0 0 0 1.6 0l3-3 .4.2v4.2c0 .6.5 1.1 1.1 1.1H40a1.1 1.1 0 0 0 1-1.1V48l.5-.2 3 3a1.1 1.1 0 0 0 1.6 0l4.7-4.7a1.1 1.1 0 0 0 0-1.6l-3-3 .2-.4h4.2a1.1 1.1 0 0 0 1.1-1.1v-6.7a1.1 1.1 0 0 0-1.1-1.1Zm-1.1 6.7h-4c-.4 0-.8.3-1 .7a9.7 9.7 0 0 1-.6 1.6 1.1 1.1 0 0 0 .2 1.3l2.7 2.8-3.1 3.1-2.8-2.7a1.1 1.1 0 0 0-1.3-.2 9.7 9.7 0 0 1-1.6.6 1.1 1.1 0 0 0-.7 1v4h-4.5v-4c0-.4-.3-.8-.7-1a9.7 9.7 0 0 1-1.6-.6 1.1 1.1 0 0 0-1.3.2L28 48.4l-3-3.1 2.7-2.8c.4-.3.5-.8.2-1.3a9.7 9.7 0 0 1-.6-1.6 1.1 1.1 0 0 0-1-.7h-4v-4.5h4c.4 0 .8-.3 1-.8a9.7 9.7 0 0 1 .6-1.5c.3-.5.2-1-.2-1.3L25 28l3.1-3.1 2.8 2.7c.3.4.8.4 1.3.2a9.7 9.7 0 0 1 1.6-.6c.4-.2.7-.6.7-1.1v-3.9H39v3.9c0 .5.3 1 .8 1a9.7 9.7 0 0 1 1.5.7c.5.2 1 .2 1.3-.2l2.8-2.7 3.1 3.1-2.7 2.8c-.4.3-.4.8-.2 1.3l.6 1.5c.2.5.6.8 1 .8h4V39Z" />
                <path d="M36.6 31.1a5.6 5.6 0 0 0-5.5 5.5 5.6 5.6 0 0 0 5.5 5.6 5.6 5.6 0 0 0 5.6-5.6 5.6 5.6 0 0 0-5.6-5.5Zm0 8.9a3.3 3.3 0 0 1-3.3-3.3 3.3 3.3 0 0 1 3.3-3.4 3.3 3.3 0 0 1 3.4 3.4 3.3 3.3 0 0 1-3.4 3.3ZM1.1 15.5h1.7l.4 1L2 17.7a1.1 1.1 0 0 0 0 1.6l3.1 3.1c.5.4 1.2.4 1.6 0L8 21.2l1 .4v1.7c0 .6.5 1.1 1 1.1h4.5a1.1 1.1 0 0 0 1.1-1v-1.8a9.6 9.6 0 0 0 1-.4l1.2 1.2c.4.4 1.2.4 1.6 0l3.1-3.1a1.1 1.1 0 0 0 0-1.6l-1.2-1.2a9.6 9.6 0 0 0 .4-1h1.7a1.1 1.1 0 0 0 1.1-1V10a1.1 1.1 0 0 0-1-1.1h-1.8a9.6 9.6 0 0 0-.4-1l1.2-1.2a1.1 1.1 0 0 0 0-1.6l-3.1-3a1 1 0 0 0-1.6 0l-1.2 1.1a9.6 9.6 0 0 0-1-.4V1.1a1.1 1.1 0 0 0-1-1.1H10a1.1 1.1 0 0 0-1.1 1.1v1.7a9.6 9.6 0 0 0-1 .4L6.7 2c-.4-.4-1.1-.4-1.6 0l-3 3.1A1.1 1.1 0 0 0 2 6.7L3.2 8l-.4 1H1.1A1.1 1.1 0 0 0 0 10v4.5c0 .6.5 1.1 1.1 1.1Zm1.1-4.4h1.4c.6 0 1-.3 1.1-.8a7.7 7.7 0 0 1 .8-2 1.1 1.1 0 0 0-.1-1.4l-1-1 1.5-1.5 1 1c.4.3 1 .4 1.4.1a7.7 7.7 0 0 1 2-.8c.5-.1.8-.5.8-1V2.1h2.2v1.4c0 .6.4 1 .9 1.1a7.7 7.7 0 0 1 2 .8c.4.3 1 .2 1.3-.1l1-1 1.6 1.5-1 1a1.1 1.1 0 0 0-.2 1.4 7.7 7.7 0 0 1 .8 2c.1.5.6.8 1 .8h1.5v2.2h-1.4c-.5 0-1 .4-1 .9a7.8 7.8 0 0 1-1 2 1.1 1.1 0 0 0 .3 1.3l1 1-1.6 1.6-1-1a1.1 1.1 0 0 0-1.4-.2 7.6 7.6 0 0 1-2 .8c-.4.1-.8.6-.8 1v1.5h-2.2v-1.4c0-.5-.3-1-.8-1a7.7 7.7 0 0 1-2-1 1.1 1.1 0 0 0-1.4.3l-1 1-1.5-1.6 1-1c.3-.4.4-1 .1-1.4a7.7 7.7 0 0 1-.8-2 1.1 1.1 0 0 0-1-.8H2.1V11Z" />
                <path d="M12.2 15.5a3.3 3.3 0 0 0 3.3-3.3 3.3 3.3 0 0 0-3.3-3.4A3.3 3.3 0 0 0 9 12.2a3.3 3.3 0 0 0 3.3 3.3Zm0-4.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
              </g>
            </svg>
            Strategic HR Services
          </A>
        </div>
      </section>
      <section class={styles.goldPartner}>
        <div>
          <img prop:src={iconOracle} alt="Oracle Gold Partner" />
          As an Oracle Gold Partner, HCMS Partners commitment to clients is absolute – Our pledge is “Availability is
          not a skill set, bring the right resources to every project”. The knowledge and experience a consultant brings
          to a project makes the difference between a marginal effort and a truly successful one. These traits directly
          correlate to HCMS Partners ability to deliver project results on an on-time, on-budget basis with “no
          surprises”.
        </div>
      </section>
      <section class={styles.questions} style={{ 'background-image': `url(${ctaBG})` }}>
        <div>
          <h2>Questions? Reach out to us and we can answer them.</h2>
          <A href="contact">CONTACT US</A>
        </div>
      </section>
    </div>
  );
};
