import { AboutContentProps } from "scenes/Home/data/AboutContent/index";
import { List } from "immutable";

const contentImagePencil = require("scenes/Home/scenes/About/data/images/pencil.png");
const contentImageRibbon = require("scenes/Home/scenes/About/data/images/pencil.png");
const contentImageHat = require("scenes/Home/scenes/About/data/images/pencil.png");

let AboutContentList = List<AboutContentProps>();

AboutContentList = AboutContentList.push(
  new AboutContentProps({
    contentID: 1,
    contentImage: contentImageRibbon.src,
    contentTitle: "Do not wait more",
    contentDescription: "언제, 어디서나 당신은 훌륭한 그림책 작가가 될 수 있습니다. 지금 토링과 함께하세요."
  })
)

AboutContentList = AboutContentList.push(
  new AboutContentProps({
    contentID: 2,
    contentImage: contentImagePencil.src,
    contentTitle: "Just choose and create.",
    contentDescription: "토링은 복잡하지 않습니다. 토링에는 글 작가와 그림 작가들이 협업자를 기다리고 있습니다. 마음에 드는 작가와 함께 작품을 완성하고 토링의 독자들과 만나세요."
  })
)

AboutContentList = AboutContentList.push(
  new AboutContentProps({
    contentID: 2,
    contentImage: contentImagePencil.src,
    contentTitle: "Life comes story, Story comes life",
    contentDescription: "토링은 당신의 특별한 삶을 이야기로 만들어 드립니다. 당신의 이야기로 더 많은 사람들에게 특별한 삶을 선물해주세요"
  })
)

export default AboutContentList;
