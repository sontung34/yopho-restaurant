// import icons
import {
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/plate.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import MenuImg1 from '../src/assets/img/menu/1.jpg';
import MenuImg2 from '../src/assets/img/menu/2.jpg';
import MenuImg3 from '../src/assets/img/menu/3.jpg';
import MenuImg4 from '../src/assets/img/menu/4.jpg';
import SignatureImg from '../src/assets/img/team/signature.png';
import ChefImg from '../src/assets/img/team/chef.png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

export const navData = [
  { href: '/', name: 'home' },
  { href: '/', name: 'about' },
  { href: '/', name: 'menu' },
  { href: '/', name: 'team' },
  { href: '/', name: 'testimonials' },
  { href: '/', name: 'book a table' },
  { href: '/', name: 'contact' },
];

export const heroData = {
  pretitle: 'Nothing brings together like',
  title: 'Yo! Pho',
  subtitle:
    '"YO! PHO" ist ein Restaurant in Kreuzberg, das neben seinem coolen Design auch leckere fernöstliche Gerichte anbietet.',
  btnText: 'Mehr erfahren',
};

export const socialData = [
  
  { href: 'https://www.facebook.com/YOPhoBerlin', icon: <FaFacebookF /> },
  { href: 'https://www.instagram.com/yo.pho42/', icon: <FaInstagram /> },

];

export const aboutData = {
  pretitle: 'unsere Geschichte',
  title: 'Wer sind wir',
  subtitle:
    'Tung, der Eigentümer von Yo Pho, hat eine Leidenschaft für vietnamesisches Essen. Aufgewachsen in Vietnam, lernte er das Kochen von seiner Großmutter und wanderte später nach Deutschland aus. Nach vielen Jahren als Koch in verschiedenen Restaurants erfüllte er sich seinen Traum und eröffnete Yo Pho in Kreuzberg. Heute ist Yo Pho ein beliebter Treffpunkt für die Nachbarschaft und bekannt für seine authentischen Gerichte, freundlichen Service und gemütliche Atmosphäre.',
  btnText: 'Mehr Erfahren',
  image: AboutImg,
};

export const menuData = {
  title: 'Leckere Frühlingsgerichte',
  subtitle: 'Alle Gerichte für leckeres Essen heute ansehen',
  modelImg: ModelWhiteImg,
  btnText: 'Vollständiges Karte anzeigen',
  menuItems: [
    {
      image: MenuImg1,
      name: 'Curry-Reis mit gegrilltem Fisch',
      price: '12.99€',
      description: 'Reis, Currypulver, und Fischfilet.',
    },
    {
      image: MenuImg2,
      name: 'Bibimbap Bowl',
      price: '10.99€',
      description: 'gekochter Reis, Gemüse, und Rind',
    },
    {
      image: MenuImg3,
      name: 'Reis mit Tofu',
      price: '8.50€',
      description: 'Reis, Tofu, Gemüse & Söße nach Wahl',
    },
    {
      image: MenuImg4,
      name: 'Pho Bowl',
      price: '8.99€',
      description: 'dünne Reisnudeln, Rindfleisch, Zimt, Sternanis',
    },
  ],
};

export const teamData = {
  pretitle: 'unser Team',
  title: 'Unser Chefkoch',
  sub1: ' Willkommen im Yo Pho in Kreuzberg! Wir sind ein vietnamesisches Restaurant, das sich auf die köstliche Pho-Suppe spezialisiert hat. Unsere Suppe wird aus dünner Reisnudel, Rindfleisch und einer Vielzahl von aromatischen Gewürzen wie Zimt, Sternanis und Ingwer hergestellt. Wir verwenden nur die besten Zutaten, um unseren Gästen ein authentisches Geschmackserlebnis zu bieten.',
  sub2: 'Neben der Pho-Suppe bieten wir auch andere traditionelle vietnamesische Gerichte an, wie zum Beispiel Bun Bo Nam Bo oder Banh Mi. Besuchen Sie uns und lassen Sie sich von der vietnamesischen Küche verzaubern!',
  name: 'Tung Le',
  occupation: 'Chefkoch',
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "was die Kunden sagen",
  subtitle: '4.4 Sterne auf Google Maps',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        'Very nice experience: atmosphere, food, drinks everything was amazing :) big portions and very quick service! Well done',
      image: Avatar1,
      name: 'Alice Fot',
      occupation: 'Berlin, Pankow',
    },
    {
      message:
        'Really amazing food 😍 We loved everything that we ordered 😇 It has a really nice atmosphere and a lot of vegetarian options 🌱 100% recommended if you are looking for good and tasty asian food 😊',
      image: Avatar2,
      name: 'Paula Lozek',
      occupation: 'Berlin, Mitte',
    },
    {
      message:
        'Visited for lunch and had vegan seitan duck with udon noodles. Duck was outstanding taste &texture. Noodles and sauce were great too. Lovely staff and decor.        ',
      image: Avatar3,
      name: 'Aaron Reid',
      occupation: 'Berlin, Kreuzbeg',
    },
  ],
};

export const reservationData = {
  title: 'Reservierung',
  subtitle:
    'Rufe täglich von 5 bis 23 Uhr unter (030)37446704 an oder buche online bei Google Maps.',
  modelImg: ModelBlackImg,
  btnText: 'Reservieren',
};

export const newsletterData = {
  title: 'Newsletter abonnieren',
  subtitle: 'Erhalte die neuesten Nachrichten und Updates in deinem Posteingang.',
  placeholder: 'Dein Email eingeben',
  btnText: 'Abonnieren',
};

export const footerData = {
  contact: {
    title: 'Kontakt',
    address: 'Falckensteinstraße 42, 10997 Berlin',
    phone: '(030)37446704',
  },
  hours: {
    title: 'öffnungszeiten',
    program: [
      {
        days: 'montag - sonntag',
        hours: '12:00 Uhr - 24:00 Uhr',
      },
    ],
  },
  social: {
    title: 'soziales Netzwerk',
    icons: [
      { href: 'https://www.facebook.com/YOPhoBerlin', icon: <FaFacebookF /> },
      { href: 'https://www.instagram.com/yo.pho42/', icon: <FaInstagram /> },
    ],
  },
};
