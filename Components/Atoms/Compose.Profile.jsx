const H2styled = styled.h1`
 
height: 14px;
 
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 120%;
display: flex;
align-items: center;
color: #000000;
flex: none;
order: 0;
flex-grow: 0;
`;
const LabelFile = styled.label`
box-sizing: border-box;
align-content: center,
width: 100%;
height: 42px;
background: #FFFFFF;
border: 1px dashed #D0D6D9;
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 0;

@media only screen and (max-width: 480px) {
  display:none;
}

`;
const LabelFileDesk = styled.label`
box-sizing: border-box;
align-content: center,
width: 100%;
height: 42px;
background: #FFFFFF;
border: 1px dashed #D0D6D9;
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 0;
display:none;
@media only screen and (max-width: 480px) {
   display:flex;
}

`;
const WrapNoWrap = styled.div`
display: flex;
flex-direction: row;  
width:100%;
gap:.25rem;
flex-wrap: nowrap;
@media only screen and (max-width: 480px) {
 flex-wrap: wrap;
 flex-direction: col;
}
`;
const Formsection = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
 
width: 33%;
height: 60px;
flex: none;
order: 0;
flex-grow: 0;
@media only screen and (max-width: 480px) {
  
 width: 100%;
}
  `;
const InputStyled = styled.input`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 9px 10px;
 
width: 100%;
height: 40px;
font-size: 12px;
background: #FFFFFF;
border: 1px solid #D0D6D9;
border-radius: 8px;
flex: none;
order: 1;

@media only screen and (max-width: 480px) {
  
 
}
`;
const FormsectionHouse = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
 
width: 100%;
height: 54px;
flex: none;
display: flex;
order: 6;
flex-grow: 0;
@media only screen and (max-width: 480px) {
 
   
}

  `;
const FormsectionHouseDropdown = styled.select`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 8px 10px;
gap: 10px;
width: 100%;
height: 40px;
background: #FFFFFF;
border: 1px solid #D0D6D9;
border-radius: 8px;
flex: none;
order: 1;

font-size:12px;
 
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 120%;
 
display: flex;
align-items: center;

color: #828688;
@media only screen and (max-width: 480px) {
  
  
}
  `;
const Photosection = styled.div`
  
  width:8.33333%; 
   
@media only screen and (max-width: 480px) {
  display:none;
}
  `;
const Photopickersection = styled.div`
  padding: 10px;
  width:95%; 
  margin-left:10px;
@media only screen and (max-width: 480px) {
  width:100%; 
  margin-left:0px;
  padding: 0px;
}
  `;
const Separator = styled.div`
width:100%;
height:2px;
background-color: #D0D6D966;
border: solid 0px transparent;
margin-top:9px;
`;
const {
  img,
  isCid,
  name,
  profileAccount,
  house_intended,

  filesOnChange,
  handleName,
  handleProfile,
  handleHouse,
} = props;
return (
  <div class="w-100">
    <WrapNoWrap
      class="row col-sm-12     "
      name="div1"
      style={{
        "padding-top": "10px",
        "padding-left": "16px",
        "padding-right": "16px",
      }}
    >
      <FormsectionHouse style={{ order: "3" }}>
        <H2styled>{"House"} </H2styled>
        <FormsectionHouseDropdown
          name="house-intended"
          id="house-intended"
          onChange={(e) => handleHouse(e.target.value)}
        >
          <option default value="0">
            Select house
          </option>
          <option value="CouncilOfAdvisors">Council of Advisors</option>
          <option value="HouseOfMerit">House Of Merit</option>
          <option value="TransparencyCommission">
            Transparency Commission
          </option>
        </FormsectionHouseDropdown>
      </FormsectionHouse>
    </WrapNoWrap>
    <div style={{ padding: "12px", width: "100%" }}>
      <Separator />
    </div>
  </div>
);