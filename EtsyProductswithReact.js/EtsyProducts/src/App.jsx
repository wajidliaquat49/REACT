import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const heading = "Shop Our Popular Gift Categories";
const etsyProduts = [
  {
    image:
      "https://i.etsystatic.com/14987170/r/il/5757f8/1935725966/il_340x270.1935725966_mi2k.jpg ",
    name: "Anniversary gifts ",
    rate: "Rate:05$",
    key: 1,
  },
  {
    image:
      "https://i.etsystatic.com/14980522/r/il/8746e6/5806724446/il_340x270.5806724446_jqg8.jpg ",
    name: "Gifts for him ",
    rate: "Rate:03$",
    key: 2,
  },
  {
    image:
      "https://i.etsystatic.com/6103559/r/il/e20b70/4673812220/il_340x270.4673812220_sjxw.jpg ",
    name: "Gifts for her ",
    rate: "Rate:06$",
    key: 3,
  },
  {
    image:
      "https://i.etsystatic.com/6322679/r/il/6e2e53/1668127003/il_340x270.1668127003_kwjn.jpg ",
    name: "Personalised gift ideas ",
    rate: "Rate:04$",
    key: 4,
  },
  {
    image:
      "https://i.etsystatic.com/19458228/r/il/6a09b4/1985966876/il_340x270.1985966876_fmhi.jpg ",
    name: "Wedding Gifts ",
    rate: "Rate:08$",
    key: 5,
  },
  {
    image:
      "https://i.etsystatic.com/14409281/c/1667/1325/0/776/il/d35190/2415639737/il_340x270.2415639737_r19o.jpg ",
    name: "Couple Dolls ",
    rate: "Rate:1.8$",
    key: 6,
  },
  {
    image:
      "https://i.etsystatic.com/6841042/r/il/2a2c66/4602882227/il_340x270.4602882227_16bk.jpg ",
    name: "Ace Of Hearts ",
    rate: "Rate:1.8$",
    key: 7,
  }, {
    image:
      "https://i.etsystatic.com/25736608/c/1954/1553/467/534/il/d66dcb/3209963287/il_340x270.3209963287_1a0j.jpg ",
    name: "Leather Milano ",
    rate: "Rate:1.8$",
    key: 8,
  }, {
    image:
      "https://i.etsystatic.com/7976576/r/il/f59282/4844945042/il_340x270.4844945042_a7ve.jpg ",
    name: "Custom Couple ",
    rate: "Rate:1.8$",
    key: 9,
  }, {
    image:
      "https://i.etsystatic.com/5973917/r/il/bd948e/4833372093/il_340x270.4833372093_edkb.jpg ",
    name: "Wooden Origami Clock ",
    rate: "Rate:1.8$",
    key: 10,
  },
  {
    image:
      "https://i.etsystatic.com/10728836/c/960/762/0/295/il/3b2e5a/6049612314/il_340x270.6049612314_cjuh.jpg ",
    name: "TableClothes ",
    rate: "Rate:1.8$",
    key: 11,
  },
  {
    image:
      "https://i.etsystatic.com/16947695/r/il/205396/3545239327/il_340x270.3545239327_6o90.jpg ",
    name: "Name Cufflinks ",
    rate: "Rate:1.8$",
    key: 12,
  }, {
    image:
      "https://i.etsystatic.com/52484195/c/1707/1355/0/811/il/d226d8/6114346782/il_340x270.6114346782_9yq7.jpg ",
    name: "Bread Pot",
    rate: "Rate:1.8$",
    key: 13,
  }, {
    image:
      "https://i.etsystatic.com/19043294/c/1666/1324/676/847/il/94499e/2960583695/il_340x270.2960583695_jqkz.jpg ",
    name: "Pearl Ring ",
    rate: "Rate:1.8$",
    key: 14,
  }, {
    image:
      "https://i.etsystatic.com/18237453/c/1562/1241/193/434/il/331860/4052095608/il_340x270.4052095608_ckn2.jpg ",
    name: "Handwritten Board ",
    rate: "Rate:1.8$",
    key: 15,
  },
  {
    image:
      "https://i.etsystatic.com/7979441/c/1057/840/406/438/il/7de34c/5329222141/il_340x270.5329222141_5gyc.jpg",
    name: "Golden Ring",
    rate: "Rate:1.8$",
    key: 16,
  },
  {
    image:
      "https://i.etsystatic.com/19129317/r/il/138f52/5838372449/il_340x270.5838372449_s44g.jpg",
    name: "Coffee Mug ",
    rate: "Rate:1.8$",
    key: 17,
  }, {
    image:
      "https://i.etsystatic.com/8683017/r/il/5b0f94/6146334591/il_340x270.6146334591_85vl.jpg ",
    name: "Signet Ring",
    rate: "Rate:1.8$",
    key: 18,
  }, {
    image:
      "https://i.etsystatic.com/15586821/r/il/228ffc/6091522087/il_340x270.6091522087_tm7x.jpg",
    name: "Wooden Bowl ",
    rate: "Rate:1.8$",
    key: 19,
  }, {
    image:
      "https://i.etsystatic.com/39255445/c/2678/2129/137/583/il/90aee9/4801354043/il_340x270.4801354043_j4tq.jpg ",
    name: "Martini Glasses ",
    rate: "Rate:1.8$",
    key: 20,
  },
];

function App() {
  return (
    <div>
      <h1 className="productsHeading">{heading}</h1>

      <div className="main">
        {etsyProduts.map((data) => (
          <div className="parentProducts">
            <div class="product-card" key={data.key}>
              <img src={data.image} className="images" />
              <h2 class="product-name"> {data.name}</h2>
              <span class="product-rate">{data.rate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
