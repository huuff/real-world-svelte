<script lang="ts">
  import ReactDOM from "react-dom/client";
  import React from "react";
  import type { Action } from "svelte/action";
  import Calendar from "react-calendar";
  import "react-calendar/dist/Calendar.css";

  type CalendarProps = {
    readonly value?: Date;
    readonly onchange: (newValue?: Date) => void;
  };
  const calendar: Action<HTMLElement, CalendarProps> = (element, { value, onchange }) => {
    const root = ReactDOM.createRoot(element);
    root.render(React.createElement(Calendar, { value, onChange: onchange as any }));

    return {
      update: ({ value: newDate, onchange: newOnchange }) => {
        root.render(
          React.createElement(Calendar, { value: newDate, onChange: newOnchange as any })
        );
      },
      destroy: () => {
        root.unmount();
      },
    };
  };

  let date: Date | undefined = new Date();

  const onchange = (newDate?: Date) => {
    date = newDate;
  };
</script>

<div use:calendar={{ value: date, onchange }} />
