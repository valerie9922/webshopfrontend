const HeroBanner = () => {
  return (
    <div className="hero">
      {/* <div className="herobanner_back"></div>
      <div className="herobanner_mask"> </div>
      <div className="herobanner_fan"> </div>
      <div className="herobanner_fan-rect3"></div>
      <div className="herobanner_fan-rect2"></div>
      <div className="herobanner_fan-image"></div>

      <div className="hero_descript hero_descript-text">
        Products for every need, at the distance of a click.
      </div> */}
      <div className="hero_text_sec">
        <p className="hero_text">
          {" "}
          Products for every need, at the distance of a click.
        </p>
      </div>
      <div className="hero_fan">
        <div className="hero_fan_rect1"></div>
        <div className="hero_fan_rect2"></div>
        <div className="hero_fan_image"></div>
      </div>
    </div>
  );
};

export { HeroBanner };
