import { Client } from "./Client";

export const Server = async () => {
  return (
    <>
      <div>From Server</div>

      <Client />
    </>
  );
};
