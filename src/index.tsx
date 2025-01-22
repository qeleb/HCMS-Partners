import { type RouteDefinition, Router } from '@solidjs/router';
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
  namespace JSX /* eslint-disable-line @typescript-eslint/no-namespace */ {
    type OnEvents<T> = { [K in keyof T as `on${string & K}`]: string };
    type OnCustomEvents<T> = { [K in keyof T]: HTMLElement[keyof HTMLElement & K] };
    interface ExplicitAttributes extends OnEvents<GlobalEventHandlersEventMap> {}
    interface CustomEvents extends OnCustomEvents<GlobalEventHandlersEventMap> {}
    type Props<T> = { [K in keyof T as `prop:${string & K}`]?: T[K] };
    type ElementProps<T> = { [K in keyof T]: Props<T[K]> & HTMLAttributes<T[K]> };
    interface IntrinsicElements extends ElementProps<HTMLElementTagNameMap> {
      a: AnchorHTMLAttributes<HTMLAnchorElement> | Props<HTMLAnchorElement>;
      button: ButtonHTMLAttributes<HTMLButtonElement> | Props<HTMLButtonElement>;
      div: HTMLAttributes<HTMLDivElement> | Props<HTMLDivElement>;
      label: LabelHTMLAttributes<HTMLLabelElement> | Props<HTMLLabelElement>;
      img: ImgHTMLAttributes<HTMLImageElement> | Props<HTMLImageElement>;
      input: InputHTMLAttributes<HTMLInputElement> | Props<HTMLInputElement>;
      textarea: TextareaHTMLAttributes<HTMLTextAreaElement> | Props<HTMLTextAreaElement>;
    }
  }
}

/* Routes */
const routes: RouteDefinition[] = [
  { path: '/', component: Home },
  { path: '/why-choose-us', component: WhyChooseUs },
  { path: '/services', component: Services },
  { path: '/partners', component: Partners },
  { path: '/contact', component: Contact },
  { path: '/privacy-policy', component: PrivacyPolicy },
  { path: '*', component: NotFound },
];

/* Render */
render(() => <Router root={App} children={routes as any} />, document.body);
