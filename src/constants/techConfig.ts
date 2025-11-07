import javascriptIcon from "../assets/icons/javascript/javascript-original.svg";
import reactIcon from "../assets/icons/react/react-original.svg";
import typescriptIcon from "../assets/icons/typescript/typescript-original.svg";
import nextjsIcon from "../assets/icons/nextjs/nextjs-original.svg";
import tailwindcssIcon from "../assets/icons/tailwindcss/tailwindcss-original.svg";
import shadcnuiIcon from "../assets/icons/shadcnui/shadcnui.svg";
import tanstackqueryIcon from "../assets/icons/tanstackquery/tanstackquery.svg";
import zustandIcon from "../assets/icons/zustand/zustand-original.svg";
import axiosIcon from "../assets/icons/axios/axios-plain.svg";
import fcmIcon from "../assets/icons/firebase/firebase-original.svg";
import electronIcon from "../assets/icons/electron/electron-original.svg";
import threejsIcon from "../assets/icons/threejs/threejs-original.svg";
import socketioIcon from "../assets/icons/socketio/socketio-original.svg";
import chakrauiIcon from "../assets/icons/chakraui/chakraui-original.svg";
import reduxIcon from "../assets/icons/redux/redux-original.svg";
import framermotionIcon from "../assets/icons/framermotion/framermotion-original.svg";
import nodejsIcon from "../assets/icons/nodejs/nodejs-original.svg";
import gitIcon from "../assets/icons/git/git-original.svg";
import jiraIcon from "../assets/icons/jira/jira-original.svg";
import figmaIcon from "../assets/icons/figma/figma-original.svg";

export const techConfig: Record<
  string,
  { icon: string; bgColor: string; textColor: string }
> = {
  JavaScript: {
    icon: javascriptIcon,
    bgColor: "#F7DF1E",
    textColor: "#000000",
  },
  React: {
    icon: reactIcon,
    bgColor: "#61DAFB",
    textColor: "#FFFFFF",
  },
  "React.js": {
    icon: reactIcon,
    bgColor: "#61DAFB",
    textColor: "#FFFFFF",
  },
  TypeScript: {
    icon: typescriptIcon,
    bgColor: "#3178C6",
    textColor: "#FFFFFF",
  },
  "Next.js": {
    icon: nextjsIcon,
    bgColor: "#000000",
    textColor: "#FFFFFF",
  },
  "Tailwind CSS": {
    icon: tailwindcssIcon,
    bgColor: "#06B6D4",
    textColor: "#FFFFFF",
  },
  "Shadcn UI": {
    icon: shadcnuiIcon,
    bgColor: "#000000",
    textColor: "#FFFFFF",
  },
  "Tanstack Query": {
    icon: tanstackqueryIcon,
    bgColor: "#FF4154",
    textColor: "#FFFFFF",
  },
  Zustand: {
    icon: zustandIcon,
    bgColor: "#443E38",
    textColor: "#FFFFFF",
  },
  Redux: {
    icon: reduxIcon,
    bgColor: "#764ABC",
    textColor: "#FFFFFF",
  },
  Axios: {
    icon: axiosIcon,
    bgColor: "#5A29E4",
    textColor: "#FFFFFF",
  },
  FCM: {
    icon: fcmIcon,
    bgColor: "#FFCA28",
    textColor: "#000000",
  },
  Electron: {
    icon: electronIcon,
    bgColor: "#47848F",
    textColor: "#FFFFFF",
  },
  "Three.js": {
    icon: threejsIcon,
    bgColor: "#000000",
    textColor: "#FFFFFF",
  },
  WebSocket: {
    icon: socketioIcon,
    bgColor: "#010101",
    textColor: "#FFFFFF",
  },
  "Chakra UI": {
    icon: chakrauiIcon,
    bgColor: "#319795",
    textColor: "#FFFFFF",
  },
  "Framer Motion": {
    icon: framermotionIcon,
    bgColor: "#0055FF",
    textColor: "#FFFFFF",
  },
  "REST API": {
    icon: nodejsIcon,
    bgColor: "#5B9E58",
    textColor: "#FFFFFF",
  },
  Git: {
    icon: gitIcon,
    bgColor: "#F05032",
    textColor: "#FFFFFF",
  },
  Jira: {
    icon: jiraIcon,
    bgColor: "#0052CC",
    textColor: "#FFFFFF",
  },
  Figma: {
    icon: figmaIcon,
    bgColor: "#F24E1E",
    textColor: "#FFFFFF",
  },
};

export type TechConfig = typeof techConfig;

