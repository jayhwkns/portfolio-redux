import type { Technology } from "@/types/projectTimeline.js"
import {
  TbOutlineBrandCarbon, TbOutlineBrandCpp, TbOutlineBrandCSharp, TbOutlineBrandKotlin, TbOutlineBrandPython,
  TbOutlineBrandUnity, TbOutlineSql, TbOutlineBrandTypescript
} from "solid-icons/tb"
import styles from "@/styles/TechIcon.module.css"

// Hard-coded replacement for element dict. Not ideal.
export default function TechIcon(args: { tech: Technology }) {
  switch (args.tech) {
    case "c#":
      return <TbOutlineBrandCSharp class={styles.techicon} />
    case "unity":
      return <TbOutlineBrandUnity class={styles.techicon} />
    case "c":
      return <TbOutlineBrandCarbon class={styles.techicon} />
    case "c++":
      return <TbOutlineBrandCpp class={styles.techicon} />
    case "kotlin":
      return <TbOutlineBrandKotlin class={styles.techicon} />
    case "sql":
      return <TbOutlineSql class={styles.techicon} />
    case "python":
      return <TbOutlineBrandPython class={styles.techicon} />
    case "typescript":
      return <TbOutlineBrandTypescript class={styles.techicon} />
  }
}

