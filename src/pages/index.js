import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { ImageTextContent } from "../components/About";
import { BrandLogo } from "../components/BrandLogo";
import { ImageCtaFirst, ImageCtaSecond, ImageCtaThird } from "../components/Cta";
import { HeroSlider } from "../components/HeroSlider";
import { LayoutHome } from "../components/Layout";
import { ProductSlider } from "../components/ProductSlider";
import brandLogoData from "../data/brand-logos/brand-logo-one.json";
import heroSliderData from "../data/hero-sliders/hero-slider-three.json";
import teamData from "../data/team-members/team-one.json";
import { getProducts } from "../lib/product";


const Home = ({ products }) => {
  return (
    <LayoutHome>

      <HeroSlider
        sliderData={heroSliderData}
        spaceBottomClass="space-mb--r100"
      />

      <ImageCtaFirst spaceBottomClass="space-mb--r100" />
      <ImageCtaSecond spaceBottomClass="space-mb--r100" />

      <ImageTextContent />

      <BrandLogo brandLogoData={brandLogoData} />

      <ProductSlider products={products} />

      <ImageCtaThird />

      <div className="team-member-area space-mb--r100">
        <Container className="wide">
          <Row className="space-mb--m30 justify-content-center">
            {teamData &&
              teamData.map((single, i) => {
                return (
                  <Col lg={3} md={4} className="space-mb--30" key={i}>
                    <div className="single-team-member single-team-member--style-square">
                      <div className="member-image">
                        <img
                          src={process.env.PUBLIC_URL + single.image}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="member-caption" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <h2 className="name" style={{ fontFamily: "cargenregular", fontSize: "45px", marginBottom: "20px" }}>{single.name}</h2>
                        <span className="subtext" style={{ fontFamily: "sailecmedium", fontSize: "18px" }}>{single.designation}</span>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>

      <div className="about-content space-mb--r100">
        <Container className="wide">
          <Row>
            <Col xl={6} lg={6} className="mr-auto" style={{ paddingLeft: "70px", paddingRight: "70px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div className="about-widget space-mb--35">
                <h2 className="widget-title space-mb--25" style={{ fontFamily: "cargenregular", fontSize: "40px", lineHeight: "initial" }}>The best time to make dreams <br />come true is now</h2>
                <p className="widget-content" style={{ fontFamily: 'sailecmedium', fontSize: "20px" }}>
                  I invite you to contact me and start <br />the exciting journey, together.
                </p>

              </div>
              <div className="mc-form">
                <button className="lezada-button lezada-button--medium">
                  Sign Up
                </button>
                <input
                  type="text"
                  placeholder="Email"
                  required
                  style={{ height: 45 }}
                />
              </div>
            </Col>
            <Col xl={6} lg={6}>
              <div className="about-page-2-image space-mb-mobile-only--50">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/yonatan-images/home_9.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </LayoutHome>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    products: getProducts(products, "jewelry", "popular", 9)
  };
};

export default connect(mapStateToProps)(Home);