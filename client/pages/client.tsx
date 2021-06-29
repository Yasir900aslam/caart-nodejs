import React, { useEffect, useState } from "react";
import {
  Card,
  Spacer,
  Link,
  Text,
  Button,
  Input,
  useTheme,
  Table,
  Code,
  useToasts,
  Divider,
} from "@geist-ui/react";
import axios from "axios";

const Page = () => {
  const theme = useTheme();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [toasts, setToast] = useToasts();
  const datatables = [];

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:3001/v1/client/getall", {
  //       admin_mail: window.localStorage.getItem("admin_mail"),
  //     })
  //     .then((res) => {
  //       res.data.doc.map((e) => {
  //         datatables.push(e);
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const setPasswordhandler = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const setusernamehandler = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };

  const operation = (actions, rowData) => {
    console.log(rowData);
    return (
      <Button auto type="warning-light" onClick={() => actions.remove()}>
        Remove
      </Button>
    );
  };

  const submitClient = () => {
    const data = {
      admin_mail: "admin@admin.com",
      client_email: username,
      client_password: password,
    };

    axios
      .post("http://localhost:3001/v1/client/signup", data)
      .then((res) => {
        window.localStorage.setItem("admin_mail", res.data.doc.admin_mail);
        datatables.push({
          _id: res.data.doc._id,
          client_mail: username,
          operation,
        });

        setToast({ text: "Client Added " });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Spacer />
      <div className="page__wrapper">
        <div className="page__content">
          <div className="projects"></div>
          <Card width="600px">
            <Text h2 style={{ margin: "1rem 0", textAlign: "center" }}>
              Download the{" "}
              <a href="/caartClient.zip" download={true}>
                Client
              </a>
            </Text>
          </Card>
          <Spacer />
          <Card width="330px">
            <h4>Add Client</h4>
            <Input label="Enter username" onChange={setusernamehandler}></Input>
            <Spacer />
            <Input.Password
              label="Enter password"
              onChange={setPasswordhandler}
            ></Input.Password>
            <Card.Footer>
              <Button onClick={submitClient}>Submit</Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
      <style jsx>{`
        .page__wrapper {
          margin-top: 38px;
          background-color: ${theme.palette.accents_1};
        }
        .page__content {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: ${theme.layout.pageWidthWithMargin};
          max-width: 100%;
          margin: 0 auto;
          padding: 0 ${theme.layout.pageMargin};
          transform: translateY(-35px);
          box-sizing: border-box;
        }
        .projects {
          width: 1000px;
          max-width: 100%;
          margin-right: calc(4 * ${theme.layout.gap});
        }
        .projects :global(.project__wrapper):not(:last-of-type) {
          margin-bottom: calc(1.5 * ${theme.layout.gap});
        }
        .recent-activity {
          flex: 1;
        }
        .recent-activity :global(.recent-activity__title) {
          font-size: 0.875rem;
          font-weight: 700;
          margin: 0 0 calc(3 * ${theme.layout.gapHalf});
        }
        .page__content :global(.view-all) {
          font-size: 0.875rem;
          font-weight: 700;
          margin: calc(1.5 * ${theme.layout.gap}) 0;
          text-align: center;
        }
        @media (max-width: ${theme.breakpoints.sm.max}) {
          .page__content {
            flex-direction: column;
            justify-content: flex-start;
            align-items: stretch;
          }
          .projects {
            width: 100%;
            margin-right: unset;
          }
        }
      `}</style>
    </>
  );
};

export default Page;
