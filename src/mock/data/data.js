import shelterspub from '../../assets/images/shelterpub.jpeg';
import fuxia from '../../assets/images/fuxia.jpg';
import perchoir from '../../assets/images/perchoir.jpeg';
import shanghai from '../../assets/images/shanghai-pub.jpg';
import bar493 from '../../assets/images/49.3bar.jpg';

const data = {
  places: [
    {
      id: '1',
      name: 'Fuxia Saint Michel',
      image_url: fuxia,
      address: '9 Place Saint-André des Arts',
      zipcode: 75006,
      city: 'Paris',
      rate: 3,
      description: '',
      phone: '01 56 81 32 00',
      url: 'https://www.fuxia-cantina.fr/',
    },
    {
      id: '2',
      title: 'Shangai Pub',
      image_url: shanghai,
      address: '58 Avenue de la République',
      zipcode: 75011,
      city: 'Paris',
      rate: 4,
      description: 'Restaurant et bar avec tapas asiatique et cocktails pas chers',
      phone: '01 47 00 54 47',
      url: 'http://shanghai-pub.lafourchette.rest/',
    },
    {
      id: '3',
      title: '49.3 bar',
      image_url: bar493,
      address: '3 Cité de Phalsbourg',
      zipcode: 75011,
      city: 'Paris',
      rate: 4,
      description: 'Bar a bière',
      phone: '06 23 16 92 23',
      url: 'https://www.timeout.fr/paris/bars/le-49-3',
    },
    {
      id: '4',
      name: 'Le perchoir',
      image_url: perchoir,
      address: '14 Rue Crespin du Gast',
      zipcode: 75011,
      city: 'Paris',
      rate: 4,
      description: 'Bar à cocktail + rooftop',
      phone: '01 48 06 18 48',
      url: 'http://leperchoir.tv/',
    },
    {
      id: '5',
      name: 'Shelter Pub',
      image_url: shelterspub,
      address: '3 Rue de Lappe',
      zipcode: 75011,
      city: 'Paris',
      rate: 3,
      description: 'Bar avec beaucoup de places',
      phone: '01 71 19 57 29',
      url: 'http://shelterspub.zenchef.com/',
    },
  ],
};

export default data;
