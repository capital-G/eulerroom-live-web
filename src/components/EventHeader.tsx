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
        We want to celebrate the release of the new SuperCollider version 3.14 with the community with a 24 hour streaming event.
        There are 72 open slots which can be claimed by anyone who wants to contribute a performance.
        Although the performance should be related to SuperCollider in some way, it is not limited to musical performances but can also be talks or other kind of performances.
      </p>
      <p>
        The event will be happening on 2025-07-26 from UTC 00:00 to UTC 23:59.
        For for your timezone {Intl.DateTimeFormat().resolvedOptions().timeZone} this relates to 
        {" "}
        {event &&
          DateTime.fromISO(event.starts_at).toFormat("dd. LLLL HH:mm")}{" "}
        - {event && DateTime.fromISO(event.ends_at).toFormat("dd. LLLL HH:mm")}.
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
      <p className="link-paragraph">
        <b>
          The performances will be streamed live via {" "}
          <a href={"https://live.eulerroom.com"}>https://live.eulerroom.com/</a>
        </b>
      </p>
      <p>Register for an open slot by clicking on <code>+</code></p>
    </header>
  );
}

export default EventHeader;
