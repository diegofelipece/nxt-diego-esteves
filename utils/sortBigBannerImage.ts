import sitePath from './sitePath';

const sortBigBannerImage = () => {
  const images = [
    sitePath('/images/big-banner/mala.jpg'),
    sitePath('/images/big-banner/panteao.jpg'),
    sitePath('/images/big-banner/sao-paulo.jpg'),
  ];

  const bgUrl = images[Math.floor(Math.random()*images.length)];
  return bgUrl;
}

export default sortBigBannerImage;