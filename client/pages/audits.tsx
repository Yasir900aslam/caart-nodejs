import React, { useState } from "react";
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
  Modal,
  useModal,
} from "@geist-ui/react";
import axios from "axios";

const Page = () => {
  const theme = useTheme();
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [toasts, setToast] = useToasts();
  const [tables, setTables] = useState([]);

  const getAuditData = () => {
    const admin_mail = window.localStorage.getItem("admin_mail");

    axios
      .post("http://localhost:3001/v1/audit/all/", {
        email: admin_mail,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const operation = (actions, rowData) => {
    return (
      <Button type="error" auto onClick={() => actions.remove()}>
        Remove
      </Button>
    );
  };

  const data = [
    {
      policy: "Enforce password history",
      status: "OK",
      operation,
    },
    {
      policy: "Maximum password age",
      status: "OK",
      operation,
    },
    {
      policy: "Minimum password age",
      status: "OK",
      operation,
    },
    {
      policy: "Minimum password length",
      status: "OK",
      operation,
    },
    {
      policy: "Store passwords encrpted",
      status: "OK",
      operation,
    },
    {
      policy: "Credential Manager",
      status: "OK",
      operation,
    },
    {
      policy: "Account lockout threshold",
      status: "OK",
      operation,
    },
    {
      policy: "Account lockout duration",
      status: "OK",
      operation,
    },

    {
      policy: "Access Computer",
      status: "OK",
      operation,
    },

    {
      policy: "memory quotas",
      status: "OK",
      operation,
    },
    {
      policy: "Back up files and directories",
      status: "OK",
      operation,
    },
    {
      policy: "Deny log on as a batch job",
      status: "OK",
      operation,
    },
    {
      policy: "Deny log on as a service",
      status: "OK",
      operation,
    },
    {
      policy: "Profile single process",
      status: "OK",
      operation,
    },
    {
      policy: "Maximum machine account password age",
      status: "OK",
      operation,
    },
    {
      policy: "Digitally sign communications",
      status: "OK",
      operation,
    },
  ];

  setTimeout(() => {
    setTables(data);
  }, 150000);

  const submitClient = () => {
    //perform an axios request
    const data = {
      username,
      password,
    };
    setToast({ text: "Client Added" });
  };
  return (
    <>
      <Spacer />
      <div className="page__wrapper">
        <div className="page__content">
          <div className="projects"></div>
          <Card width="100%">
            <Text>Remediations Table</Text>
            <Button
              auto
              style={{ margin: "1rem 0", textAlign: "center" }}
              onClick={getAuditData}
            >
              Refresh
            </Button>
            <Divider></Divider>
            <Spacer />
            {tables !== undefined ? (
              <Table data={tables}>
                <Table.Column prop="policy" label="Policy" />
                <Table.Column prop="status" label="status" />
                <Table.Column prop="operation" label="operation" width={150} />
              </Table>
            ) : (
              <Text>You have not yet started Auditing !</Text>
            )}

            <Card.Footer></Card.Footer>
          </Card>
          <Spacer />
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
          width: 700px;
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
