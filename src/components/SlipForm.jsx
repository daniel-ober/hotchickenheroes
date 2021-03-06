import axios from "axios";
import { useState } from "react";
import { baseURL, config } from "../services";
import { useHistory } from "react-router-dom";

function NewSlip(props) {
  const [team, setTeam] = useState("");
  const [category, setCategory] = useState("");
  const [appearance, setAppearance] = useState("");
  const [taste, setTaste] = useState("");
  const [tenderness, setTenderness] = useState("");
  const [comments, setComments] = useState("");
  const [imageURL, setImageURL] = useState("");
  const histroy = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      team,
      category,
      appearance,
      taste,
      tenderness,
      comments,
      imageURL,
    };
    await axios.post(baseURL, { fields }, config);
    props.setToggleFetch((curr) => !curr);
    histroy.push("/");
  };

  return (
    <form className="slip-form" onSubmit={handleSubmit}>
      <h6>Please fill out your score details below!</h6>
      <input
        id="contestant"
        type="text"
        value={team}
        placeholder="Restaurant Name"
        onChange={(e) => setTeam(e.target.value)}
        required
      />
      <br />
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="" disabled selected>
          Heat Level
        </option>
        <option value="Mild">Mild</option>
        <option value="Medium">Medium</option>
        <option value="Hot">Hot</option>
      </select>
      <br />
      <select
        id="appearance"
        value={appearance}
        onChange={(e) => setAppearance(e.target.value)}
        required
      >
        <option value="" disabled selected>
          Appearance (Select Score)
        </option>
        <option value="10">Appearance: 10 - Best I've Ever Had</option>
        <option value="9">Appearance: 9 - Excellent</option>
        <option value="8">Appearance: 8 - Very Good</option>
        <option value="7">Appearance: 7 - Above Average</option>
        <option value="6">Appearance: 6 - Average</option>
        <option value="5">Appearance: 5 - Below Average</option>
        <option value="4">Appearance: 4 - Poor</option>
        <option value="3">Appearance: 3 - Bad</option>
        <option value="2">Appearance: 2 - Inedible</option>
        <option value="1">Appearance: 1 - Disqualified</option>
      </select>
      <br />
      <select
        id="taste"
        value={taste}
        onChange={(e) => setTaste(e.target.value)}
        required
      >
        <option value="" disabled selected>
          Taste (Select Score)
        </option>
        <option value="10">Taste: 10 - Best I've Ever Had</option>
        <option value="9">Taste: 9 - Excellent</option>
        <option value="8">Taste: 8 - Very Good</option>
        <option value="7">Taste: 7 - Above Average</option>
        <option value="6">Taste: 6 - Average</option>
        <option value="5">Taste: 5 - Below Average</option>
        <option value="4">Taste: 4 - Poor</option>
        <option value="3">Taste: 3 - Bad</option>
        <option value="2">Taste: 2 - Inedible</option>
        <option value="1">Taste: 1 - Disqualified</option>
      </select>
      <br />
      <select
        id="tenderness"
        value={tenderness}
        onChange={(e) => setTenderness(e.target.value)}
        required
      >
        <option value="" disabled selected>
          Tenderness (Select Score)
        </option>
        <option value="10">Tenderness: 10 - Best I've Ever Had</option>
        <option value="9">Tenderness: 9 - Excellent</option>
        <option value="8">Tenderness: 8 - Very Good</option>
        <option value="7">Tenderness: 7 - Above Average</option>
        <option value="6">Tenderness: 6 - Average</option>
        <option value="5">Tenderness: 5 - Below Average</option>
        <option value="4">Tenderness: 4 - Poor</option>
        <option value="3">Tenderness: 3 - Bad</option>
        <option value="2">Tenderness: 2 - Inedible</option>
        <option value="1">Tenderness: 1 - Disqualified</option>
      </select>
      <br />
      <input
        id="imageURL"
        type="text"
        value={imageURL}
        placeholder="Image URL (optional)"
        onChange={(e) => setImageURL(e.target.value)}
      />
      <br />
      <input
        id="comments"
        type="text"
        value={comments}
        placeholder="Comments (recommended)"
        onChange={(e) => setComments(e.target.value)}
      />
      <br />
      <button className="submit-slip" type="submit">
        Submit
      </button>
    </form>
  );
}

export default NewSlip;
