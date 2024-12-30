import LocationSrc from '../../../../assets/images/titleImg.png';

const Title = () => {
  return (
    <div className="absolute top-2/4 left-2/4 ml-[-120px] transform -translate-y-1/2">
      <img className="h-[40px]" src={LocationSrc}></img>
    </div>
  );
};
export default Title;
