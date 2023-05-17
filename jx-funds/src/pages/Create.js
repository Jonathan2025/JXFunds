import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";



const Create = (props) => {
  const navigate = useNavigate();

  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: "",
    company: "",
    symbol: "",
    description: "",
    recommendation: "",
    date: "",
  });

  //see if the user is authenticated first
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <Login />
    );
  }

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createFund(newForm);
    setNewForm({
      name: "",
      company: "",
      symbol: "",
      description: "",
      recommendation: "",
      date: "",
      timezone: "",
      price: "",
      dividends: "",
    });
    navigate("/jxfunds");
  };

  return (
      <section className="createFund">
        <img
          className="createImg"
          src="https://images.unsplash.com/photo-1642543348745-03b1219733d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN0b2NrJTIwbWFya2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <div className="createForm">
          <h1 className="createFormTitle">Create a Jx-Fund </h1>
          <form onSubmit={handleSubmit}>
            <label className="createFormlabel"> Name: </label>  <br/>
            <input
              className="createFormlabel"
              type="text"
              value={newForm.name}
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
            /><br/>
             <label className="createFormlabel">Company: </label><br/>
            <select
              value={newForm.company}
              name="company"
              onChange={handleChange}
              required
            >
              <option value="">Select a company</option>
              <option value="Fidelity">Fidelity</option>
              <option value="Charles Schwab">Charles Schwab</option>
              <option value="Vanguard">Vanguard</option>
              <option value="BlackRock">BlackRock</option>
              <option value="State Street">State Street</option>
              <option value="Invesco">Invesco</option>
              <option value="Amundi">Amundi</option>
              <option value="Northern Trust">Northern Trust</option>
              <option value="Legal & General">Legal & General</option>
              <option value="DWS Group">DWS Group</option>
              <option value="Other">Other</option>
            </select><br/>
            <label className="createFormlabel">Symbol: </label><br/>
            <input
              type="text"
              value={newForm.symbol}
              name="symbol"
              placeholder="Symbol"
              onChange={handleChange}
              required
            /><br/>
             <label className="createFormlabel">Description: </label><br/>
            <input
              type="text"
              value={newForm.description}
              name="description"
              placeholder="Description"
              onChange={handleChange}
              required
            /><br/>
             <label className="createFormlabel">Recommendation: </label><br/>
            <input
              className="createFormLabel"
              type="text"
              value={newForm.recommendation}
              name="recommendation"
              placeholder="Recommendation"
              onChange={handleChange}
              required
            /><br/>
             <label className="createFormlabel"> Date: </label><br/>
            <input
              className="createFormDatelabel"
              type="date"
              value={newForm.date}
              name="date"
              onChange={handleChange}
              required
            />
            <br/>
            <input className="createFundBtn" type="submit" value="Create Fund" />
          </form>
        </div>
      </section>
  );
};

export default Create;
