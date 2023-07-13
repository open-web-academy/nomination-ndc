const ModalCard = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
    background: rgba(0, 0, 0, 0.70);
 
@media only screen and (max-width: 480px) {
 
}
`;
const CommentCard = styled.div`
display: flex;
width: 400px;
padding: 20px;
flex-direction: column;
align-items: flex-start;
gap: 16px; 
border-radius: 10px;
background: #FFF;
border: 1px solid transparent;
 margin-left: auto;
 margin-right: auto;
 margin-buttom: 50%;
  
   
@media only screen and (max-width: 480px) {
 width: 90%;
 
}
`;
const CTitle = styled.div`
color: var(--000000, #000);
font-size: 14px;
font-family: Open Sans;
font-style: normal;
font-weight: 500;
line-height: 120%;
@media only screen and (max-width: 480px) {
 
}
`;
const Ccontainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
gap: 20px;
align-self: stretch;
@media only screen and (max-width: 480px) {
 
}
`;
const CommentBody = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
align-self: stretch;
@media only screen and (max-width: 480px) {
 
}
`;
const BComment = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 8px;
align-self: stretch;
@media only screen and (max-width: 480px) {
 
}
`;
const BCommentmessage = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 8px;
align-self: stretch;
@media only screen and (max-width: 480px) {
 
}
`;
const BCMHeader = styled.div`
display: flex;
width: 100%;
align-items: center;
gap: 8px;
@media only screen and (max-width: 480px) {
  
}
`;
const BCMProfile = styled.div`
width: 28px;
height: 28px;
flex-shrink: 0;
flex-direction:row;
border-radius: 29px;
background: #D0D6D9;
text-align: center;
@media only screen and (max-width: 480px) {
 
}
`;
const BCMProfileimg = styled.img`
width: 28px;
height: 28px;
flex-shrink: 0;
vertical-align: initial;
@media only screen and (max-width: 480px) {
 
}
`;
const BCMProfileUsername = styled.label`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
color: #000;
font-size: 14px;
font-family: Open Sans;
font-style: normal;
font-weight: 500;
line-height: 120%;
@media only screen and (max-width: 480px) {
 
}
`;
const BCMMessage = styled.div`
display: flex;
flex-direction: column;
align-self: stretch;
color: #686B6D;
font-size: 14px;
font-family:  Open Sans;
font-style: normal;
font-weight: 400;
line-height: 120%;
@media only screen and (max-width: 480px) {
 
}
`;
const BFooter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 4px;
align-self: stretch;
`;
const BFootercont = styled.div`
display: flex;
align-items: center;
align-self: stretch;
`;
const BFootercontTime = styled.div`
display: flex;
align-items: center;
gap: 4px;
flex: 1 0 0;
`;
const BFCTimetext = styled.div`
display: flex;
height: 19.394px;
flex-direction: column;
justify-content: center;
flex: 1 0 0;
color: #000;
font-size: 14px;
font-family: Open Sans;
font-style: normal;
font-weight: 300;
line-height: normal;
`;
const BFCButton = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 4px;
`;
const BFCButtonitem = styled.button`
display: flex;
padding: 2px 12px;
align-items: center;
gap: 6px;
border-radius: 4px;
 border-width: 1px;
border: solid 1px #9333EA;
 
 
  background-image: linear-gradient(#fff, #fff), radial-gradient(circle at top left,#F0E1CE, #F0E1CE);
  background-origin: border-box;
  background-clip: padding-box, border-box;
`;
const BFCBIText = styled.label`
font-size: 12px;
font-family: Open Sans;
font-style: normal;
font-weight: 500;
line-height: 24px;
color: #9333EA;
cursor: pointer;
  
`;
const NewComment = styled.textarea`
width: 100%;
display: flex;
height: 100px;
padding: 9px 10px 0px 10px;
align-items: flex-start;

gap: 10px;
align-self: stretch;
  border-radius: 8px;
    border: 1px solid #D0D6D9;
    background: #FFF;
   
font-size: 12px;
font-family: Open Sans;
font-style: normal;
font-weight: 400;
line-height: 120%;
`;
const CommentFooter = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: end;
gap: 16px;
align-self: stretch;
@media only screen and (max-width: 480px) {
 
}
`;
const CFCancel = styled.button`
display: flex;
width: 107px;
padding: 8px 12px;
justify-content: center;
align-items: center;
gap: 10px;
color:#9333EA;
border-radius: 10px;
 border-width: 1px;
  border: solid 1px #9333EA;
 
 
  background-image: linear-gradient(#fff, #fff), radial-gradient(circle at top left,#F0E1CE, #F0E1CE);
  background-origin: border-box;
  background-clip: padding-box, border-box;
@media only screen and (max-width: 480px) {
 width: 100%;
}
`;

const CFSubmit = styled.button`
display: flex;
width: 107px;
padding: 8px 12px;
justify-content: center;
align-items: center;
gap: 10px;
color:#000;
display: flex;
width: 107px;
padding: 8px 12px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 10px;
 border-width: 1px;
  border: solid 1px transparent;
 
 
  background-image: linear-gradient(#FFD50D, #FFD50D), radial-gradient(circle at top left,#F0E1CE, #F0E1CE);
  background-origin: border-box;
  background-clip: padding-box, border-box;
@media only screen and (max-width: 480px) {
 width: 100%;
}
`;

const CommentCandidate = () => {
  //Validate the Data outPut
  if (state.reply === null) {
    State.update({ e_message: "Write a comment " });
    return;
  }
  if (state.reply != "") {
    // call the smart contract Self nominate comment

    Near.call(
      nominationcontract
        ? nominationcontract
        : "nominations-v1.gwg-testing.near",
      "comment",
      {
        candidate: username,
        comment: state.reply,
      },
      300000000000000
    ).then(() => {
      props.onClickCancel();
    });
  } else {
    //The fields are incomplete
  }
};
const CommenttoReplay = () => {
  //Validate the Data outPut
  if (state.reply != null) {
    // call the smart contract Self nominate comment
    /*   Near.call(
      nominationcontract
        ? nominationcontract
        : "nominations-v1.gwg-testing.near",
      "comment",
      {
        candidate: username,
        comment: state.reply,
      }
    ).then(() => {
      props.onClickCancel();
    });*/
  } else {
    //The fields are incomplete
  }
};
// candidateOrReplay :true-Comment candidate  :false-Comment to reply
const {
  nominationcontract,
  candidateOrReplay,
  username,
  profile_picture,
  originalComment,
  originalCommentID,
  timeago,
  _share_url,
} = props;
// State
State.init({
  theme,
  reply: "",
  share_url: _share_url,
  cancel: false,
  e_message: "",
  shareText: "Copy to the clipboard ",
});

const SetText = (txt) => {
  console.log("cop");
  State.update({ shareText: txt });
};
return (
  <ModalCard>
    <CommentCard>
      <CTitle>
        {candidateOrReplay ? " Add a Comment" : "Replay to comment"}
      </CTitle>
      <Ccontainer>
        {!candidateOrReplay ? (
          <>
            <CommentBody>
              <BComment>
                <BCommentmessage>
                  <BCMHeader>
                    <BCMProfile>
                      {profile_picture ? (
                        <BCMProfileimg
                          style={{ "border-radius": "20px" }}
                          alt="pic"
                          src={
                            "https://nativonft.mypinata.cloud/ipfs/" +
                            profile_picture
                          }
                        />
                      ) : (
                        <BCMProfileimg
                          alt="pic"
                          src={
                            "https://emerald-related-swordtail-341.mypinata.cloud/ipfs/QmTKv1yHQKRDQcmc5Jkv2jkaTx2Q1jJE9srHEmyYPq53vJ?preview=1"
                          }
                        />
                      )}
                    </BCMProfile>
                    <BCMProfileUsername>
                      {username ? "@" + username : "@user.near"}
                    </BCMProfileUsername>
                  </BCMHeader>
                  <BCMMessage>
                    {" "}
                    {originalComment
                      ? originalComment
                      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integerquam enim, dignissim sed ante at, convallis maximus enim. Duis  condimentum aliquam nisl nec sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam enim, dignissim  sed ante at, convallis maximus enim. Duis condimentum aliquam nisl nec sagittis."}
                  </BCMMessage>
                </BCommentmessage>
              </BComment>
              <BFooter>
                <label>{state.e_message}</label>
                <BFootercont>
                  <BFootercontTime>
                    <img
                      alt="schedule"
                      src={
                        "https://emerald-related-swordtail-341.mypinata.cloud/ipfs/QmP3uRUgZtqV3HAgcZoYaDA6JSPpFcpqULvgenWUs3ctSP"
                      }
                      style={{ width: "14px", height: "14px" }}
                    />
                    <BFCTimetext>
                      {" "}
                      {timeago ? timeago : "2 hours ago"}
                    </BFCTimetext>
                  </BFootercontTime>
                  <BFCButton>
                    <OverlayTrigger
                      key={placement}
                      placement={placement}
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          {state.shareText}
                        </Tooltip>
                      }
                    >
                      <BFCButtonitem
                        onClick={() => {
                          SetText("Copied to the clipboard");
                          clipboard.writeText(state.share_url);
                        }}
                      >
                        <BFCBIText>Share</BFCBIText>
                        <img
                          alt="share"
                          src={
                            "https://emerald-related-swordtail-341.mypinata.cloud/ipfs/QmdFMobsnCyj9USY2mHtLzhu58Mz6BFpMx7tKPQGoWmsHY?preview=1"
                          }
                        />
                      </BFCButtonitem>
                    </OverlayTrigger>
                  </BFCButton>
                </BFootercont>
              </BFooter>
            </CommentBody>
            <hr
              style={{
                width: "100%",
                height: "0px",
                border: "1px solid rgba(130, 134, 136, 0.20)",
                flex: "none",
                background: "rgba(130, 134, 136, 0.20)",
                margin: "0px",
                "flex-grow": "0",
              }}
            />
          </>
        ) : (
          <></>
        )}
        <div class="w-100 col">
          <NewComment
            value={state.reply}
            placeholder="Reply here"
            onChange={(e) => {
              State.update({
                reply: e.target.value.substring(0, 1000),
              });
            }}
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              "justify-content": "end",
            }}
          >
            <label
              style={{
                "font-size": "8px",
                display: "flex",
                "vertical-align": "top",
                "text-align": "center",
                color: state.reply.length < 1000 ? "#00000075" : "#ff000075",
              }}
            >
              {state.reply.length} - 1000
            </label>
          </div>
        </div>
        <CommentFooter>
          <CFCancel onClick={props.onClickCancel}>Cancel</CFCancel>
          <CFSubmit
            onClick={() => {
              candidateOrReplay ? CommentCandidate() : CommenttoReplay();
            }}
          >
            Submit
          </CFSubmit>
        </CommentFooter>
      </Ccontainer>
    </CommentCard>
  </ModalCard>
);