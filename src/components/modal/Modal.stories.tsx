/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import Button from "../button/Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
};

export default meta;

export const Default: StoryObj<typeof Modal> = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Modal Title">
          <p>This is a sample modal body.</p>
        </Modal>
      </>
    );
  },
};
