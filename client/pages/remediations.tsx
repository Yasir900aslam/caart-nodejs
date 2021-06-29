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

const Page = () => {
  const theme = useTheme();
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [toasts, setToast] = useToasts();
  const { visible, setVisible, bindings } = useModal();
  const [table, setTable] = useState([]);

  const getRemData = () => {};
  const operation = (actions, rowData) => {
    return (
      <Button type="error" auto onClick={() => actions.remove()}>
        Remove
      </Button>
    );
  };
  const data = [
    {
      rem_name: "Enumerate administrator accounts on elevation",
      status: "OK",
      isapplied: "Applied",
      operation,
    },

    {
      rem_name: "Turn off desktop gadgets",
      status: "OK",
      isapplied: "Applied",
      operation,
    },

    {
      rem_name: "Digital Locker",
      status: "OK",
      isapplied: "Applied",
      operation,
    },

    {
      rem_name: "System ASLR",
      status: "OK",
      isapplied: "Applied",
      operation,
    },

    {
      rem_name: "type",
      status: "Default",
      isapplied: "Applied",
      operation,
    },

    {
      rem_name: "Event Forwarding",
      status: "Blocked",
      isapplied: "Applied",
      operation,
    },
    {
      rem_name: "Location and Sensors",
      status: "Blocked",
      isapplied: "Applied",
      operation,
    },
    {
      rem_name: "Password Synchronization",
      status: "Enabled",
      isapplied: "Applied",
      operation,
    },
    {
      rem_name: "RD Licensing",
      status: "Enabled",
      isapplied: "Applied",
      operation,
    },
  ];

  setTimeout(() => {
    setTable(data);
  }, 150000);
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
              onClick={getRemData}
            >
              Refresh
            </Button>
            <Divider></Divider>
            <Spacer />
            {table !== undefined ? (
              <Table data={table}>
                <Table.Column prop="rem_name" label="Remediation Name" />
                <Table.Column prop="status" label="Status" />
                <Table.Column prop="isapplied" label="isapplied" />
                <Table.Column prop="operation" label="operation" width={150} />
              </Table>
            ) : (
              <Text> No Remediation have been performed</Text>
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
