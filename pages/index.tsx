import { ConnectButton } from "thirdweb/react";
import { client } from "../thirdweb";

export default function Home() {
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <ConnectButton client={client} />
    </div>
  );
}
