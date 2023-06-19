const CardStyled = styled.div`
 
width: 358px;
height: 100%;
left: 16px;
top: 469px;

background: #F8F8F9;
border-radius: 10px;
margin-left:auto;
margin-right:auto;

  `;
const CardForm = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 18px;
width: 326px;
height: 1030px;
margin-left:16px;
margin-right:auto;
margin-top:18px;
  `;

const Formsection = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;
width: 326px;
height: 60px;
flex: none;
order: 0;
flex-grow: 0;
  `;
const FormsectionPlatform = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;
width: 326px;
height: 96px;
flex: none;
order: 3;
flex-grow: 0;
 
  `;
const FormsectionPlatformtitle = styled.h2`
width: 326px;
height: 28px;
font-family: 'Avenir';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 120%;
display: flex;
align-items: center;
color: #000000;
  `;
const FormsectionPlatformtextarea = styled.textarea`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 9px 10px;
gap: 10px;
width: 326px;
height: 60px;
background: #FFFFFF;
border: 1px solid #D0D6D9;
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 0;
font-size: 12px;
  `;
const FormsectionHouse = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;
width: 326px;
height: 54px;
flex: none;
order: 6;
flex-grow: 0;

  `;
const FormsectionHouseDropdown = styled.select`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 8px 10px;
gap: 10px;
width: 326px;
height: 32px;
background: #FFFFFF;
border: 1px solid #D0D6D9;
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 0;
font-size:12px;
font-family: 'Avenir';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 120%;
/* or 14px */

display: flex;
align-items: center;

color: #828688;

  `;
const FormsectionDecaration = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 8px;
width: 264px;
height: 20px;
flex: none;
order: 1;
flex-grow: 0;
  `;
const FormsectionAffiliation = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 12px;
width: 326px;
height: 146px;
flex: none;
order: 7;
flex-grow: 0;
  `;
const AffiliationHead = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 6px;
width: 326px;
height: 26px;
flex: none;
order: 0;
flex-grow: 0;
  `;
const AffiliationTitle = styled.div`
display: flex;
flex-direction: row;
justify-content:  space-between ;
align-items: center;
padding: 0px;
gap: 8px;
width: 326px;
height: 20px;
flex: none;
order: 0;
flex-grow: 0;
  `;
const AffiliationBody = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;
width: 326px;
height: auto;
flex: none;
order: 1;
flex-grow: 0;
  `;
const Companycont = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;
width: 326px;
height: 50px;
flex: none;
order: 0;
flex-grow: 0;
  `;
const DateCont = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 4px;
width: 326px;
height: 50px;
flex: none;
order: 1;
flex-grow: 0;
  `;
const DateContItem = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;
width: 161px;
height: 50px;
flex: none;
order: 0;
flex-grow: 1;
  `;
const CompanyTitle = styled.div`
width: 100%;
height: 12px;
font-family: 'Avenir';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 120%;
display: flex;
align-items: center;
color: #000000;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
justify-content:  space-between ;
  `;
const CompanyInput = styled.input`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 9px 10px;
gap: 10px;
width: 326px;
height: 30px;
background: #FFFFFF;
border: 1px solid #D0D6D9;
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 0;
font-family: 'Avenir';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 120%;
display: flex;
align-items: center;
color: #828688;
  `;
const ProfilePictureBtn = styled.button`
box-sizing: border-box;
width: 338px;
height: 71px;
margin-left:auto;
margin-right:auto;
left: 23px;
top: 611px;
background: #FFFFFF;
border: 1px solid #000000;
border-radius: 8px;
margin-bottom:15px;
  `;
const ProfileImgStyled = styled.img`
width: 20px;
height: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom:9px;
 
  `;
const H1styled = styled.h1`
 
margin-left:16px;
margin-top:16px;
margin-right:auto; 
width: 104px;
height: 19px;
font-family: 'Avenir';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 120%;
color: #000000;
`;
const H2styled = styled.h1`
width: 77px;
height: 14px;
font-family: 'Avenir';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 120%;
display: flex;
align-items: center;
color: #000000;
flex: none;
order: 0;
flex-grow: 0;
`;
const H3text = styled.h3`
 
width: 229px;
height: 19px;
left: 78px;
top: calc(50% - 19px/2 + 12px);

