import { DateTime } from "luxon";
import { ReactElement } from "react";
import logo from "../assets/images/sc_logo.svg";
import { MuxyEvent } from "../types";

interface Props {
  event: MuxyEvent | undefined;
  reservedStreamCount: number | null;
  totalStreamCount: number | null;
}


function EventHeader({
  event,
}: Props): ReactElement {

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="SuperCollider" />
      <h1>SuperCollider 3.14 release party</h1>
      <p>
        We want to celebrate the release of the new SuperCollider version 3.14 with the community with a 24 hour streaming event!
        There are 72 open 20 minute slots which can be claimed by anyone who wants to contribute a performance.
        The performance should be related to SuperCollider in some way, although it is not limited to musical performances but can also be talks or other kind of performances.
      </p>
      <p>
        The performances need to be transmitted as video streams which can be created via e.g. OBS - you can take a look at the <a href="https://docs.google.com/document/d/1hiaT4YEmqF5s6IkYySfhE9Hu1oopOGcVUG2E4DvyKWM/edit?tab=t.0#heading=h.5a80sytf8fg4">setup guide</a>.
      </p>
      <p>
        The event will be happening on 2025-07-26 from UTC 00:00 to UTC 23:59.
        For for your timezone {Intl.DateTimeFormat().resolvedOptions().timeZone} this relates to 
        {" "}
        {event &&
          DateTime.fromISO(event.starts_at).toFormat("dd. LLLL HH:mm")}{" "}
        - {event && DateTime.fromISO(event.ends_at).toFormat("dd. LLLL HH:mm")}.
      </p>
      <p>
        The performances are broadcasted via <a href="https://live.eulerroom.com">live.eulerroom.com</a>, which has been kindly provided by <a href="https://blog.toplap.org/">toplap</a> - consider donating to them via <a href="https://opencollective.com/toplap">OpenCollective</a>.
      </p>
      {/* {!event?.active && (
        <h4 style={{ color: "darkred" }}>
          Note: This event is not yet open for registration. Slot
          sign up opens Wed, May 8 for Asia/Pacific, May 15th globally.
        </h4>
      )} */}
      {/* <hr /> */}
      {/* <ProgressBar
        className="wrapper"
        bgColor={"#a9c27c"}
        baseBgColor={"#ffffff"}
        labelClassName="label"
        labelAlignment={"outside"}
        width={"100%"}
        height={"28px"}
        margin={"8px"}
        customLabel={`${progressBarValues.reserved}/${progressBarValues.total} slots are filled`}
        completed={progressBarValues.percent}
      /> */}
      {/* <hr /> */}
      {/* <p className="link-paragraph">
        <b>
          The performances will be streamed live via {" "}
          <a href={"https://live.eulerroom.com"}>https://live.eulerroom.com/</a>
        </b>
      </p> */}
      <p>Register for an open slot by clicking on <code>+</code></p>
    </header>
  );
}

export default EventHeader;
