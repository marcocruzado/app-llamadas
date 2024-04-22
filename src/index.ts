import { Inviter, SessionState, UserAgent } from "sip.js";

// Create user agent instance (caller)
const userAgent = new UserAgent({
  uri: UserAgent.makeURI("sip:5003@192.168.1.33"),
  transportOptions: {
    server: "ws://127.0.0.1:8443"
  },
});

// Connect the user agent
userAgent.start().then(() => {

  // Set target destination (callee)
  const target = UserAgent.makeURI("sip:5002@192.168.1.33");
  if (!target) {
    throw new Error("Failed to create target URI.");
  }

  // Create a user agent client to establish a session
  const inviter = new Inviter(userAgent, target, {
    sessionDescriptionHandlerOptions: {
      constraints: { audio: true, video: false }
    }
  });

  // Handle outgoing session state changes
  inviter.stateChange.addListener((newState) => {
    switch (newState) {
      case SessionState.Establishing:
        // Session is establishing
        break;
      case SessionState.Established:
        // Session has been established
        break;
      case SessionState.Terminated:
        // Session has terminated
        break;
      default:
        break;
    }
  });

  // Send initial INVITE request
  inviter.invite()
    .then(() => {
      console.log('====================================');
      console.log("entro aca existo");
      console.log('====================================');
    })
    .catch((error: Error) => {
      console.error("Failed to establish session.", error);
    });


});