font-family: 'Avenir';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
display: flex;
margin-left: auto;
margin-right: auto;
margin-bottom:15px;
color: #838181;
  `;
const InputStyled = styled.input`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 9px 10px;
gap: 10px;
width: 326px;
height: 32px;
font-size: 12px;
background: #FFFFFF;
border: 1px solid #D0D6D9;
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 0;
`;
const SelectStyled = styled.select`
padding-left:15px;
padding-right:15px;
font-size:12px;
margin-bottom:15px;
margin-left:auto;
margin-right:auto;
box-sizing: border-box;

width: 338px;
height: 31px;
left: 25px;
top: 964px;

background: #FFFFFF;
border: 1px solid #000000;
border-radius: 8px;
`;
const InputImg = styled.input`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 9px 10px;
gap: 10px;
width: 326px;
height: 38px;
background: #FFFFFF;
border: 1px dashed #D0D6D9;
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 0;
`;
const InputTextAreaStyled = styled.textarea`
padding-left:15px;
padding-right:15px;
font-size:12px;
padding-bottom:10px;
margin-bottom:15px;
margin-left:auto;
margin-right:auto;
box-sizing: border-box;

 
width: 338px;
height: 98px;
left: 24px;
top: 836px;

background: #FFFFFF;
border: 1px solid #000000;
border-radius: 8px;
`;
const InputcheckboxStyled = styled.input`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px 0px;
gap: 10px;
width: 20px;
height: 20px;
background: #FFFFFF;
border: 1px solid #D0D6D9;
border-radius: 4px;
flex: none;
order: 0;
flex-grow: 0;
`;
const Submitcontainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 0px;
gap: 8px;
margin-left:200px;
margin-top:10px;
margin-bottom:25px;
width: 205px;
height: 28px;

`;
const SubmitBtn = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 2px 12px;
gap: 10px; 
font-family: 'Avenir';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
color:#000000;
margin-right:50px;
width: 100px;
height: 28px;
background: #FFD50D;
border-color:#FFD50D;
border-radius: 8px;
 

border-radius: 8px;
flex: none;
order: 1;
flex-grow: 0;


`;
const CancelBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 2px 12px;
  width: 97px;
  height: 28px;
  font-size:12px;
  color:#9333EA;
  border-radius:15px;
  border-style: solid;
  border-color: #9333EA;
  background: #00000000 ;
  box-sizing: border-box;
  gap: 10px;
  font-weight: 500;
  font-size: 12px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const H2Declarationstyled = styled.h1`
width: 152px;
height: 14px;
font-family: 'Avenir';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 120%;
display: flex;
align-items: center;
color: #000000;
flex: none;
order: 0;
flex-grow: 0;
`;
const PStyled = styled.p`
width: 236px;
height: 14px;
font-family: 'Avenir';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 120%;
display: flex;
align-items: center;
color: #000000;
flex: none;
order: 1;
flex-grow: 0;
margin-top: 0; 
margin-bottom:0;
`;
const AStyled = styled.a`
margin-left:4px;
height: 14px;
font-family: 'Avenir';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 120%;
display: flex;
align-items: center;
color: #000000;
flex: none;
order: 1;
flex-grow: 0;
text-decoration-line: underline;

`;

const LabelFile = styled.label`
   box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 9px 10px;
gap: 10px;

width: 326px;
height: 38px;

background: #FFFFFF;
border: 1px dashed #D0D6D9;
border-radius: 8px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;

`;
const InputFile = styled.input`
    display: none;
