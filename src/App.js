import { useState } from "react";
import "./styles.css";

const emojiDictonary = {
  "😀": "Grinning Face",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "🫠": "Melting Face",
  "😉": "Winking Face",
  "😚": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😙": "Kissing Face",
  "😚": " Kissing Face with Closed Eyes",
  "😙": " Kissing Face with Smiling Eyes",
  "🥲": " Smiling Face with Tear",
  "😋": " Face Savoring Food",
  "😛": " Face with Tongue",
  "😜": " Winking Face with Tongue",
  "🤪": " Zany Face",
  "😝": " Squinting Face with Tongue",
  "🤑": " Money-Mouth Face",
  "🤗": " Smiling Face with Open Hands",
  "🤭": " Face with Hand Over Mouth",
  "🫢": " Face with Open Eyes and Hand Over Mouth",
  "🫣": " Face with Peeking Eye",
  "🤫": " Shushing Face",
  "🤔": " Thinking Face",
  "🫡": " Saluting Face",
  "🤐": " Zipper-Mouth Face",
  "🤨": " Face with Raised Eyebrow",
  "😐": " Neutral Face",
  "😑": " Expressionless Face",
  "😶": " Face Without Mouth",
  "🫥": " Dotted Line Face",
  "😶‍🌫 ": "Face in Clouds",
  "😏": " Smirking Face",
  "😒": " Unamused Face",
  "🙄": " Face with Rolling Eyes",
  "😬": " Grimacing Face",
  "😮‍💨": " Face Exhaling",
  "🤥": " Lying Face",
  "😌": " Relieved Face",
  "😔": " Pensive Face",
  "😪": " Sleepy Face",
  "🤤": "Drooling Face",
  "😴": " Sleeping Face",
  "😷": " Face with Medical Mask",
  "🤒": " Face with Thermometer",
  "🤕": " Face with Head-Bandage",
  "🤢": " Nauseated Face",
  "🤮": " Face Vomiting",
  "🤧": " Sneezing Face",
  "🥵": " Hot Face",
  "🥶": " Cold Face",
  "🥴": " Woozy Face",
  "😵": " Face with Crossed-Out Eyes",
  "😵‍💫": "Face with Spiral Eyes",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "☠": "Partying Face",
  "🥸": " Disguised Face",
  "😎": "Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "🧐": "Face with Monocle",
  "😕": "Confused Face",
  "🫤": "Face with Diagonal Mouth",
  "😟": "Worried Face",
  "🙁": "Slightly Frowning Face",
  "☹": "Frowning Face",
  "😮": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😲": "Astonished Face",
  "😳": "Flushed Face",
  "🥺": "Pleading Face",
  "🥹": "Face Holding Back Tears",
  "😦": "Frowning Face with Open Mouth",
  "😧": "Anguished Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": " Sad but Relieved Face",
  "😢": "Crying Face",
  "💌": "Love Letter",
  "🕳️": "Hole",
  "💣": "Bomb",
  "🛀": "Person Taking Bath",
  "🛌": "Person in Bed",
  "🔪": "Kitchen Knife",
  "🏺": "Amphora",
  "🗺️": "World Map",
  "🧭": "Compass",
  "🧱": "Brick",
  "💈": "Barber Pole",
  "🚰": "Potable Water ",
  "🔬": " Microscope",
  "🔭": " Telescope",
  "📡": " Satellite Antenna",
  "💉": " Syringe",
  "🩸": " Drop of Blood",
  "💊": " Pill",
  "🩹 ": "Adhesive Bandage",
  "🩼": " Crutch",
  "🩺": " Stethoscope",
  "🚪": " Door",
  "🪞": " Mirror",
  "🪟": " Window",
  "🛏": "Bed",
  "🛋": " Couch and Lamp",
  "🪑": " Chair",
  "🚽": " Toilet",
  "🪠": " Plunger",
  "🚿": " Shower",
  "🛁": " Bathtub",
  "🪤": " Mouse Trap",
  "🪒": " Razor",
  "🧴": " Lotion Bottle",
  "🧷": " Safety Pin",
  "🧹": " Broom",
  "🧺": "Basket",
  "🧻": " Roll of Paper",
  "🪣": " Bucket",
  "🧼": "Soap",
  "🪥": " Toothbrush",
  "🧽": "Sponge",
  "🧯": "Fire Extinguisher",
  "🛒": " Shopping Cart",
  "🚬": "Cigarette",
  "⚰": "Coffin",
  "🪦": "Headstone",
  "⚱": "Funeral Urn",
  "🗿": "Moai",
  "🪧": "Placard",
  "🪪": "Identification Card",
  "🚰": "Potable Water"
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
