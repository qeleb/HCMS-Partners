import styles from '@/components/Sections/Sections.module.scss';

export const SectionServicesList = () => (
  <section class={`${styles.section} ${styles.sectionServicesList}`}>
    <h2 id="hcm-and-ebs">Oracle HCM Cloud & EBS Services</h2>
    <div class={`${styles.grid} ${styles.gridServices}`}>
      <div>
        <svg viewBox="0 0 40 40">
          <path d="M36 29.2h-8.2a1.2 1.2 0 1 0 0 2.4H33c-3.3 3.8-8 6-13.1 6-9.7 0-17.5-8-17.5-17.6A1.2 1.2 0 1 0 0 20a20 20 0 0 0 34.7 13.6v5a1.2 1.2 0 1 0 2.4 0v-8.2c0-.7-.5-1.2-1.2-1.2M40 20a1.2 1.2 0 0 1-2.4 0A17.6 17.6 0 0 0 7 8.2h5.7a1.2 1.2 0 0 1 0 2.4H4.5c-.7 0-1.2-.5-1.2-1.2V1.2a1.2 1.2 0 1 1 2.4 0V6A20 20 0 0 1 40 20" />
        </svg>
        <h3>Implementations & Upgrades</h3>
      </div>
      <div>
        <svg viewBox="0 0 36 43">
          <path d="M16.6 40.5V26.3c0-1.1-1-2.1-2.1-2.1l-12.1.1 17-21.5V17c0 1.2 1 2.1 2.1 2.1l12.1-.1-17 21.5ZM35.8 18a2.3 2.3 0 0 0-2.1-1.3h-12V2.8c0-1-.5-1.8-1.5-2.1-.9-.4-1.9 0-2.5.7L.5 22.9c-.6.6-.7 1.6-.3 2.4.4.8 1.2 1.3 2.1 1.3h12v13.9c0 1 .5 1.8 1.5 2.1l.7.2c.7 0 1.4-.3 1.8-.9l17.2-21.5c.6-.6.7-1.6.3-2.4Z" />
        </svg>
        <h3>Optimization</h3>
      </div>
      <div>
        <svg viewBox="0 0 43 40">
          <path d="M40.6 11c0-4.3-3.5-7.8-7.8-7.8H10.2A7.8 7.8 0 0 0 2.4 11v18c0 4.4 3.5 7.8 7.8 7.8h22.6c4.3 0 7.8-3.4 7.8-7.7V11Zm2.4 0v18c0 5.7-4.6 10.3-10.2 10.3H10.2C4.6 39.3 0 34.7 0 29V11C0 5.3 4.6.7 10.2.7h22.6C38.4.8 43 5.4 43 11Zm-6.7 10.2c0 .7-.5 1.2-1.2 1.2h-6.9l-4 6.2a1.2 1.2 0 0 1-2.2-.4l-2.8-12.4-2.9 6c-.2.4-.6.6-1 .6H7.8A1.2 1.2 0 0 1 8 20h6.6l4-8.4c.2-.4.7-.7 1.2-.7.5.1 1 .5 1 1l3 13 2.8-4.3c.3-.4.6-.6 1-.6h7.6c.7 0 1.2.6 1.2 1.2Z" />
        </svg>
        <h3>Health Checks</h3>
      </div>
      <div>
        <svg viewBox="0 0 34 42">
          <path d="M31.7 30.6c0 1.5-1.3 2.7-2.8 2.7h-7V23.1a4 4 0 0 0-1.1-2.6l-5-5a4 4 0 0 0-2.6-1H8.8V8.8c0-1.5 1.3-2.7 2.8-2.7h.5v1.5c0 1.7 1.4 3 3.2 3h10a3 3 0 0 0 3-3V6h.6c1.5 0 2.8 1.2 2.8 2.7v21.8Zm-12.2 5.8c0 1.3-1.1 2.4-2.5 2.4H4.8a2.5 2.5 0 0 1-2.5-2.4v-17c0-1.5 1.2-2.6 2.5-2.6h8.4c.4 0 .7.2 1 .4l5 5c.2.2.3.5.3.9v13.3ZM14.5 6H26v1.5c0 .4-.3.8-.8.8h-10a.8.8 0 0 1-.7-.8V6Zm5.7-3.8c1 0 1.9.6 2.3 1.5H18c.4-.9 1.2-1.5 2.2-1.5ZM29 3.8h-4a4.9 4.9 0 0 0-9.5 0h-4a5 5 0 0 0-5 5v5.7H4.8A4.8 4.8 0 0 0 0 19.3v17c0 2.7 2.2 4.9 4.8 4.9H17c2.7 0 4.8-2.2 4.8-4.8v-.8H29a5 5 0 0 0 5.1-5V8.8a5 5 0 0 0-5-5Z" />
        </svg>
        <h3>Functional & Technical Training</h3>
      </div>
      <div>
        <svg viewBox="0 0 48 33">
          <path d="m38 27.3 3.1 2.3a1.3 1.3 0 0 1-1.3 2.3l-6.1-3.8c-.6-.35-.84-1.1-.5-1.74l3.5-7.2a1.3 1.3 0 0 1 2.4 1.2l-2.4 5a9.76 9.76 0 1 0-11.76-9.54c0 6.84-5.6 12.4-12.4 12.4A12.4 12.4 0 0 1 0 16.3C0 10.8 3.64 6 8.65 4.5l-3.5-2A1.3 1.3 0 0 1 6.5.2l6.65 3.84c.6.35.84 1.11.5 1.74L10.2 13a1.3 1.3 0 1 1-2.4-1.2l2.45-5a9.8 9.8 0 0 0-7.55 9.48 9.8 9.8 0 0 0 19.5 0 12.4 12.4 0 0 1 24.85 0 12.38 12.38 0 0 1-9 12" />
        </svg>
        <h3>Continuation Services (Managed Services)</h3>
      </div>
      <div>
        <svg viewBox="0 0 39 41">
          <path d="M26.8 30a2.5 2.5 0 1 1 5 0 2.5 2.48 0 0 1-5 0Zm-9.8 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-9.8 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm19.6-8a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-9.8 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-9.8 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm29-9.6H2.9V9a3.2 3.2 0 0 1 3.2-3.2h2.3v1.4a1.2 1.2 0 0 0 2.4 0V5.7h17.5v1.4a1.2 1.2 0 0 0 2.4 0V5.7h2.3a3.2 3.2 0 0 1 3.2 3.2v3.55Zm0 22.64a3.2 3.2 0 0 1-3.2 3.2H6a3.2 3.2 0 0 1-3.2-3.2V14.8h33.25v20.26Zm-3.2-31.8h-2.3V1.8a1.2 1.2 0 1 0-2.4 0v1.5H10.7V1.8a1.2 1.2 0 1 0-2.4 0v1.5H6A5.6 5.6 0 0 0 .5 9v26.2c0 3 2.5 5.6 5.6 5.6h27c3 0 5.6-2.5 5.6-5.6V8.85c0-3-2.5-5.6-5.6-5.6Z" />
        </svg>
        <h3>Production & Year End Support</h3>
      </div>
    </div>

    <h2 id="dev-and-integration">Development & Integration Services</h2>
    <div class={`${styles.grid} ${styles.gridServices}`}>
      <div>
        <svg viewBox="0 0 45 26">
          <path d="M36.6 3.9a1.4 1.4 0 0 0-2 2l5.5 5.5H25l-7.7-9A6.2 6.2 0 0 0 12.5 0h-11a1.4 1.4 0 0 0 0 2.9h11c1 0 1.9.4 2.5 1l7.3 8.8-7.3 8.8c-.6.7-1.6 1.2-2.5 1.2h-11a1.4 1.4 0 0 0 0 2.8h11c1.8 0 3.5-.8 4.7-2.2l7.7-9.2H40l-5.5 5.5a1.4 1.4 0 1 0 2 2l8-8c.5-.5.5-1.4 0-2l-8-7.9Z" />
        </svg>
        <h3>Conversion</h3>
      </div>
      <div>
        <svg viewBox="0 0 52 35">
          <path d="M44.8 31.4h-6V17c0-.5.4-.9.8-1H44c.5 0 1 .4 1 1v14.3Zm-15.7 0H23V3.6c0-.5.4-1 1-1h4.4c.5 0 1 .5 1 1v28Zm-15.7 0H7V15c0-.5.4-1 1-1h4.5c.4 0 .8.5.8 1v16.6Zm37.3 0h-3V17c0-2-1.6-3.6-3.6-3.6h-4.5c-2 0-3.5 1.7-3.5 3.6v14.4h-4V3.6c0-2-1.7-3.6-3.7-3.6h-4.4c-2 0-3.6 1.6-3.6 3.6v28h-4V15c0-2-1.7-3.6-3.6-3.6H8c-2 0-3.6 1.6-3.6 3.6v16.6H1.3a1.3 1.3 0 1 0 0 2.7h49.4a1.3 1.3 0 1 0 0-2.7Z" />
        </svg>
        <h3>Reporting & Analytics</h3>
      </div>
      <div>
        <svg viewBox="0 0 33 30">
          <path d="M32 27H1.2a1.2 1.15 0 1 0 0 2.3h30.7a1.15 1.15 0 1 0 0-2.3m-30.7-6.65h19.6a1.15 1.15 0 1 0 0-2.3H1.1a1.15 1.15 0 1 0 0 2.3m0-9h30.7a1.15 1.15 0 1 0 0-2.3H1.15a1.15 1.15 0 1 0 0 2.3M0 1.15C0 .52.51 0 1.15 0h19.6a1.15 1.15 0 1 1 0 2.3H1.14C.51 2.3 0 1.8 0 1.15" />
        </svg>
        <h3>EBS Smartloader</h3>
      </div>
      <div>
        <svg viewBox="0 0 39 27">
          <path d="M18 21c-.3-.5-1-.6-1.5-.35l-1.5.75v-1.5c0-.5-.5-1-1.1-1-.6 0-1.08.4-1.1.94v1.5l-1.5-.75a1.2 1.2 0 0 0-1.5.34c-.3.45-.1 1 .4 1.3l1.52.75-1.5.75c-.5.26-.7.84-.4 1.3.2.3.6.5.95.5.3 0 .4-.04.54-.1l1.5-.8v1.5c0 .5.5.94 1.2.94.6 0 1-.4 1-1v-1.5l1.5.75c.17.1.36.1.55.1.4 0 .74-.16.94-.5.3-.44.1-1-.4-1.3l-1.5-.75 1.5-.75c.5-.26.7-.84.4-1.3m11.2 0c-.3-.45-.96-.6-1.5-.34l-1.5.75v-1.5c0-.5-.5-.94-1.1-.94-.6 0-1.1.4-1.1.94v1.5l-1.5-.75c-.5-.26-1.2-.1-1.5.34-.3.45-.1 1 .4 1.3l1.5.75-1.5.75c-.5.26-.7.84-.4 1.3.2.3.6.5.94.5.2 0 .4-.04.54-.1l1.5-.8v1.5c0 .5.5.94 1.2.94.6 0 1.1-.4 1.1-.94v-1.5l1.5.75c.2.1.36.1.55.1.4 0 .74-.2.94-.5.3-.44.1-1-.4-1.3l-1.5-.75 1.5-.75c.5-.26.7-.84.4-1.3m9.3-5c0 3.2-2 6-5.4 7.5-.15.1-.3.1-.5.1-.4 0-.8-.2-.98-.5-.3-.46-.05-1 .5-1.26 2.6-1.1 4.16-3.3 4.16-5.8 0-3.6-3.4-6.5-7.56-6.5h-2.5c-.46 0-.9-.25-1-.6-1.65-4-6.15-6.8-11.2-6.8-6.6 0-11.9 4.6-11.9 10.24 0 3.34 1.9 6.47 5 8.4.5.3.6.9.3 1.3-.34.4-1 .5-1.5.2C2.24 19.8 0 16 0 12 0 5.44 6.3 0 14 0c5.7 0 10.85 3 13 7.45h1.74c5.4 0 9.74 3.8 9.74 8.4" />
        </svg>
        <h3>Integrations</h3>
      </div>
      <div>
        <svg viewBox="0 0 46.5 47">
          <path d="M38 14.7a6 6 0 1 1 0-12.4 6.7 6.3 0 0 1 0 12.5M24.1 36.4a4.2 4.2 0 1 1 0 8.3 4.2 4.2 0 0 1 0-8.3M6.4 18.1a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4M37.5 0a8.5 8.5 0 0 0-6.8 13.6l-7.1 7.3a4.5 4.5 0 0 0-4.7.4l-6.7-4.8c.4-.8.6-1.7.6-2.6a6.4 6.4 0 1 0-2.2 4.8l6.7 4.8c-.2.4-.2.9-.2 1.4 0 2.2 1.6 4 4.3 4.4l.9 5.3a6.4 6.4 0 1 0 2.6-.4l-.9-5.3a4.5 4.5 0 0 0 2-6.1l7-7.4a8.5 8 0 0 0 13.4-7C46 4 42.2 0 37.5 0" />
        </svg>
        <h3>Apex Development</h3>
      </div>
      <div>
        <svg viewBox="0 0 44 52">
          <path d="M9.8 32.1a3.7 3.7 0 0 1-3.7-3.4L4.4 7.4A3.72 3.72 0 0 1 8.1 3.3l5.1.0c1 0 1.94.4 2.7 1.1l3 3a7 7 0 0 0 5 2H36a3.7 3.7 0 0 1 3.7 4l-1 15.2a3.7 3.7 0 0 1-3.7 3.4H9.8Zm32.5 12.6H27A5.5 5.5 0 0 0 23.7 41v-5.6h11.1c3.7 0 6.7-2.8 7-6.4l1-15A7.1 7.1 0 0 0 35.9 6.1H23.8c-1 0-2-.4-2.7-1.1l-3-3a7 7 0 0 0-5-2H8.1a7 7 0 0 0-7 7.7L2.8 29a7 7 0 0 0 7 6.4h10.54V41a5.5 5.5 0 0 0-3.6 3.7H1.66a1.65 1.65 0 1 0 0 3.3H16.8a5.5 5.5 0 0 0 10.4 0h15a1.65 1.65 0 1 0 0-3.3Z" />
        </svg>
        <h3>Java Development</h3>
      </div>
    </div>

    <h2 id="strategic-hr">Strategic HR Services</h2>
    <div class={`${styles.grid} ${styles.gridServices}`}>
      <div>
        <svg viewBox="0 0 40 41">
          <path d="M37 37.5a2.8 2.8 0 0 1-2.2 1H5c-.8 0-1.6-.4-2-1a2.4 2.4 0 0 1-.5-2.1A18 18 0 0 1 20 21.6c8.34 0 15.6 5.7 17.6 13.7a2.4 2.4 0 0 1-.5 2.1M11.56 10.8a8.4 8.4 0 0 1 16.9 0 8.4 8.4 0 0 1-17 0m28.3 24a20.4 20.4 0 0 0-14.2-14.8 10.8 10.8 0 1 0-11.3 0A20.4 20.4 0 0 0 .1 34.8a4.8 4.8 0 0 0 1 4 5 5 0 0 0 4 2h30c1.6 0 3-.7 4-2a4.8 4.8 0 0 0 .9-4" />
        </svg>
        <h3>Advisory Services</h3>
      </div>
      <div>
        <svg viewBox="0 0 45 49">
          <path d="M30.7 7.7a19.8 19.8 0 0 1 11.3 20.5 1.4 1.4 0 0 0 2.8.35A22.6 22.6 0 0 0 31.9 5.1a1.4 1.4 0 1 0-1.2 2.55m2.6 34.4a20 20 0 0 1-21.7 0 1.4 1.4 0 0 0-1.5 2.3 22.55 22.55 0 0 0 24.7 0 1.4 1.4 0 1 0-1.5-2.3M1.6 30l.2-0a1.4 1.4 0 0 0 1.2-1.6A19.7 19.7 0 0 1 14.3 7.7a1.4 1.4 0 0 0-1.2-2.55A22.5 22.5 0 0 0 .2 28.5a1.4 1.4 0 0 0 1.4 1.2m42 3.7a4.5 4.5 0 1 0-6 6.6 4.5 4.5 0 0 0 6-6.64m-35.7 0a4.5 4.5 0 1 0-6 6.64 4.5 4.5 0 0 0 6-6.64M19.2 1.46a4.5 4.5 0 1 1 6.64 6 4.5 4.5 0 0 1-6.64-6" />
        </svg>
        <h3>Process Re-engineering</h3>
      </div>
      <div>
        <svg viewBox="0 0 42 42">
          <path d="M24.5 39.3a30 30 0 0 0 0-36.6A18.8 18.8 0 0 1 39.6 21c0 8.8-6.4 16.7-15.1 18.3m-3.5 0c-5.5-4.2-7.3-12-7.2-18.7 0-3.6.6-7.2 2-10.6a20.9 20.9 0 0 1 4.4-6.7c.6-.6.6-.6 1.4-.2 2.3 1.5 4 5.1 4.9 7.6 1.2 3.4 1.8 7 1.7 10.7 0 6.3-2 13.9-7.2 18M2.4 21c0-8.8 6.4-16.6 15-18.3a29.8 29.8 0 0 0 0 36.6A18.8 18.8 0 0 1 2.5 21M21 0C12.3 0 4.2 5.6 1.2 13.8c-3 8.5-.2 18.2 6.9 23.8a21 21 0 0 0 23.2 1.7C39 35 43.3 26 41.7 17.2A21.2 21.2 0 0 0 21 0" />
        </svg>
        <h3>Aquisition Planning</h3>
      </div>
    </div>
  </section>
);