`;

// State
State.init({
  profilepath: "",
  name: "",
  profileAccount: "",
  issued1: "",
  issued2: "",
  issued3: "",
  house_intended: "",
  afiliation: [
    {
      company_name: "",
      start_date: "",
      end_date: "",
    },
  ],
  agreement: false,
  tags: "",
  error_msg: "",
});

const handleInputs = (_type, _param) => {
  switch (_type) {
    case "name":
      State.update({ name: _param.target.value });
      break;
    case "profileAccount":
      State.update({ profileAccount: _param.target.value });
      break;

    case "issued1":
      State.update({ issued1: _param.target.value });
      break;
    case "issued2":
      State.update({ issued2: _param.target.value });
      break;
    case "issued3":
      State.update({ issued3: _param.target.value });
      break;

    case "house_intended":
      State.update({ house_intended: _param.target.value });
      break;

    case "agreement":
      State.update({ agreement: _param.target.value });
      break;
      agreement;
    case "tags":
      State.update({ tags: _param.target.value });
      break;
    default:
  }
};
const handleProfilepic = (event) => {
  if (event.target.files && event.target.files[0]) {
    let img = event.target.files[0];
    State.update({ profilepath: URL.createObjectURL(img) });
  }
};
const handleFileChange = (event) => {
  console.log(event);
  State.update({ profilepath: URL.createObjectURL(event.target.value) });
};
const addFields = () => {
  var temp = state.afiliation;
  let object = {
    company_name: "",
    start_date: "",
    end_date: "",
  };

  if (temp.length === 6) {
    return;
  } else {
    temp.push(object);
    State.update({ afiliation: temp });
  }
};
let AffiliationBodyheight = "125px";
const handleFieldsChange = (event, index, _input) => {
  let data = state.afiliation;
  AffiliationBodyheight = "340px";
  switch (_input) {
    case "company":
      console.log("updating the company");
      data[index].company_name = event.target.value;
      break;
    case "start":
      console.log("updating the company");
      data[index].start_date = event.target.value;
      break;
    case "end":
      console.log("updating the company");
      data[index].end_date = event.target.value;
      break;
    default:
      break;
  }
  console.log(data[index]);
  console.log(data);
  State.update({ afiliation: data });
};
const removeField = (index) => {
  let data = state.afiliation;
  console.log(data);
  data.splice(index, 1);
  console.log(data);
  State.update({ afiliation: data });
};

const submitButton = () => {};
const validatedInputs = () => {
  const {
    profilepath,
    name,
    profileAccount,
    issued1,
    issued2,
    issued3,
    house_intended,
    afiliation,
    agreement,
    tags,
  } = state;
  console.log(state);
  const isEmpty = (str) => str.trim() === "";
  const isFalse = (check) => check === false;
  if (isEmpty(name)) {
    State.update({ error_msg: "Fill the name" });
    console.log("Fill the name");
    return false;
  }
  if (isEmpty(profileAccount)) {
    State.update({ error_msg: "Fill the Profile Account" });
    console.log("Fill the Profile Account");
    return false;
  }
  if (isEmpty(house_intended)) {
    State.update({ error_msg: "Select a house" });
    console.log("Select a house");
    return false;
  }
  if (isFalse(agreement)) {
    State.update({ error_msg: "Accept the declaration" });
    console.log("Accept the declaration");
    return false;
  }
};

return (
  <>
    <div
      style={{
        background: "#FFFFFF",
        position: "relative",
        width: "390px",
        height: "full",
      }}
    >
      <div
        style={{
          display: "flex",
          "justify-content": "center",
          "padding-top": "16px",
          "margin-bottom": "15px",
        }}
      >
        <Widget
          src={`syi216.near/widget/NDC.nomination.card`}
          props={{
            profilepath: state.profilepath,
            name: state.name,
            profileAccount: state.profileAccount,
            issued1: state.issued1,
            issued2: state.issued2,
            issued3: state.issued3,
            house_intended: state.house_intended,
            afiliation: state.afiliation,
            tags: state.tags.split(";"),
          }}
        />
      </div>
      <CardStyled name="compose">
        <div className="d-flex flex-column ">
          <div className="d-flex flex-column">
            <H1styled>Self Nominate</H1styled>
          </div>
          <CardForm>
            <Formsection style={{ order: "0" }}>
              <H2styled>Profile picture {state.profilepath} </H2styled>

              <LabelFile class="custom-file-upload">
                <InputFile type="file" />
                <img
                  src={`https://emerald-related-swordtail-341.mypinata.cloud/ipfs/QmWyPdBc3nqDe2mAp26a4BAvDYiuk1JEfJiyGejff3ZrjL?_gl=1*mwwy4f*rs_ga*YTcxZDg1OTgtZTYyOC00M2U2LWE4MTctNzUzMDRkMjA3ZWVl*rs_ga_5RMPXG14TE*MTY4Njk2NDYyNi4xNC4xLjE2ODY5NjQ2NDQuNDIuMC4w`}
                />
                <p
                  style={{
                    width: "173px",
                    height: "14px",
                    "font-family": "Avenir",
                    "font-style": "normal",
                    "font-weight": "400",
                    "font-size": "12px",
                    "line-height": "120%",
                    display: "flex",
                    "align-items": "center",
                    color: "#828688",
                    flex: "none",
                    order: "1",
                    "flex-grow": "0",
                  }}
                >
                  {"Click here to upload your image "}
                </p>
              </LabelFile>
            </Formsection>
            <Formsection style={{ order: "1" }}>
              <H2styled>Name </H2styled>
              <InputStyled
                name="Name"
                id="Name"
                type="text"
                placeholder="Nomination name"
                onChange={(e) => handleInputs("name", e)}
              />
            </Formsection>
            <Formsection style={{ order: "2" }}>
              <H2styled>Profile </H2styled>
              <InputStyled
                name="Profile"
                id="Profile"
                type="text"
                placeholder="@profile"
                onChange={(e) => handleInputs("profileAccount", e)}
              />
            </Formsection>
            <FormsectionPlatform style={{ order: "3" }}>
              <FormsectionPlatformtitle>
                {"Platform - Key Issue 1: What’s your view and pledge on XYZ?"}{" "}
              </FormsectionPlatformtitle>
              <FormsectionPlatformtextarea
                name="Profile"
                id="Profile"
                type="text"
                placeholder="Write your platform "
                onChange={(e) => handleInputs("issued1", e)}
              />
            </FormsectionPlatform>
            <FormsectionPlatform>
              <FormsectionPlatformtitle>
                {"Platform - Key Issue 2: What’s your view and pledge on XYZ?"}{" "}
              </FormsectionPlatformtitle>
              <FormsectionPlatformtextarea
                name="Profile"
                id="Profile"
                type="text"
                placeholder="Write your platform "
                onChange={(e) => handleInputs("issued2", e)}
              />
            </FormsectionPlatform>
            <FormsectionPlatform>
              <FormsectionPlatformtitle>
                {"Platform - Key Issue 3: What’s your view and pledge on XYZ?"}{" "}
              </FormsectionPlatformtitle>
              <FormsectionPlatformtextarea
                name="Profile"
                id="Profile"
                type="text"
                placeholder="Write your platform "
                onChange={(e) => handleInputs("issued3", e)}
              />
            </FormsectionPlatform>
            <FormsectionHouse style={{ order: "4" }}>
              <H2styled>{"House"} </H2styled>
              <FormsectionHouseDropdown
                name="house-intended"
                id="house-intended"
                onChange={(e) => handleInputs("house_intended", e)}
              >
                <option default value="0">
                  Select house
                </option>
                <option value="Council of Advisors">Council of Advisors</option>
                <option value="House Of Merit">House Of Merit</option>
                <option value="Transparency Commission">
                  Transparency Commission
                </option>
              </FormsectionHouseDropdown>
            </FormsectionHouse>
            <FormsectionAffiliation>
              <AffiliationHead>
                <AffiliationTitle>
                  <H2styled>{"Afiliations"}</H2styled>
                  <button
                    onClick={addFields}
                    style={{
                      background: "#00000000",
                      "border-color": "#00000000",
                    }}
                  >
                    <img
                      src={`https://emerald-related-swordtail-341.mypinata.cloud/ipfs/QmbNqXEbUqSkGY7quBnyBqU6nKuXimYTnxTNsbYHnhdVXw?_gl=1*aubyn4*rs_ga*YTcxZDg1OTgtZTYyOC00M2U2LWE4MTctNzUzMDRkMjA3ZWVl*rs_ga_5RMPXG14TE*MTY4Njk0MjQwOC4xMS4xLjE2ODY5NDI0NzMuNTcuMC4w`}
                    />
                  </button>
                </AffiliationTitle>
                <hr
                  style={{
                    width: "326px",
                    height: "0px",
                    border: "1px solid rgba(208, 214, 217, 0.4)",
                    flex: "none",
                    order: "1",
                    margin: "0px",
                    "flex-grow": "0",
                  }}
                />
              </AffiliationHead>

              <AffiliationBody
                style={{
                  height: AffiliationBodyheight,
                  "overflow-y": "auto",
                }}
              >
                {state.afiliation.map((form, index) => {
                  return (
                    <>
                      <Companycont
                        style={{ order: index, "margin-top": "2px" }}
                      >
                        <CompanyTitle>
                          {"Company Name"}

                          <button
                            onClick={removeField}
                            style={{
                              background: "#00000000",
                              "border-color": "#00000000",
                            }}
                          >
                            <img
                              style={{
                                width: "20px",
                                height: "20px",
                              }}
                              src={`https://emerald-related-swordtail-341.mypinata.cloud/ipfs/Qmb1wcWEWHiqYq5UvtuChVB2u4MEyKutL9UU5LcTrULriP?_gl=1*iz6jdo*rs_ga*YTcxZDg1OTgtZTYyOC00M2U2LWE4MTctNzUzMDRkMjA3ZWVl*rs_ga_5RMPXG14TE*MTY4Njk1MTE5NS4xMi4xLjE2ODY5NTEyMjkuMjYuMC4w`}
                            />
                          </button>
                        </CompanyTitle>
                        <CompanyInput
                          placeholder="Company Name"
                          onChange={(event) =>
                            handleFieldsChange(event, index, "company")
                          }
                        ></CompanyInput>
                      </Companycont>
                      <DateCont style={{ order: index + 1 }}>
                        <DateContItem>
                          <CompanyTitle>{"Start date"}</CompanyTitle>
                          <CompanyInput
                            style={{ width: "161px" }}
                            placeholder="Company Name"
                            onChange={(event) =>
                              handleFieldsChange(event, index, "start")
                            }
                          ></CompanyInput>
                        </DateContItem>
                        <DateContItem>
                          <CompanyTitle>{"End date"}</CompanyTitle>
                          <CompanyInput
                            style={{ width: "161px" }}
                            placeholder="Company Name"
                            onChange={(event) =>
                              handleFieldsChange(event, index, "end")
                            }
                          ></CompanyInput>
                        </DateContItem>
                      </DateCont>
                    </>
                  );
                })}
              </AffiliationBody>
              <FormsectionPlatform style={{ order: "3" }}>
                <FormsectionPlatformtitle>
                  {"Description of your Role"}{" "}
                </FormsectionPlatformtitle>
                <FormsectionPlatformtextarea
                  style={{
                    "font-family": "Avenir",
                    "font-style": "normal",
                    "font-weight": "400",
                    "font-size": "10px",
                  }}
                  name="Description"
                  id="Description"
                  type="text"
                  placeholder="Add tags that describe your nomination, separated by comma"
                  onChange={(e) => handleInputs("issued1", e)}
                />
              </FormsectionPlatform>
              <Formsection style={{ order: "6" }}>
                <H2styled>{"Tags"} </H2styled>
                <InputStyled
                  style={{
                    "font-family": "Avenir",
                    "font-style": "normal",
                    "font-weight": "400",
                    "font-size": "10px",
                  }}
                  name="Tags"
                  id="Tags"
                  type="text"
                  placeholder="Add tags that describe your nomination"
                  onChange={(e) => handleInputs("tags", e)}
                />
              </Formsection>
            </FormsectionAffiliation>
          </CardForm>
          <Formsection
            style={{ order: "7", height: "auto", "margin-left": "16px" }}
          >
            <H2Declarationstyled>
              {"Declaration of transparency "}
            </H2Declarationstyled>
          </Formsection>
        </div>
      </CardStyled>

      <Formsection
        style={{
          order: "7",

          "align-items": " flex-start",
          "margin-left": "16px",
          "margin-right": "auto",
        }}
      >
        <FormsectionDecaration
          style={{
            "margin-top": "10px",
          }}
        >
          <InputcheckboxStyled
            type="checkbox"
            onChange={(e) => handleInputs("agreement", e)}
          />
          <PStyled>
            I agree the <AStyled>{"Declaration of transparency"} </AStyled>
          </PStyled>
        </FormsectionDecaration>
      </Formsection>
      <Submitcontainer>
        <SubmitBtn onClick={validatedInputs}> Submit </SubmitBtn>
        <CancelBtn> Cancel </CancelBtn>
      </Submitcontainer>
    </div>
  </>
);
