import { Route, Router } from '@solidjs/router';
import { render } from 'solid-js/web';
import { App } from '@/App';
import { Contact } from '@/pages/Contact';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';
import { Partners } from '@/pages/Partners';
import { PrivacyPolicy } from '@/pages/PrivacyPolicy';
import { Services } from '@/pages/Services';
import { WhyChooseUs } from '@/pages/WhyChooseUs';

/* Extend Solid JSX */
declare module 'solid-js' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    type Props<T> = { [K in keyof T as `prop:${string & K}`]?: T[K] };
    type ElementProps<T> = { [K in keyof T]: Props<T[K]> & HTMLAttributes<T[K]> };
    interface IntrinsicElements extends ElementProps<HTMLElementTagNameMap> {
      button: ButtonHTMLAttributes<HTMLButtonElement> | Props<HTMLButtonElement>;
      label: LabelHTMLAttributes<HTMLLabelElement> | Props<HTMLLabelElement>;
      img: ImgHTMLAttributes<HTMLImageElement> | Props<HTMLImageElement>;
      input: InputHTMLAttributes<HTMLInputElement> | Props<HTMLInputElement>;
      textarea: TextareaHTMLAttributes<HTMLTextAreaElement> | Props<HTMLTextAreaElement>;
    }
  }
}

/* Render App & Routes */
render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/why-choose-us" component={WhyChooseUs} />
      <Route path="/services" component={Services} />
      <Route path="/partners" component={Partners} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="*" component={NotFound} />
    </Router>
  ),
  document.body
);
