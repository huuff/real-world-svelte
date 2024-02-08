<script lang="ts">
  import ReactDOM from "react-dom/client";
  import React from "react";
  import type { Action } from "svelte/action";
  import Calendar from "react-calendar";
  import "react-calendar/dist/Calendar.css";

  const calendar: Action<HTMLElement, Date> = (element, date) => {
    const onChange = (value: any) => {
      element.dispatchEvent(new CustomEvent("change", { detail: value }));
    };

    const root = ReactDOM.createRoot(element);
    root.render(React.createElement(Calendar, { value: date, onChange }));

    return {
      update: (newDate) => {
        root.render(React.createElement(Calendar, { value: newDate, onChange }));
      },
      destroy: () => {
        root.unmount();
      },
    };
  };

  let date = new Date();
</script>

<div use:calendar={date} on:change={(e) => (date = e.detail)} />
