import SemiCircularBanner from "./SemiCircularBanner";
import Marquee from "react-fast-marquee";

export default function NextJsCarousel() {
  return (
    <Marquee style={{ paddingTop: "40px" }}>
      <SemiCircularBanner
        image={"/bitfins.png"}
        text="bitfins"
        bgColor={"black"}
      />

      <SemiCircularBanner
        image={"/crypto.png"}
        text="crypto"
        bgColor={"yellow"}
      />

      <SemiCircularBanner
        image={"/futuretest.png"}
        text="futureText"
        bgColor={"green"}
      />

      <SemiCircularBanner image={"/hosky.png"} text="hosky" bgColor={"black"} />

      <SemiCircularBanner
        image={"/futuretest.png"}
        text="futuretext"
        bgColor={"grey"}
      />
    </Marquee>
  );
}
