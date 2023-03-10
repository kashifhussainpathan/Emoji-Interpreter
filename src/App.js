import { useState } from "react";
import "./styles.css";

const emojiDictonary = {
  "๐": "Grinning Face",
  "๐": "Grinning Face with Smiling Eyes",
  "๐": "Beaming Face with Smiling Eyes",
  "๐": "Grinning Squinting Face",
  "๐": "Grinning Face with Sweat",
  "๐คฃ": "Rolling on the Floor Laughing",
  "๐": "Face with Tears of Joy",
  "๐": "Slightly Smiling Face",
  "๐": "Upside-Down Face",
  "๐ซ ": "Melting Face",
  "๐": "Winking Face",
  "๐": "Smiling Face with Smiling Eyes",
  "๐": "Smiling Face with Halo",
  "๐ฅฐ": "Smiling Face with Hearts",
  "๐": "Smiling Face with Heart-Eyes",
  "๐คฉ": "Star-Struck",
  "๐": "Face Blowing a Kiss",
  "๐": "Kissing Face",
  "๐": " Kissing Face with Closed Eyes",
  "๐": " Kissing Face with Smiling Eyes",
  "๐ฅฒ": " Smiling Face with Tear",
  "๐": " Face Savoring Food",
  "๐": " Face with Tongue",
  "๐": " Winking Face with Tongue",
  "๐คช": " Zany Face",
  "๐": " Squinting Face with Tongue",
  "๐ค": " Money-Mouth Face",
  "๐ค": " Smiling Face with Open Hands",
  "๐คญ": " Face with Hand Over Mouth",
  "๐ซข": " Face with Open Eyes and Hand Over Mouth",
  "๐ซฃ": " Face with Peeking Eye",
  "๐คซ": " Shushing Face",
  "๐ค": " Thinking Face",
  "๐ซก": " Saluting Face",
  "๐ค": " Zipper-Mouth Face",
  "๐คจ": " Face with Raised Eyebrow",
  "๐": " Neutral Face",
  "๐": " Expressionless Face",
  "๐ถ": " Face Without Mouth",
  "๐ซฅ": " Dotted Line Face",
  "๐ถโ๐ซ ": "Face in Clouds",
  "๐": " Smirking Face",
  "๐": " Unamused Face",
  "๐": " Face with Rolling Eyes",
  "๐ฌ": " Grimacing Face",
  "๐ฎโ๐จ": " Face Exhaling",
  "๐คฅ": " Lying Face",
  "๐": " Relieved Face",
  "๐": " Pensive Face",
  "๐ช": " Sleepy Face",
  "๐คค": "Drooling Face",
  "๐ด": " Sleeping Face",
  "๐ท": " Face with Medical Mask",
  "๐ค": " Face with Thermometer",
  "๐ค": " Face with Head-Bandage",
  "๐คข": " Nauseated Face",
  "๐คฎ": " Face Vomiting",
  "๐คง": " Sneezing Face",
  "๐ฅต": " Hot Face",
  "๐ฅถ": " Cold Face",
  "๐ฅด": " Woozy Face",
  "๐ต": " Face with Crossed-Out Eyes",
  "๐ตโ๐ซ": "Face with Spiral Eyes",
  "๐คฏ": "Exploding Head",
  "๐ค ": "Cowboy Hat Face",
  "โ ": "Partying Face",
  "๐ฅธ": " Disguised Face",
  "๐": "Smiling Face with Sunglasses",
  "๐ค": "Nerd Face",
  "๐ง": "Face with Monocle",
  "๐": "Confused Face",
  "๐ซค": "Face with Diagonal Mouth",
  "๐": "Worried Face",
  "๐": "Slightly Frowning Face",
  "โน": "Frowning Face",
  "๐ฎ": "Face with Open Mouth",
  "๐ฏ": "Hushed Face",
  "๐ฒ": "Astonished Face",
  "๐ณ": "Flushed Face",
  "๐ฅบ": "Pleading Face",
  "๐ฅน": "Face Holding Back Tears",
  "๐ฆ": "Frowning Face with Open Mouth",
  "๐ง": "Anguished Face",
  "๐จ": "Fearful Face",
  "๐ฐ": "Anxious Face with Sweat",
  "๐ฅ": " Sad but Relieved Face",
  "๐ข": "Crying Face",
  "๐": "Love Letter",
  "๐ณ๏ธ": "Hole",
  "๐ฃ": "Bomb",
  "๐": "Person Taking Bath",
  "๐": "Person in Bed",
  "๐ช": "Kitchen Knife",
  "๐บ": "Amphora",
  "๐บ๏ธ": "World Map",
  "๐งญ": "Compass",
  "๐งฑ": "Brick",
  "๐": "Barber Pole",
  "๐ฐ": "Potable Water ",
  "๐ฌ": " Microscope",
  "๐ญ": " Telescope",
  "๐ก": " Satellite Antenna",
  "๐": " Syringe",
  "๐ฉธ": " Drop of Blood",
  "๐": " Pill",
  "๐ฉน ": "Adhesive Bandage",
  "๐ฉผ": " Crutch",
  "๐ฉบ": " Stethoscope",
  "๐ช": " Door",
  "๐ช": " Mirror",
  "๐ช": " Window",
  "๐": "Bed",
  "๐": " Couch and Lamp",
  "๐ช": " Chair",
  "๐ฝ": " Toilet",
  "๐ช ": " Plunger",
  "๐ฟ": " Shower",
  "๐": " Bathtub",
  "๐ชค": " Mouse Trap",
  "๐ช": " Razor",
  "๐งด": " Lotion Bottle",
  "๐งท": " Safety Pin",
  "๐งน": " Broom",
  "๐งบ": "Basket",
  "๐งป": " Roll of Paper",
  "๐ชฃ": " Bucket",
  "๐งผ": "Soap",
  "๐ชฅ": " Toothbrush",
  "๐งฝ": "Sponge",
  "๐งฏ": "Fire Extinguisher",
  "๐": " Shopping Cart",
  "๐ฌ": "Cigarette",
  "โฐ": "Coffin",
  "๐ชฆ": "Headstone",
  "โฑ": "Funeral Urn",
  "๐ฟ": "Moai",
  "๐ชง": "Placard",
  "๐ชช": "Identification Card",
  "๐ฐ": "Potableย Water"
};

var emojiWeKnow = Object.keys(emojiDictonary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictonary[userInput];
    setMeaning(meaning);
    if (meaning === undefined) {
      meaning = "We don't have this in our Database.";
    }
  }
  function emojiClick(emoji) {
    var meaning = emojiDictonary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Emoji Interpreter </h1>
      <input onChange={onChangeHandler} />
      <div className="meaning"> {meaning} </div>
      <h2> Emoji We Know </h2>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClick(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
