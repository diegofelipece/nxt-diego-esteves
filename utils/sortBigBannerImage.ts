const sortBigBannerImage = () => {
  const images = [
    '/images/big-banner/mala.jpg',
    '/images/big-banner/panteao.jpg',
    '/images/big-banner/sao-paulo.jpg',
  ];

  const bgUrl = images[Math.floor(Math.random()*images.length)];
  return bgUrl;
}

export default sortBigBannerImage;